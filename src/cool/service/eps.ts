import { isDev, config } from "../config";
import { BaseService } from "./base";
import { storage, toCamel } from "../utils";
import { isArray, isEmpty } from "lodash";

// 获取标签名
function getNames(v: any) {
	return [...Object.getOwnPropertyNames(v.constructor.prototype), ...Object.keys(v)].filter(
		(e) => !["namespace", "constructor", "request", "permission"].includes(e)
	);
}

// 标签名
const names = getNames(new BaseService());

export function useEps(service: Service) {
	// 创建描述文件
	function createDts(list: any[]) {
		function deep(v: any) {
			for (const i in v) {
				if (v[i].namespace) {
					v[i].namespace = v[i].namespace;

					// 模块
					const item: any = list.find((e: any) => e.prefix.includes(v[i].namespace));

					// 接口
					const api: any[] = item ? item.api : [];

					// 获取方法集合
					[...names, ...getNames(v[i])].forEach((e) => {
						if (!api.find((a) => a.path.includes(e))) {
							api.push({
								path: `/${e}`
							});
						}
					});

					if (item) {
						item.api = api;
					} else {
						list.push({
							prefix: `/${v[i].namespace}`,
							api
						});
					}
				} else {
					deep(v[i]);
				}
			}
		}

		deep(service);

		// 本地服务
		return service.request({
			url: "/__cool_eps",
			method: "POST",
			proxy: false,
			data: {
				service,
				list
			}
		});
	}

	// 获取 eps
	function getEps() {
		if (isDev && config.test.eps) {
			console.log('getEps')
			service
				.request({
					url: "/admin/base/open/eps"
				})
				.then(async (res) => {
					if (!isEmpty(res)) {
						const isLoaded: boolean = storage.get("eps");
						storage.set("eps", res);

						if (!isLoaded) {
							location.reload();
						} else {
							set(res, true);
							console.log("[Eps] 初始化成功。");
						}
					}
				})
				.catch((err) => {
					console.error("[Eps] 获取失败！", err.message);
					createDts([]);
				});
		}
	}

	// 设置
	async function set(d: any, c?: boolean) {
		const list: any[] = [];

		if (!d) {
			return false;
		}

		if (isArray(d)) {
			d = { d };
		}

		for (const i in d) {	// base
			if (isArray(d[i])) {
				d[i].forEach((e: any) => {	// e = {"module": "base", "api"...}
					// 分隔路径
					const arr = e.prefix	
						.replace(/\//, "")
						.replace("admin", "")
						.split("/")
						.filter(Boolean)
						.map(toCamel);	// ['Base', 'Comm']

					// 遍历
					function deep(d: any, i: number) {
						const k = arr[i];	// k = 'Base'	// k = 'Comm'

						if (k) {
							// 是否最后一个
							if (arr[i + 1]) {
								if (!d[k]) {
									d[k] = {};	// {request, 'Base': {}}
								}

								deep(d[k], i + 1);	// deep({}, 1)
							} else {
								// 本地不存在则创建实例
								if (!d[k]) {	// 	Base['Comm']
									d[k] = new BaseService({
										namespace: e.prefix.substr(1, e.prefix.length - 1)
									});	// {'Comm' : new BaseService({namespace: 'admin/base/comm'})}
									// {request, 'Base': {'Comm': new BaseService({namespace: 'admin/base/comm' }}
								}

								// 创建方法
								e.api.forEach((a: any) => {
									// a = {
									// 	"method": "post",
									//	"path": "/personUpdate",
									// 	"summary": "修改个人信息",
									// 	"dts": { },
									// 	"tag": "",
									// 	"prefix": "/admin/base/comm"
									// },
									// 方法名
									const n = (a.name || a.path).replace("/", "");	// n = "personUpdate"

									// 过滤
									if (!names.includes(n)) {
										// 本地不存在则创建
										if (!d[k][n]) {	// Base["Comm"]["personUpdate"]	
											if (n && !/[-:]/g.test(n)) {
												d[k][n] = function (data: any) {
													return this.request({
														url: a.path,
														method: a.method,
														[a.method.toLocaleLowerCase() == "post"
															? "data"
															: "params"]: data
													});
												};	// 
											}
										}
									}
								});

								// 创建权限
								if (!d[k].permission) {
									d[k].permission = {}; // Base["Comm"]["premission"]

									const ks = Array.from(new Set([...names, ...getNames(d[k])]));

									ks.forEach((e) => {
										d[k].permission[e] = `${d[k].namespace.replace(
											"admin/",
											""
										)}/${e}`.replace(/\//g, ":");
									});
								}

								list.push(e);
							}
						}
					}

					deep(service, 0);
				});
			}
		}

		if (isDev && c) {
			await createDts(list);
		}
	}

	// 解析
	try {
		const eps =
			storage.get("eps") ||
			JSON.parse(__EPS__ || "[]").map(([prefix, api]: any[]) => {
				return {
					prefix,
					api: api.map(([method, path, name]: string[]) => {
						return {
							method,
							path,
							name
						};
					})
				};
			});

		set(eps);
	} catch (err) {
		console.error("[Eps] 解析失败！", err);
	}

	// 获取
	getEps();
}
