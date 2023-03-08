import { Column, Model, Table } from "sequelize-typescript";

//用户表
@Table
export default class Chart extends Model {
    @Column
    user_name!:string
    @Column
    password?:string
    @Column
    email!:string
    @Column
    role_id!:number
}