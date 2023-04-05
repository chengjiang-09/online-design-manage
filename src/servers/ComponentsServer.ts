import Component from "../models/Components";
class ComponentsServer {
  findComponentByTemplateId(template_id: number) {
    return Component.findOne({
      where: { template_id: template_id },
    });
  }
}

export default new ComponentsServer();
