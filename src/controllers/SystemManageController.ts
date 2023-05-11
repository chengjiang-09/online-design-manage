import { Context } from "koa";
import response from "../utils/response";
import UserServer from "../servers/UserServer";
import RouterServer from "../servers/RouterServer";
import { paginate } from "../utils/paginate";
import { getNowTimeInChina } from "../utils/utils";
import { UserAttributes } from "../models/Users";
import TemplateClassificationServer from "../servers/TemplateClassificationServer";
import { TemplateClassificationAttributes } from "../models/TemplateClassification";
import { ComponentAttributes } from "../models/Components";
import { ComponentsDefaultsAttributes } from "../models/ComponentsDefaults";
import { ComponentsDefaultsConfiguresAttributes } from "../models/ComponentsDefaultsConfigures";
import ComponentsServer from "../servers/ComponentsServer";
import { ComponentsDefaultsConfiguresChartValueAttributes } from "../models/ComponentsDefaultsConfiguresChartValue";
import { ComponentsDefaultsConfiguresChartValueDetailsAttributes } from "../models/ComponentsDefaultsConfiguresChartValueDetails";
import ComponentsDefaultsServer from "../servers/ComponentsDefaultsServer";
import ComponentsDefaultsConfiguresServer from "../servers/ComponentsDefaultsConfiguresServer";
import ComponentsDefaultsConfiguresChartValueServer from "../servers/ComponentsDefaultsConfiguresChartValueServer";
import ComponentsDefaultsConfiguresChartValueDetailsServer from "../servers/ComponentsDefaultsConfiguresChartValueDetailsServer";

interface PageData {
  limit: number;
  page: number;
}

interface UpdateUser {
  id: string | number;
  username: string;
}

interface ComponentsDefaultsConfigures
  extends ComponentsDefaultsConfiguresAttributes {
  values: Array<ComponentsDefaultsConfiguresChartValue>;
  default: Array<any>;
}

interface ComponentsDefaultsConfiguresChartValue
  extends ComponentsDefaultsConfiguresChartValueAttributes {
  values: Array<ComponentsDefaultsConfiguresChartValueDetailsAttributes>;
}

interface Template {
  template: Array<TemplateClassificationAttributes>;
  component: Array<ComponentAttributes>;
  default: Array<ComponentsDefaultsAttributes>;
  configure: Array<ComponentsDefaultsConfigures>;
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
  async updateTemplate(ctx: Context) {
    const template = ctx.request.body as Template;

    try {
      const updateAt = getNowTimeInChina();

      if (template.template.length > 0) {
        template.template.forEach((_templateData, index) => {
          template.template[index].updated_at = updateAt as unknown as Date;
        });

        await TemplateClassificationServer.bulkCreateOrUpdateTemplate(
          template.template
        );
      }

      if (template.component.length > 0) {
        template.component.forEach((_component, index) => {
          template.component[index].updated_at = updateAt as unknown as Date;
        });

        await ComponentsServer.bulkCreateOrUpdateComponent(template.component);
      }

      if (template.default.length > 0) {
        template.default.forEach((_default, index) => {
          template.default[index].updated_at = updateAt as unknown as Date;
        });

        await ComponentsDefaultsServer.bulkCreateOrUpdateComponentDefault(
          template.default
        );
      }

      if (template.configure.length > 0) {
        let chartValue: ComponentsDefaultsConfiguresChartValue[] = [];
        let chartValueDetail: ComponentsDefaultsConfiguresChartValueDetailsAttributes[] =
          [];
        template.configure.forEach((configure, index) => {
          template.configure[index].updated_at = updateAt as unknown as Date;
          template.configure[index].jsonData = JSON.stringify(template.configure[index].jsonData)
          configure.values.forEach((value) => {
            value.updated_at = updateAt as unknown as Date
            chartValue.push(value)
            value.values.forEach(data => {
              data.updated_at = updateAt as unknown as Date
              data.jsonData = JSON.stringify(data.jsonData)
              chartValueDetail.push(data)
            })
          });
        });
        
        await ComponentsDefaultsConfiguresServer.bulkCreateOrUpdateComponentsDefaultsConfigures(
          template.configure
        );

        await ComponentsDefaultsConfiguresChartValueServer.bulkCreateOrUpdateComponentsDefaultsConfiguresChartValue(
          chartValue
        );

        await ComponentsDefaultsConfiguresChartValueDetailsServer.bulkCreateOrUpdateComponentsDefaultsConfiguresChartValueDetails(
          chartValueDetail
        );
      }

      response.success(ctx, "更新成功");
    } catch (e) {
      console.log(e);

      response.error(ctx, "更新失败", {}, 404);
    }
  }
}

export default new SystemManageController();
