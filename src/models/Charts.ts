import { Column, Model, Table, DataType } from "sequelize-typescript";
import { Optional } from "sequelize";

export interface ChartsAttributes {
  id?: number;
  author_name?: string;
  author_id?: number;
  origin_author_name?: string;
  origin_author_id?: number;
  data?: string;
  group_id?: string[];
  title?: string;
  context?: string;
}

export interface ChartsCreationAttributes extends Optional<ChartsAttributes, "id"> {
  dataValues?: any;
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
  data!: string;
  @Column({
    type: DataType.JSON,
  })
  group_id?: string[];
  @Column
  title?: string;
  @Column
  context?: string;
}
