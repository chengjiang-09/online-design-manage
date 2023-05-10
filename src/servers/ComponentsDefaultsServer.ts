import ComponentsDefaults, {
  ComponentsDefaultsAttributes,
} from "../models/ComponentsDefaults";

class ComponentsDefaultsServer {
  createComponentDefault(componentsDefaults: ComponentsDefaultsAttributes) {
    return ComponentsDefaults.create(componentsDefaults);
  }
  updateComponentDefault(
    componentsDefaults: ComponentsDefaultsAttributes,
    id: string | number
  ) {
    return ComponentsDefaults.update(componentsDefaults, { where: { id } });
  }
  bulkCreateOrUpdateComponentDefault(
    componentsDefaults: Array<ComponentsDefaultsAttributes>
  ) {
    return ComponentsDefaults.bulkCreate(componentsDefaults, {
      updateOnDuplicate: Object.keys(
        {}
      ) as (keyof ComponentsDefaultsAttributes)[],
    });
  }
}

export default new ComponentsDefaultsServer();
