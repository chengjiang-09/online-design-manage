import { Context } from "koa";
import response from "../utils/response";
import UserServer from "../servers/UserServer";
import RouterServer from "../servers/RouterServer";
import { paginate } from "../utils/paginate";
import { getNowTimeInChina } from "../utils/utils";
import { UserAttributes } from "../models/Users";

interface PageData {
  limit: number;
  page: number;
}

interface UpdateUser {
  id: string | number;
  username: string;
}

interface TemplateData {
  icon: string,
  component: string,
  label: string,
  type: string,
  id: number | string | null,
}

interface ComponentData {
  component: any,
  label: any,
  type: any,
  imgPath: any,
  icon: any,
  id: number | string | null,
  template_id: number | string | null,
}

interface DefaultData {
  icon: any,
  component: any,
  label: any,
  type: any,
  id: number | string | null,
  components_id: number | string | null,
}

interface ConfigureData {
  component: any,
  label: any,
  type: any,
  value: any,
  disabled: any,
  jsonData: any,
  values: Array<ChartData>,
  default: Array<any>,
  id: number | string | null,
}

interface ChartDataDetail {
  id: number | string | null,
  label: any,
  type: any,
  value: any,
  component: any,
  jsonData: Array<string>,
  value_id: any
}

interface ChartData {
  id: number | string | null,
  label: any,
  type: any,
  component: any,
  value: any,
  configures_id: number | string | null,
  values: Array<ChartDataDetail>
}

interface Template {
  template: Array<TemplateData>,
  component: Array<ComponentData>,
  default: Array<DefaultData>,
  configure: Array<ConfigureData>,
}

class SystemManageController {
  async getAllUsers(ctx: Context) {
    const pageData = ctx.request.query as unknown as PageData;

    if (pageData && !isNaN(pageData.limit) && !isNaN(pageData.page)) {
      const { rows, count } = await UserServer.findAllUsers(
        Number(pageData.page),
        Number(pageData.limit)
      );

      const paginateData = paginate(rows, pageData.page, count, pageData.limit);
      response.success(ctx, "获取用户列表成功", paginateData);
    }
  }
  async updateUser(ctx: Context) {
    const newData = ctx.request.body as UpdateUser;
    
    if (newData && newData.id && newData.username) {
      try {
        const updateAt = getNowTimeInChina();
        await UserServer.updateUserName(
          {
            updated_at: updateAt,
            user_name: newData.username,
          } as unknown as UserAttributes,
          newData.id
        );

        const User = await UserServer.findUserById(newData.id);
        console.log(User);
        
        response.success(ctx, "更新用户名成功", User);
      } catch (e) {
        console.log(e);

        response.error(ctx, "更新用户名失败", {}, 404);
      }
    }
  }
  async getAllRoutes(ctx: Context) {
    const pageData = ctx.request.query as unknown as PageData;

    if (pageData && !isNaN(pageData.limit) && !isNaN(pageData.page)) {
      const { rows, count } = await RouterServer.getRouteAll(
        Number(pageData.page),
        Number(pageData.limit)
      );

      const paginateData = paginate(rows, pageData.page, count, pageData.limit);
      response.success(ctx, "获取路由列表成功", paginateData);
    }
  }
  updateTemplate(ctx:Context) {
    const template = ctx.request.body as Template

    console.log(template);

    response.success(ctx, '修改成功')
    
  }
}

export default new SystemManageController();
