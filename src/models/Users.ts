import { Column, Model, Table, DataType } from "sequelize-typescript";
import { Optional } from "sequelize";

interface UserAttributes {
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  id?: number;
  user_name?: string;
  password?: string;
  email?: string;
  role_id?: number;
  group_id?: string;
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id'>{
  dataValues: any;
}

//用户表
@Table({
  tableName: "users",
  modelName: "User",
})
export default class User extends Model<UserAttributes, UserCreationAttributes> {
  @Column({
    type: DataType.TEXT,
  })
  user_name!: string;
  @Column({
    type: DataType.TEXT,
  })
  password?: string;
  @Column({
    type: DataType.TEXT,
  })
  email!: string;
  @Column({
    type: DataType.INTEGER,
    comment:'权限id'
  })
  role_id!: number;
  @Column({
    type: DataType.TEXT,
    comment:'组id,为了方便不同组,这里使用json数组,数组中存放不同组的id'
  })
  group_id!: string;
}
