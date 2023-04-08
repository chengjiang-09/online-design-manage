import { Column, Model, Table, DataType } from "sequelize-typescript";
import { Optional } from "sequelize";

export interface ChartsAttributes {
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  id?: number;
  author_name?: string;
  author_id?: number;
  origin_author_name?: string;
  origin_author_id?: number;
  group_id?: any[];
  title?: string;
  context?: string;
  imgPath?:string
}

export interface ChartsCreationAttributes extends Optional<ChartsAttributes, "id"> {
  dataValues?: ChartsAttributes | null;
}

//模板表
@Table({
  tableName: "charts",
  modelName: "Chart",
})
export default class Chart extends Model<
  ChartsAttributes,
  ChartsCreationAttributes
> {
  @Column
  author_name!: string;
  @Column
  author_id!: number;
  @Column
  origin_author_name!: string;
  @Column
  origin_author_id!: number;
  @Column({
    type: DataType.JSON,
  })
  group_id?: any[];
  @Column
  title?: string;
  @Column
  context?: string;
  @Column
  imgPath?:string
}
