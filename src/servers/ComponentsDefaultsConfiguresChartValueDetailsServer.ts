import ComponentsDefaultsConfiguresChartValueDetails, {
  ComponentsDefaultsConfiguresChartValueDetailsAttributes,
} from "../models/ComponentsDefaultsConfiguresChartValueDetails";

class ComponentsDefaultsConfiguresChartValueDetailsServer {
  createComponentsDefaultsConfiguresChartValueDetails(
    componentsDefaultsConfiguresChartValueDetails: ComponentsDefaultsConfiguresChartValueDetailsAttributes
  ) {
    return ComponentsDefaultsConfiguresChartValueDetails.create(
      componentsDefaultsConfiguresChartValueDetails
    );
  }
  updateComponentsDefaultsConfiguresChartValueDetails(
    componentsDefaultsConfiguresChartValueDetails: ComponentsDefaultsConfiguresChartValueDetailsAttributes,
    id: string | number
  ) {
    return ComponentsDefaultsConfiguresChartValueDetails.update(
      componentsDefaultsConfiguresChartValueDetails,
      { where: { id } }
    );
  }
  bulkCreateOrUpdateComponentsDefaultsConfiguresChartValueDetails(
    componentsDefaultsConfiguresChartValueDetails: Array<ComponentsDefaultsConfiguresChartValueDetailsAttributes>
  ) {
    return ComponentsDefaultsConfiguresChartValueDetails.bulkCreate(
      componentsDefaultsConfiguresChartValueDetails,
      {
        updateOnDuplicate: Object.keys(
          {}
        ) as (keyof ComponentsDefaultsConfiguresChartValueDetailsAttributes)[],
      }
    );
  }
}

export default new ComponentsDefaultsConfiguresChartValueDetailsServer();
