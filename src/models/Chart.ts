import { Column, Model, Table } from "sequelize-typescript";

//模板表
@Table
export default class Chart extends Model {
    @Column
    name!:string
    @Column
    author_name!:string
    @Column
    author_id!:number
    @Column
    origin_author_name!:string
    @Column
    origin_author_id!:number
    @Column
    data!:string
}