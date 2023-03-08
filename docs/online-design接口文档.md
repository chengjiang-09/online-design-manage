# 一、公共分类

### 短信验证码登录

> 基本信息

path: /onlineDesign/login

Method: post

接口描述: 

> 请求参数

Headers

| 参数名       | 参数值           | 是否必须 | 示例 | 备注 |
| ------------ | ---------------- | -------- | ---- | ---- |
| Content-Type | application/json | 是       |      |      |

Body

| 名称   | 类型   | 是否必须 | 默认值 | 备注       | 其他信息               |
| ------ | ------ | -------- | ------ | ---------- | ---------------------- |
| mobile | String | 是       |        | 手机号     | undefined: 18286427545 |
| code   | String | 是       |        | 短信验证码 | undefined: 000000      |

> 返回数据

| 名称         | 类型   | 是否必须 | 默认值 | 备注     | 其他信息              |
| ------------ | ------ | -------- | ------ | -------- | --------------------- |
| code         | number | 是       |        | 状态码   |                       |
| msg          | String | 是       |        | 提示信息 | undefined: 登录成功！ |
| data         | Object | 是       |        | 用户信息 |                       |
| ├─ id        | number | 是       |        | 用户ID   | undefined: null       |
| ├─ user_name | String | 是       |        | 用户名   |                       |
| ├─ password  | String | 是       |        | 密码     | undefined: null       |
| ├─ email     | String | 是       |        | 邮箱     | undefined: admin      |
| ├─ role_id   | number | 是       |        | 权限ID   |                       |

### 短信验证码（Mock）

> 基本信息

path: /mobile/code

Method: get

接口描述: 

> 请求参数

Headers

| 参数名       | 参数值           | 是否必须 | 示例 | 备注 |
| ------------ | ---------------- | -------- | ---- | ---- |
| Content-Type | application/json | 是       |      |      |

query

| 备注   | 名称    | 类型   | 是否必须 | 默认值 | 其他信息               |
| ------ | ------- | ------ | -------- | ------ | ---------------------- |
| 手机号 | account | String | 是       |        | undefined: 18286427545 |

> 返回数据

| 名称      | 类型   | 是否必须 | 默认值 | 备注     | 其他信息              |
| --------- | ------ | -------- | ------ | -------- | --------------------- |
| msg       | String | 是       |        | 提示信息 | undefined: 登录成功！ |
| result    | Object | 是       |        | 用户信息 |                       |
| ├─ status | String | 是       |        | 状态信息 | undefined: 1          |
| ├─ code   | String | 是       |        | 验证码   | undefined: 000000     |

### 校验短信验证码

> 基本信息

path: /mobile/valiableode

Method: get

接口描述: 

> 请求参数

Headers

| 参数名       | 参数值           | 是否必须 | 示例 | 备注 |
| ------------ | ---------------- | -------- | ---- | ---- |
| Content-Type | application/json | 是       |      |      |

query

| 备注   | 名称    | 类型   | 是否必须 | 默认值 | 其他信息               |
| ------ | ------- | ------ | -------- | ------ | ---------------------- |
| 手机号 | account | String | 是       |        | undefined: 18286427545 |

> 返回数据

| 名称      | 类型   | 是否必须 | 默认值 | 备注     | 其他信息              |
| --------- | ------ | -------- | ------ | -------- | --------------------- |
| msg       | String | 是       |        | 提示信息 | undefined: 登录成功！ |
| result    | Object | 是       |        | 用户信息 |                       |
| ├─ status | String | 是       |        | 状态信息 | undefined: 1          |
| ├─ code   | String | 是       |        | 验证码   | undefined: 000000     |

