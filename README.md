#eps

eps 结构

(```)
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
    },
    {
      "module": "base",
      "api": [
        {
          "method": "post",
          "path": "/setKeep",
          "summary": "日志保存时间",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/log"
        },
        {
          "method": "get",
          "path": "/getKeep",
          "summary": "获得日志保存时间",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/log"
        },
        {
          "method": "post",
          "path": "/clear",
          "summary": "清理",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/log"
        },
        {
          "method": "post",
          "path": "/page",
          "summary": "分页查询",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/log"
        }
      ],
      "name": "BaseSysLogEntity",
      "columns": [
        {
          "propertyName": "id",
          "type": "number",
          "length": "",
          "comment": "ID",
          "nullable": false
        },
        {
          "propertyName": "userId",
          "type": "bigint",
          "length": "",
          "comment": "用户ID",
          "nullable": true
        },
        {
          "propertyName": "action",
          "type": "string",
          "length": "100",
          "comment": "行为",
          "nullable": false
        },
        {
          "propertyName": "ip",
          "type": "string",
          "length": "50",
          "comment": "ip",
          "nullable": true
        },
        {
          "propertyName": "ipAddr",
          "type": "string",
          "length": "50",
          "comment": "ip地址",
          "nullable": true
        },
        {
          "propertyName": "params",
          "type": "text",
          "length": "",
          "comment": "参数",
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
      "prefix": "/admin/base/sys/log"
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
          "prefix": "/admin/base/sys/menu"
        },
        {
          "method": "post",
          "path": "/update",
          "summary": "修改",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/menu"
        },
        {
          "method": "get",
          "path": "/info",
          "summary": "单个信息",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/menu"
        },
        {
          "method": "post",
          "path": "/list",
          "summary": "列表查询",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/menu"
        },
        {
          "method": "post",
          "path": "/page",
          "summary": "分页查询",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/menu"
        },
        {
          "method": "post",
          "path": "/add",
          "summary": "新增",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/menu"
        }
      ],
      "name": "BaseSysMenuEntity",
      "columns": [
        {
          "propertyName": "id",
          "type": "number",
          "length": "",
          "comment": "ID",
          "nullable": false
        },
        {
          "propertyName": "parentId",
          "type": "bigint",
          "length": "",
          "comment": "父菜单ID",
          "nullable": true
        },
        {
          "propertyName": "name",
          "type": "string",
          "length": "",
          "comment": "菜单名称",
          "nullable": false
        },
        {
          "propertyName": "router",
          "type": "string",
          "length": "",
          "comment": "菜单地址",
          "nullable": true
        },
        {
          "propertyName": "perms",
          "type": "string",
          "length": "",
          "comment": "权限标识",
          "nullable": true
        },
        {
          "propertyName": "type",
          "type": "tinyint",
          "length": "",
          "comment": "类型 0：目录 1：菜单 2：按钮",
          "nullable": false
        },
        {
          "propertyName": "icon",
          "type": "string",
          "length": "",
          "comment": "图标",
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
          "propertyName": "viewPath",
          "type": "string",
          "length": "",
          "comment": "视图地址",
          "nullable": true
        },
        {
          "propertyName": "keepAlive",
          "type": "boolean",
          "length": "",
          "comment": "路由缓存",
          "nullable": false
        },
        {
          "propertyName": "isShow",
          "type": "boolean",
          "length": "",
          "comment": "是否显示",
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
      "prefix": "/admin/base/sys/menu"
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
          "prefix": "/admin/base/sys/param"
        },
        {
          "method": "post",
          "path": "/update",
          "summary": "修改",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/param"
        },
        {
          "method": "get",
          "path": "/html",
          "summary": "获得网页内容的参数值",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/param"
        },
        {
          "method": "get",
          "path": "/info",
          "summary": "单个信息",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/param"
        },
        {
          "method": "post",
          "path": "/page",
          "summary": "分页查询",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/param"
        },
        {
          "method": "post",
          "path": "/add",
          "summary": "新增",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/param"
        }
      ],
      "name": "BaseSysParamEntity",
      "columns": [
        {
          "propertyName": "id",
          "type": "number",
          "length": "",
          "comment": "ID",
          "nullable": false
        },
        {
          "propertyName": "keyName",
          "type": "string",
          "length": "",
          "comment": "键位",
          "nullable": false
        },
        {
          "propertyName": "name",
          "type": "string",
          "length": "",
          "comment": "名称",
          "nullable": false
        },
        {
          "propertyName": "data",
          "type": "text",
          "length": "",
          "comment": "数据",
          "nullable": false
        },
        {
          "propertyName": "dataType",
          "type": "tinyint",
          "length": "",
          "comment": "数据类型 0:字符串 1：数组 2：键值对",
          "nullable": false
        },
        {
          "propertyName": "remark",
          "type": "string",
          "length": "",
          "comment": "备注",
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
      "prefix": "/admin/base/sys/param"
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
          "prefix": "/admin/base/sys/role"
        },
        {
          "method": "post",
          "path": "/update",
          "summary": "修改",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/role"
        },
        {
          "method": "get",
          "path": "/info",
          "summary": "单个信息",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/role"
        },
        {
          "method": "post",
          "path": "/list",
          "summary": "列表查询",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/role"
        },
        {
          "method": "post",
          "path": "/page",
          "summary": "分页查询",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/role"
        },
        {
          "method": "post",
          "path": "/add",
          "summary": "新增",
          "dts": {},
          "tag": "",
          "prefix": "/admin/base/sys/role"
        }
      ],
      "name": "BaseSysRoleEntity",
      "columns": [
        {
          "propertyName": "id",
          "type": "number",
          "length": "",
          "comment": "ID",
          "nullable": false
        },
        {
          "propertyName": "userId",
          "type": "string",
          "length": "",
          "comment": "用户ID",
          "nullable": false
        },
        {
          "propertyName": "name",
          "type": "string",
          "length": "",
          "comment": "名称",
          "nullable": false
        },
        {
          "propertyName": "label",
          "type": "string",
          "length": "50",
          "comment": "角色标签",
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
          "propertyName": "relevance",
          "type": "number",
          "length": "",
          "comment": "数据权限是否关联上下级",
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
      "prefix": "/admin/base/sys/role"
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
  "demo": [
    {
      "module": "demo",
      "api": [
        {
          "method": "post",
          "path": "/delete",
          "summary": "删除",
          "dts": {},
          "tag": "",
          "prefix": "/admin/demo/goods"
        },
        {
          "method": "post",
          "path": "/update",
          "summary": "修改",
          "dts": {},
          "tag": "",
          "prefix": "/admin/demo/goods"
        },
        {
          "method": "get",
          "path": "/info",
          "summary": "单个信息",
          "dts": {},
          "tag": "",
          "prefix": "/admin/demo/goods"
        },
        {
          "method": "post",
          "path": "/page",
          "summary": "分页查询",
          "dts": {},
          "tag": "",
          "prefix": "/admin/demo/goods"
        },
        {
          "method": "post",
          "path": "/list",
          "summary": "列表查询",
          "dts": {},
          "tag": "",
          "prefix": "/admin/demo/goods"
        },
        {
          "method": "post",
          "path": "/add",
          "summary": "新增",
          "dts": {},
          "tag": "",
          "prefix": "/admin/demo/goods"
        }
      ],
      "name": "DemoGoodsEntity",
      "columns": [
        {
          "propertyName": "id",
          "type": "number",
          "length": "",
          "comment": "ID",
          "nullable": false
        },
        {
          "propertyName": "title",
          "type": "string",
          "length": "",
          "comment": "标题",
          "nullable": false
        },
        {
          "propertyName": "pic",
          "type": "string",
          "length": "",
          "comment": "图片",
          "nullable": false
        },
        {
          "propertyName": "price",
          "type": "decimal",
          "length": "",
          "comment": "价格",
          "nullable": false
        },
        {
          "propertyName": "type",
          "type": "tinyint",
          "length": "",
          "comment": "分类",
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
      "prefix": "/admin/demo/goods"
    }
  ],
  "space": [
    {
      "module": "space",
      "api": [
        {
          "method": "post",
          "path": "/delete",
          "summary": "删除",
          "dts": {},
          "tag": "",
          "prefix": "/admin/space/info"
        },
        {
          "method": "post",
          "path": "/update",
          "summary": "修改",
          "dts": {},
          "tag": "",
          "prefix": "/admin/space/info"
        },
        {
          "method": "get",
          "path": "/info",
          "summary": "单个信息",
          "dts": {},
          "tag": "",
          "prefix": "/admin/space/info"
        },
        {
          "method": "post",
          "path": "/list",
          "summary": "列表查询",
          "dts": {},
          "tag": "",
          "prefix": "/admin/space/info"
        },
        {
          "method": "post",
          "path": "/page",
          "summary": "分页查询",
          "dts": {},
          "tag": "",
          "prefix": "/admin/space/info"
        },
        {
          "method": "post",
          "path": "/add",
          "summary": "新增",
          "dts": {},
          "tag": "",
          "prefix": "/admin/space/info"
        }
      ],
      "name": "SpaceInfoEntity",
      "columns": [
        {
          "propertyName": "id",
          "type": "number",
          "length": "",
          "comment": "ID",
          "nullable": false
        },
        {
          "propertyName": "url",
          "type": "string",
          "length": "",
          "comment": "地址",
          "nullable": false
        },
        {
          "propertyName": "type",
          "type": "string",
          "length": "",
          "comment": "类型",
          "nullable": false
        },
        {
          "propertyName": "classifyId",
          "type": "bigint",
          "length": "",
          "comment": "分类ID",
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
      "prefix": "/admin/space/info"
    },
    {
      "module": "space",
      "api": [
        {
          "method": "post",
          "path": "/delete",
          "summary": "删除",
          "dts": {},
          "tag": "",
          "prefix": "/admin/space/type"
        },
        {
          "method": "post",
          "path": "/update",
          "summary": "修改",
          "dts": {},
          "tag": "",
          "prefix": "/admin/space/type"
        },
        {
          "method": "get",
          "path": "/info",
          "summary": "单个信息",
          "dts": {},
          "tag": "",
          "prefix": "/admin/space/type"
        },
        {
          "method": "post",
          "path": "/list",
          "summary": "列表查询",
          "dts": {},
          "tag": "",
          "prefix": "/admin/space/type"
        },
        {
          "method": "post",
          "path": "/page",
          "summary": "分页查询",
          "dts": {},
          "tag": "",
          "prefix": "/admin/space/type"
        },
        {
          "method": "post",
          "path": "/add",
          "summary": "新增",
          "dts": {},
          "tag": "",
          "prefix": "/admin/space/type"
        }
      ],
      "name": "SpaceTypeEntity",
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
          "comment": "类别名称",
          "nullable": false
        },
        {
          "propertyName": "parentId",
          "type": "tinyint",
          "length": "",
          "comment": "父分类ID",
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
      "prefix": "/admin/space/type"
    }
  ],
  "task": [
    {
      "module": "task",
      "api": [
        {
          "method": "post",
          "path": "/delete",
          "summary": "删除",
          "dts": {},
          "tag": "",
          "prefix": "/admin/task/info"
        },
        {
          "method": "post",
          "path": "/update",
          "summary": "修改",
          "dts": {},
          "tag": "",
          "prefix": "/admin/task/info"
        },
        {
          "method": "post",
          "path": "/start",
          "summary": "开始",
          "dts": {},
          "tag": "",
          "prefix": "/admin/task/info"
        },
        {
          "method": "post",
          "path": "/once",
          "summary": "执行一次",
          "dts": {},
          "tag": "",
          "prefix": "/admin/task/info"
        },
        {
          "method": "post",
          "path": "/stop",
          "summary": "停止",
          "dts": {},
          "tag": "",
          "prefix": "/admin/task/info"
        },
        {
          "method": "get",
          "path": "/info",
          "summary": "单个信息",
          "dts": {},
          "tag": "",
          "prefix": "/admin/task/info"
        },
        {
          "method": "post",
          "path": "/page",
          "summary": "分页查询",
          "dts": {},
          "tag": "",
          "prefix": "/admin/task/info"
        },
        {
          "method": "get",
          "path": "/log",
          "summary": "日志",
          "dts": {},
          "tag": "",
          "prefix": "/admin/task/info"
        },
        {
          "method": "post",
          "path": "/add",
          "summary": "新增",
          "dts": {},
          "tag": "",
          "prefix": "/admin/task/info"
        }
      ],
      "name": "TaskInfoEntity",
      "columns": [
        {
          "propertyName": "id",
          "type": "number",
          "length": "",
          "comment": "ID",
          "nullable": false
        },
        {
          "propertyName": "jobId",
          "type": "string",
          "length": "",
          "comment": "任务ID",
          "nullable": true
        },
        {
          "propertyName": "repeatConf",
          "type": "string",
          "length": "1000",
          "comment": "任务配置",
          "nullable": true
        },
        {
          "propertyName": "name",
          "type": "string",
          "length": "",
          "comment": "名称",
          "nullable": false
        },
        {
          "propertyName": "cron",
          "type": "string",
          "length": "",
          "comment": "cron",
          "nullable": true
        },
        {
          "propertyName": "limit",
          "type": "number",
          "length": "",
          "comment": "最大执行次数 不传为无限次",
          "nullable": true
        },
        {
          "propertyName": "every",
          "type": "number",
          "length": "",
          "comment": "每间隔多少毫秒执行一次 如果cron设置了 这项设置就无效",
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
          "comment": "状态 0:停止 1：运行",
          "nullable": false
        },
        {
          "propertyName": "startDate",
          "type": "date",
          "length": "",
          "comment": "开始时间",
          "nullable": true
        },
        {
          "propertyName": "endDate",
          "type": "date",
          "length": "",
          "comment": "结束时间",
          "nullable": true
        },
        {
          "propertyName": "data",
          "type": "string",
          "length": "",
          "comment": "数据",
          "nullable": true
        },
        {
          "propertyName": "service",
          "type": "string",
          "length": "",
          "comment": "执行的service实例ID",
          "nullable": true
        },
        {
          "propertyName": "type",
          "type": "tinyint",
          "length": "",
          "comment": "状态 0:系统 1：用户",
          "nullable": false
        },
        {
          "propertyName": "nextRunTime",
          "type": "date",
          "length": "",
          "comment": "下一次执行时间",
          "nullable": true
        },
        {
          "propertyName": "taskType",
          "type": "tinyint",
          "length": "",
          "comment": "状态 0:cron 1：时间间隔",
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
      "prefix": "/admin/task/info"
    }
  ]
}
(```)

基于 eps 数据，useEps 解析数据并使用 BaseService 类扩充 service，使之变成
(```)
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
  chat: {};
  demo: {};
  request: Function;
  space: {};
  task: {};
  test: {};
}
(```)