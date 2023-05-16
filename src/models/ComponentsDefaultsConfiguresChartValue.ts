import {
  Model,
  Column,
  Table,
  BelongsTo,
  ForeignKey,
  HasMany
} from "sequelize-typescript";
import { Optional } from "sequelize";
import ComponentsDefaultsConfigures from "./ComponentsDefaultsConfigures";
import ComponentsDefaultsConfiguresChartValueDetails from "./ComponentsDefaultsConfiguresChartValueDetails";

export interface ComponentsDefaultsConfiguresChartValueAttributes {
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  id?: number;
  configures_id?: number;
  label?: string;
  type?: string;
  component?: string;
  value?: string;
  jsonData?: string;
}

interface ComponentsDefaultsConfiguresChartValueCreationAttributes
  extends Optional<ComponentsDefaultsConfiguresChartValueAttributes, "id"> {
  dataValues: any;
}

@Table({
  tableName: "components_defaults_configures_chart_value",
  modelName: "ComponentsDefaultsConfiguresChartValue",
})
export default class ComponentsDefaultsConfiguresChartValue extends Model<
  ComponentsDefaultsConfiguresChartValueAttributes,
  ComponentsDefaultsConfiguresChartValueCreationAttributes
> {
  @Column
  label?: string;
  @Column
  type?: string;
  @Column
  component?: string;
  @Column
  value?: string;
  @Column
  jsonData?: string;

  @ForeignKey(() => ComponentsDefaultsConfigures)
  @Column
  configures_id?: number;

  @BelongsTo(() => ComponentsDefaultsConfigures)
  componentsDefaultsConfigures?: ComponentsDefaultsConfigures;

  @HasMany(() => ComponentsDefaultsConfiguresChartValueDetails)
  values?: ComponentsDefaultsConfiguresChartValueDetails[];
}
