import { Model, Column, Table, HasMany } from "sequelize-typescript";
import Component from "./Components";
import { Optional } from "sequelize";

export interface TemplateClassificationAttributes {
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  id?: number;
  label?: string;
  type?: string;
  icon?: string;
  component?: string;
  components: Component[];
}

interface TemplateClassificationCreationAttributes
  extends Optional<TemplateClassificationAttributes, "id"> {
  dataValues: any;
}

@Table({
  tableName: "template_classification",
  modelName: "TemplateClassification",
})
export default class TemplateClassification extends Model<
  TemplateClassificationAttributes,
  TemplateClassificationCreationAttributes
> {
  @Column
  label?: string;
  @Column
  type?: string;
  @Column
  icon?: string;
  @Column
  component?: string;

  @HasMany(() => Component)
  items?: Component[];
}
