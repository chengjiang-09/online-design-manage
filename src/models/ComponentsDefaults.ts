import {
  Model,
  Column,
  Table,
  BelongsTo,
  ForeignKey,
  HasMany,
} from "sequelize-typescript";
import { Optional } from "sequelize";
import Component from "./Components";
import ComponentsDefaultsConfigures from "./ComponentsDefaultsConfigures";

export interface ComponentsDefaultsAttributes {
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  id?: number;
  components_id?: number;
  label?: string;
  type?: string;
  icon?: string;
  component?: string;
}

interface ComponentsDefaultsCreationAttributes
  extends Optional<ComponentsDefaultsAttributes, "id"> {
  dataValues: any;
}

@Table({
  tableName: "components_defaults",
  modelName: "ComponentsDefaults",
})
export default class ComponentsDefaults extends Model<
  ComponentsDefaultsAttributes,
  ComponentsDefaultsCreationAttributes
> {
  @Column
  label?: string;
  @Column
  type?: string;
  @Column
  icon?: string;
  @Column
  component?: string;

  @ForeignKey(() => Component)
  @Column
  components_id?: number;

  @BelongsTo(() => Component)
  Component?: Component;

  @HasMany(() => ComponentsDefaultsConfigures)
  configure?: ComponentsDefaultsConfigures[];
}
