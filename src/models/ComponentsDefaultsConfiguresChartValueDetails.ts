import {
  Model,
  Column,
  Table,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Optional } from "sequelize";
import ComponentsDefaultsConfiguresChartValue from "./ComponentsDefaultsConfiguresChartValue";

export interface ComponentsDefaultsConfiguresChartValueDetailsAttributes {
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  id?: number;
  label?: string;
  type?: string;
  value_id?: number;
  value?: string;
  component?: string;
  jsonData?: string;
}

interface ComponentsDefaultsConfiguresChartValueDetailsCreationAttributes
  extends Optional<
    ComponentsDefaultsConfiguresChartValueDetailsAttributes,
    "id"
  > {
  dataValues: any;
}

@Table({
  tableName: "components_defaults_configures_chart_value_details",
  modelName: "ComponentsDefaultsConfiguresChartValueDetails",
})
export default class ComponentsDefaultsConfiguresChartValueDetails extends Model<
  ComponentsDefaultsConfiguresChartValueDetailsAttributes,
  ComponentsDefaultsConfiguresChartValueDetailsCreationAttributes
> {
  @Column
  label?: string;
  @Column
  type?: string;
  @Column
  value?: string;
  @Column
  component?: string;
  @Column
  jsonData?: string;

  @ForeignKey(() => ComponentsDefaultsConfiguresChartValue)
  value_id?: number;

  @BelongsTo(() => ComponentsDefaultsConfiguresChartValue)
  componentsDefaultsConfiguresChartValue?: ComponentsDefaultsConfiguresChartValue[];
}
