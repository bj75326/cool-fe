# eps

## eps 结构

```javascript
{
  "base": [
    {
      "module": "base",
      "api": [
        {
          "method": "post",
          "path": "/personUpdate",
          "summary": "修改个人信息",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/comm"
        },
        {
          "method": "get",
          "path": "/uploadMode",
          "summary": "文件上传模式",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/comm"
        },
        {
          "method": "get",
          "path": "/permmenu",
          "summary": "权限与菜单",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/comm"
        },
        {
          "method": "get",
          "path": "/person",
          "summary": "个人信息",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/comm"
        },
        {
          "method": "post",
          "path": "/upload",
          "summary": "文件上传",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/comm"
        },
        {
          "method": "post",
          "path": "/logout",
          "summary": "退出",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/comm"
        }
      ],
      "columns": [],
      "prefix": "/admin/base/comm"
    },
    {
      "module": "base",
      "api": [
        {
          "method": "get",
          "path": "/refreshToken",
          "summary": "刷新token",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/open"
        },
        {
          "method": "get",
          "path": "/captcha",
          "summary": "验证码",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/open"
        },
        {
          "method": "post",
          "path": "/login",
          "summary": "登录",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/open"
        },
        {
          "method": "get",
          "path": "/html",
          "summary": "获得网页内容的参数值",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/open"
        },
        {
          "method": "get",
          "path": "/eps",
          "summary": "实体信息与路径",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/open"
        }
      ],
      "columns": [],
      "prefix": "/admin/base/open"
    },
    {
      "module": "base",
      "api": [
        {
          "method": "post",
          "path": "/delete",
          "summary": "删除",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/department"
        },
        {
          "method": "post",
          "path": "/update",
          "summary": "修改",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/department"
        },
        {
          "method": "post",
          "path": "/order",
          "summary": "排序",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/department"
        },
        {
          "method": "post",
          "path": "/list",
          "summary": "列表查询",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/department"
        },
        {
          "method": "post",
          "path": "/add",
          "summary": "新增",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/department"
        }
      ],
      "name": "BaseSysDepartmentEntity",
      "columns": [
        {
          "propertyName": "id",
          "type": "number",
          "length": "",
          "comment": "ID",
          "nullable": false
        },
        {
          "propertyName": "name",
          "type": "string",
          "length": "",
          "comment": "部门名称",
          "nullable": false
        },
        {
          "propertyName": "parentId",
          "type": "bigint",
          "length": "",
          "comment": "上级部门ID",
          "nullable": true
        },
        {
          "propertyName": "orderNum",
          "type": "number",
          "length": "",
          "comment": "排序",
          "nullable": false
        },
        {
          "propertyName": "createTime",
          "type": "datetime",
          "length": "",
          "comment": "创建时间",
          "nullable": false
        },
        {
          "propertyName": "updateTime",
          "type": "datetime",
          "length": "",
          "comment": "更新时间",
          "nullable": false
        }
      ],
      "prefix": "/admin/base/sys/department"
    },{...},{...},{...},{...},
    {
      "module": "base",
      "api": [
        {
          "method": "post",
          "path": "/delete",
          "summary": "删除",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/user"
        },
        {
          "method": "post",
          "path": "/update",
          "summary": "修改",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/user"
        },
        {
          "method": "post",
          "path": "/move",
          "summary": "移动部门",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/user"
        },
        {
          "method": "get",
          "path": "/info",
          "summary": "单个信息",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/user"
        },
        {
          "method": "post",
          "path": "/list",
          "summary": "列表查询",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/user"
        },
        {
          "method": "post",
          "path": "/page",
          "summary": "分页查询",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/user"
        },
        {
          "method": "post",
          "path": "/add",
          "summary": "新增",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/user"
        }
      ],
      "name": "BaseSysUserEntity",
      "columns": [
        {
          "propertyName": "id",
          "type": "number",
          "length": "",
          "comment": "ID",
          "nullable": false
        },
        {
          "propertyName": "departmentId",
          "type": "bigint",
          "length": "",
          "comment": "部门ID",
          "nullable": true
        },
        {
          "propertyName": "name",
          "type": "string",
          "length": "",
          "comment": "姓名",
          "nullable": true
        },
        {
          "propertyName": "username",
          "type": "string",
          "length": "100",
          "comment": "用户名",
          "nullable": false
        },
        {
          "propertyName": "password",
          "type": "string",
          "length": "",
          "comment": "密码",
          "nullable": false
        },
        {
          "propertyName": "passwordV",
          "type": "number",
          "length": "",
          "comment": "密码版本, 作用是改完密码，让原来的token失效",
          "nullable": false
        },
        {
          "propertyName": "nickName",
          "type": "string",
          "length": "",
          "comment": "昵称",
          "nullable": true
        },
        {
          "propertyName": "headImg",
          "type": "string",
          "length": "",
          "comment": "头像",
          "nullable": true
        },
        {
          "propertyName": "phone",
          "type": "string",
          "length": "20",
          "comment": "手机",
          "nullable": true
        },
        {
          "propertyName": "email",
          "type": "string",
          "length": "",
          "comment": "邮箱",
          "nullable": true
        },
        {
          "propertyName": "remark",
          "type": "string",
          "length": "",
          "comment": "备注",
          "nullable": true
        },
        {
          "propertyName": "status",
          "type": "tinyint",
          "length": "",
          "comment": "状态 0:禁用 1：启用",
          "nullable": false
        },
        {
          "propertyName": "socketId",
          "type": "string",
          "length": "",
          "comment": "socketId",
          "nullable": true
        },
        {
          "propertyName": "createTime",
          "type": "datetime",
          "length": "",
          "comment": "创建时间",
          "nullable": false
        },
        {
          "propertyName": "updateTime",
          "type": "datetime",
          "length": "",
          "comment": "更新时间",
          "nullable": false
        }
      ],
      "prefix": "/admin/base/sys/user"
    }
  ],
  "demo": [{...}],
  "space": [{...},{...}],
  "task": [{...}]
}
```

## 扩充 service 对象

基于 eps 数据，useEps 解析数据并使用 BaseService 类扩充 service，使之变成

```typescript
{
  base: {
    comm: {
      namesapce: "admin/base/comm";
      logout: Function;
      permission: {
        "list": "base:comm:list";
        "page": "base:comm:page";
        "info": "base:comm:info";
        "update": "base:comm:update";
        "delete": "base:comm:delete";
        "add": "base:comm:add";
        "personUpdate": "base:comm:personUpdate";
        "uploadMode": "base:comm:uploadMode";
        "permmenu": "base:comm:permmenu";
        "person": "base:comm:person";
        "upload": "base:comm:upload";
        "logout": "base:comm:logout";
      };
      permmenu: Function;
      person: Function;
      personUpdate: Function;
      upload: Function;
      uploadMode: Function;
    };
    open: {
      namespace: "admin/base/open";
      permission: {
        "list": "base:open:list";
        "page": "base:open:page";
        "info": "base:open:info";
        "update": "base:open:update";
        "delete": "base:open:delete";
        "add": "base:open:add";
        "refreshToken": "base:open:refreshToken";
        "captcha": "base:open:captcha";
        "login": "base:open:login";
        "html": "base:open:html";
        "eps": "base:open:eps";
      };
      captcha: Function;
      eps: Function;
      ...
    };
  };
  // 类似 base
  chat: {...};
  demo: {...};
  request: Function;
  space: {...};
  task: {...};
  test: {...};
}
```

> 其中 chat 与 test 是 useModule 解析模块时添加的 service。

## createDts

使用 vite-cool 插件，劫持路径 "/__cool_eps" 的请求生成

1. service.d.ts `// service 对象描述文件`
2. eps.json `// eps 文件，格式为 [method, path, name]`
3. entity.d.ts `// entity 描述文件，基于 eps column 生成`

## create menu



# 权限管理

## menu

cool-admin menu 动态存储在 base_sys_menu 表内，数据记录类型分为三种：

1. type = 0 `// 目录`
2. type = 1 `// 菜单`
3. type = 2 `// 权限`

> 目录与菜单的主要区别在于菜单对应具体的页面，其 viewPath 有指定的 view 组件，而目录则为菜单的父级或者更高。  
> 每个菜单页面拥有一个或者更多的权限，一条权限记录对应某一个菜单页面上所具备的某一个具体的权限。

cool-admin-vue 客户端 menu store 会从后台获取 menu 数据，并且解析为下面三种存放在 local storage 内：

1. menu.routes `// view 路由，viewer 会全部添加到路由 index 下面`
2. menu.group `// 菜单组`
3. menu.perms `// base_sys_menu 内所有的权限记录字符串`

在解析 eps 时，service 最底层每个服务都生成了按照路径命名（使用“:”分隔，如 “base:comm:list”）的 permission 对象，menu store 会使用这个 permission 对象与从后台获取的 menu.perms 逐一对比得到 _permission，例如：

service
```typescript
{
  base: {
    comm: {
      namesapce: "admin/base/comm";
      permission: {
        "list": "base:comm:list";
        ...
      };
      _permission: {
        list: false; // menu.perms 内不存在 “base:comm:list” 权限字符串。
        ...
      };
    };
    ...
  };
  space: {
    info: {
      namespace: "admin/space/info";
      permission: {
        "list": "space:info:list";
        ...
      };
      _permission: {
        list: true; // menu.perms 内存在 “space:info:list” 权限字符串。
      };
    };
    ...
  };
}
```

## role

# CRUD