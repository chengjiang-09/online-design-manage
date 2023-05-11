import ComponentsDefaultsConfigures, {
  ComponentsDefaultsConfiguresAttributes,
} from "../models/ComponentsDefaultsConfigures";
class ComponentsDefaultsConfiguresServer {
  createComponentsDefaultsConfigures(
    componentsDefaultsConfigures: ComponentsDefaultsConfiguresAttributes
  ) {
    return ComponentsDefaultsConfigures.create(componentsDefaultsConfigures);
  }
  updateComponentsDefaultsConfigures(
    componentsDefaultsConfigures: ComponentsDefaultsConfiguresAttributes,
    id: number | string
  ) {
    return ComponentsDefaultsConfigures.update(componentsDefaultsConfigures, {
      where: { id },
    });
  }
  bulkCreateOrUpdateComponentsDefaultsConfigures(
    componentsDefaultsConfigures: Array<ComponentsDefaultsConfiguresAttributes>
  ) {
    return ComponentsDefaultsConfigures.bulkCreate(
      componentsDefaultsConfigures,
      {
        updateOnDuplicate: Object.keys(
          componentsDefaultsConfigures[0]
        ) as (keyof ComponentsDefaultsConfiguresAttributes)[],
      }
    );
  }
}

export default new ComponentsDefaultsConfiguresServer();
