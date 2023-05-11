import ComponentsDefaultsConfiguresChartValue, {
  ComponentsDefaultsConfiguresChartValueAttributes,
} from "../models/ComponentsDefaultsConfiguresChartValue";

class ComponentsDefaultsConfiguresChartValueServer {
  createComponentsDefaultsConfiguresChartValue(
    componentsDefaultsConfiguresChartValue: ComponentsDefaultsConfiguresChartValueAttributes
  ) {
    return ComponentsDefaultsConfiguresChartValue.create(
      componentsDefaultsConfiguresChartValue
    );
  }
  updateComponentsDefaultsConfiguresChartValue(
    componentsDefaultsConfiguresChartValue: ComponentsDefaultsConfiguresChartValueAttributes,
    id: string | number
  ) {
    return ComponentsDefaultsConfiguresChartValue.update(
      componentsDefaultsConfiguresChartValue,
      { where: { id } }
    );
  }
  bulkCreateOrUpdateComponentsDefaultsConfiguresChartValue(
    componentsDefaultsConfiguresChartValue: Array<ComponentsDefaultsConfiguresChartValueAttributes>
  ) {
    return ComponentsDefaultsConfiguresChartValue.bulkCreate(
      componentsDefaultsConfiguresChartValue,
      {
        updateOnDuplicate: Object.keys(
          componentsDefaultsConfiguresChartValue[0]
        ) as (keyof ComponentsDefaultsConfiguresChartValueAttributes)[],
      }
    );
  }
}

export default new ComponentsDefaultsConfiguresChartValueServer();
