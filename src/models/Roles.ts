import { Model, Table, Column, HasMany } from "sequelize-typescript";
import { Optional } from "sequelize";
import Users from "./Users";

interface RolesAttributes {
  id?: number;
  role_weight?: number;
  role_name?: string;
}

interface RolesCreationAttributes extends Optional<RolesAttributes, "id"> {
    dataValues?: any;
}

@Table({
  tableName: "roles",
  modelName: "Role",
})
export default class Role extends Model<RolesAttributes, RolesCreationAttributes> {
  @Column
  role_weight!: number;
  @Column
  role_name!: string;

  @HasMany(() => Users)
  users?:Users
}
