import { Column, Model, Table } from "sequelize-typescript";
import { Optional } from "sequelize";

interface ChartsAttributes {
  id?: number;
  name?: string;
  author_name?: string;
  author_id?: number;
  origin_author_name?: string;
  origin_author_id?: number;
  data?: string;
}

interface ChartsCreationAttributes extends Optional<ChartsAttributes, 'id'>{
    dataValues?: any
}

//模板表
@Table({
  tableName: "charts",
  modelName: "Chart",
})
export default class Chart extends Model<ChartsAttributes, ChartsCreationAttributes> {
  @Column
  name!: string;
  @Column
  author_name!: string;
  @Column
  author_id!: number;
  @Column
  origin_author_name!: string;
  @Column
  origin_author_id!: number;
  @Column
  data!: string;
}
