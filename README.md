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
        ...
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
        ...
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
        ...
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
        ...
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
        ...
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
        ...
      ],
      "prefix": "/admin/base/sys/user"
    }
  ],
  "demo": [{...}],
  "space": [{...},{...}],
  "task": [{...}]
}
```

> column 用于菜单页 table。

## 扩充 service 对象

基于 eps 数据，useEps 解析数据并使用 BaseService 类扩充 service，使之变成

```typescript
{
  base: {
    comm: {
      namesapce: "admin/base/comm";
      logout: Function;
      permission: {
        "list": "base:comm:list"; // 按照 eps 路径生成的权限字符串
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

todo

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

> permission 对象罗列的是按照 cool-admin 权限字符串命名规则，在解析 eps 时生成的所有可能的权限字符串。v-permission 会使用 permission 对象数据控制一些组件显隐。
> _permission 对象描述的是 permission 对象内的权限字符串是否已经在被使用。

## v-permission 指令

参考 cool-admin 官网 [权限](https://www.cool-admin.com/admin/vue/permission.html)，通过指令分析传递给指令的权限字符串或者对象，使用 css display 控制显隐。

> cool-admin v-permission 指令使用 service 对象内 permission 的值与 menu.perms 进行比较来做显隐判断，其实可以做的还有很多，比如通过 user role 来做显隐判断等等。

## 角色列表

角色列表菜单页维护角色数据，只显示当前用户所拥有的角色。

cool-admin 用户（ user ），角色（ role ），部门（ department ），ER图：

![user_role_department_ER](https://raw.githubusercontent.com/bj75326/image-bed/main/images/cl_user_role_dep.png)

role 可以配置功能权限和数据权限：

1. 功能权限：配置角色对各个目录、菜单、权限（对应 menu 三种类型）的权限，后台参考表 base_sys_role_menu。
2. 数据权限：配置角色对各个部门的数据权限，后台参考 base_sys_role_department。

## 菜单列表

菜单列表菜单页维护目录、菜单、权限（对应 menu 三种类型）的数据，按照当前用户角色配置的**功能权限**显示数据。

## 用户列表

用户列表菜单页维护用户数据，按照当前用户角色配置的**数据权限**显示数据。

## 总结



# CRUD