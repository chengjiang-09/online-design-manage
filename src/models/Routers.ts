import { Model, Column, Table, DataType } from "sequelize-typescript";
import { Optional } from "sequelize";

interface RouterAttributes {
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  id?: number;
  parent_id?: string;
  permission_weight?: number;
  name?: string;
  path?: string;
  component?: string;
  icon?:string
  label?:string
}

interface RouterCreationAttributes extends Optional<RouterAttributes, "id"> {
  dataValues: any;
}

@Table({
  tableName: "routers",
  modelName: "Router",
})
export default class Router extends Model<
  RouterAttributes,
  RouterCreationAttributes
> {
  @Column({
    type: DataType.TEXT,
    comment: "父路由id",
  })
  parent_id?: string;
  @Column({
    type: DataType.INTEGER,
    comment: "路由权重",
  })
  permission_weight!: number;
  @Column
  name!: string;
  @Column
  path!: string;
  @Column
  component!: string;
  @Column
  icon?:string
  @Column
  label?:string
}
