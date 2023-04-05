import {
  Model,
  Column,
  Table,
  ForeignKey,
  BelongsTo,
  HasMany,
} from "sequelize-typescript";
import { Optional } from "sequelize";
import ComponentsDefaults from "./ComponentsDefaults";
import ComponentsDefaultsConfiguresChartValue from "./ComponentsDefaultsConfiguresChartValue";
import ComponentsDefaultsConfiguresLayout from "./ComponentsDefaultsConfiguresLayout";

interface ComponentsDefaultsConfiguresAttributes {
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  id?: number;
  defaults_id?: number;
  label?: string;
  type?: string;
  value?: string;
  disabled?: string;
  component?: string;
  jsonData?: string;
}

interface ComponentsDefaultsConfiguresCreationAttributes
  extends Optional<ComponentsDefaultsConfiguresAttributes, "id"> {
  dataValues: any;
}

@Table({
  tableName: "components_defaults_configures",
  modelName: "ComponentsDefaultsConfigures",
})
export default class ComponentsDefaultsConfigures extends Model<
  ComponentsDefaultsConfiguresAttributes,
  ComponentsDefaultsConfiguresCreationAttributes
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
  disabled?: string;
  @Column
  jsonData?: string;

  @ForeignKey(() => ComponentsDefaults)
  @Column
  defaults_id?: number;

  @BelongsTo(() => ComponentsDefaults)
  componentsDefaults?: ComponentsDefaults;

  @HasMany(() => ComponentsDefaultsConfiguresChartValue)
  values?: ComponentsDefaultsConfiguresChartValue[];

  @HasMany(() => ComponentsDefaultsConfiguresLayout)
  default?: ComponentsDefaultsConfiguresLayout[];
}
