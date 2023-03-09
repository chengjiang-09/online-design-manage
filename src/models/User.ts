import { Column, Model, Table } from "sequelize-typescript";

//用户表
@Table({
    tableName: 'users'
})
export default class User extends Model {
    @Column
    user_name!:string
    @Column
    password?:string
    @Column
    email!:string
    @Column
    role_id!:number
    @Column
    group_id!:string
}