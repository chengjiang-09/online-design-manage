import Component, { ComponentAttributes } from "../models/Components";
class ComponentsServer {
  findComponentByTemplateId(template_id: number) {
    return Component.findOne({
      where: { template_id: template_id },
    });
  }
  bulkCreateOrUpdateComponent(component: Array<ComponentAttributes>) {
    return Component.bulkCreate(component, {
      updateOnDuplicate: Object.keys(
        component[0]
      ) as (keyof ComponentAttributes)[],
    });
  }
}

export default new ComponentsServer();
