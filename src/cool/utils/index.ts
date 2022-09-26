import { isArray, orderBy } from "lodash-es";
import storage from "./storage";
import module from "./module";

// 深度合并
export function deepMerge (a: any, b: any) {
  let k;
  for (k in b) {
    a[k] =
      a[k] && a[k].toString() === "[object Object]" ? deepMerge(a[k], b[k]) : (a[k] = b[k]);
  }
  return a;
}

// 文件名
export function filename (path: string): string {
  return basename(path.substring(0, path.lastIndexOf(".")));
}

// 获取地址栏参数
export function getUrlParam (name: string): string | null {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  const r = window.location.search.substring(1).match(reg);
  if (r != null) return decodeURIComponent(r[2]);
  return null;
}

// 路径名称
export function basename (path: string): string {
  let index = path.lastIndexOf("/");
  index = index > -1 ? index : path.lastIndexOf("\\");
  if (index < 0) {
    return path;
  }
  return path.substring(index + 1);
}

// 文件路径转对象
export function deepFiles (list: any[]) {
  const modules: any = {};

  list.forEach((e) => {
    const arr = e.path.split("/");
    const parents = arr.slice(0, arr.length - 1);
    const name = basename(e.path).replace(".ts", "");

    let curr: any = modules;
    let prev: any = null;
    let key: any = null;

    parents.forEach((k: string) => {
      if (!curr[k]) {
        curr[k] = {};
      }

      prev = curr;
      curr = curr[k];
      key = k;
    });

    if (name == "index") {
      prev[key] = e.value;
    } else {
      curr[name] = e.value;
    }
  });

  return modules;
}

// 浏览器信息
export function getBrowser () {
  const { clientHeight, clientWidth } = document.documentElement;

  // 浏览器信息
  const ua = navigator.userAgent.toLowerCase();

  // 浏览器类型
  let type = (ua.match(/firefox|chrome|safari|opera/g) || "other")[0];

  if ((ua.match(/msie|trident/g) || [])[0]) {
    type = "msie";
  }

  // 平台标签
  let tag = "";

  const isTocuh =
    "ontouchstart" in window || ua.indexOf("touch") !== -1 || ua.indexOf("mobile") !== -1;
  if (isTocuh) {
    if (ua.indexOf("ipad") !== -1) {
      tag = "pad";
    } else if (ua.indexOf("mobile") !== -1) {
      tag = "mobile";
    } else if (ua.indexOf("android") !== -1) {
      tag = "androidPad";
    } else {
      tag = "pc";
    }
  } else {
    tag = "pc";
  }

  // 浏览器内核
  let prefix = "";

  switch (type) {
    case "chrome":
    case "safari":
    case "mobile":
      prefix = "webkit";
      break;
    case "msie":
      prefix = "ms";
      break;
    case "firefox":
      prefix = "Moz";
      break;
    case "opera":
      prefix = "O";
      break;
    default:
      prefix = "webkit";
      break;
  }

  // 操作平台
  const plat = ua.indexOf("android") > 0 ? "android" : navigator.platform.toLowerCase();

  // 屏幕信息
  let screen = "full";

  if (clientWidth < 768) {
    screen = "xs";
  } else if (clientWidth < 992) {
    screen = "sm";
  } else if (clientWidth < 1200) {
    screen = "md";
  } else if (clientWidth < 1920) {
    screen = "xl";
  } else {
    screen = "full";
  }

  // 是否 ios
  const isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

  // 浏览器版本
  const version = (ua.match(/[\s\S]+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1];

  // 是否 PC 端
  const isPC = tag === "pc";

  // 是否移动端
  const isMobile = isPC ? false : true;

  // 是否移动端 + 屏幕宽过小
  const isMini = screen === "xs" || isMobile;

  return {
    height: clientHeight,
    width: clientWidth,
    version,
    type,
    plat,
    tag,
    prefix,
    isMobile,
    isIOS,
    isPC,
    isMini,
    screen
  };
}

// 列表转树形
export function deepTree (list: any[]): any[] {
  const newList: Array<any> = [];
  const map: any = {};

  list.forEach((e) => (map[e.id] = e));

  list.forEach((e) => {
    const parent = map[e.parentId];

    if (parent) {
      (parent.children || (parent.children = [])).push(e);
    } else {
      newList.push(e);
    }
  });

  const fn = (list: Array<any>) => {
    list.map((e) => {
      if (e.children instanceof Array) {
        e.children = orderBy(e.children, "orderNum");

        fn(e.children);
      }
    });
  };

  fn(newList);

  return orderBy(newList, "orderNum");
}

// 树形转列表
export function revDeepTree (list: Array<any> = []) {
  const d: Array<any> = [];
  let id = 0;

  const deep = (list: Array<any>, parentId: any) => {
    list.forEach((e) => {
      if (!e.id) {
        e.id = id++;
      }

      e.parentId = parentId;

      d.push(e);

      if (e.children && isArray(e.children)) {
        deep(e.children, e.id);
      }
    });
  };

  deep(list || [], null);

  return d;
}

// 横杠转驼峰
export function toCamel (str: string): string {
  return str.replace(/([^-])(?:-+([^-]))/g, function ($0, $1, $2) {
    return $1 + $2.toUpperCase();
  });
}

export { storage, module };
