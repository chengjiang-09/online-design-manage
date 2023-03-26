import { Model, Table, Column } from "sequelize-typescript";

@Table({
    tableName: 'roles',
    modelName: 'Role'
})
export default class Role extends Model {
    @Column
    role_weight!:number
    @Column
    role_name!:string
}