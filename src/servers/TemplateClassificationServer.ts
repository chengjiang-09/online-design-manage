import TemplateClassification from "../models/TemplateClassification";
import Component from "../models/Components";
import ComponentsDefaults from "../models/ComponentsDefaults";
import ComponentsDefaultsConfigures from "../models/ComponentsDefaultsConfigures";
import ComponentsDefaultsConfiguresChartValue from "../models/ComponentsDefaultsConfiguresChartValue";
import ComponentsDefaultsConfiguresLayout from "../models/ComponentsDefaultsConfiguresLayout";
import ComponentsDefaultsConfiguresChartValueDetails from "../models/ComponentsDefaultsConfiguresChartValueDetails";
class TemplateClassificationServer {
  findAllTemplate() {
    return TemplateClassification.findAll();
  }
  findEveryThing() {
    return TemplateClassification.findAll({
      include: [
        {
          model: Component,
          include: [
            {
              model: ComponentsDefaults,
              include: [
                {
                  model: ComponentsDefaultsConfigures,
                  include: [
                    {
                      model: ComponentsDefaultsConfiguresChartValue,
                      include: [
                        {
                          model: ComponentsDefaultsConfiguresChartValueDetails,
                        },
                      ],
                    },
                    {
                      model: ComponentsDefaultsConfiguresLayout,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });
  }
}

export default new TemplateClassificationServer();
