import {
  Model,
  Column,
  Table,
  BelongsTo,
  ForeignKey,
  HasMany
} from "sequelize-typescript";
import TemplateClassification from "./TemplateClassification";
import { Optional } from "sequelize";
import ComponentsDefaults from "./ComponentsDefaults";

interface ComponentAttributes {
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  id?: number;
  template_id?: number;
  label?: string;
  type?: string;
  imgPath?: string;
  icon?: string;
  component?: string;
}

interface ComponentCreationAttributes
  extends Optional<ComponentAttributes, "id"> {
  dataValues: any;
}

@Table({
  tableName: "components",
  modelName: "Components",
})
export default class Component extends Model<
  ComponentAttributes,
  ComponentCreationAttributes
> {
  @Column
  label?: string;
  @Column
  type?: string;
  @Column
  imgPath?: string;
  @Column
  icon?: string;
  @Column
  component?: string;

  @ForeignKey(() => TemplateClassification)
  @Column
  template_id?: number;

  @BelongsTo(() => TemplateClassification)
  templateClassification?: TemplateClassification;

  @HasMany(() => ComponentsDefaults)
  default?:ComponentsDefaults[]
}
