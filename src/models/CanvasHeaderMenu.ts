import { Model, Table, Column } from 'sequelize-typescript'
import { Optional } from 'sequelize'

interface CanvasHeaderMenuAttributes {
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    id?: number;
    name?: string
    type?: string
}

interface CanvasHeaderMenuCreationAttributes extends Optional<CanvasHeaderMenuAttributes, 'id'>{
    dataValues: any
}

@Table({
    tableName: 'canvas_header_menu',
    modelName: 'CanvasHeaderMenu'
})
export default class CanvasHeaderMenu extends Model<CanvasHeaderMenuAttributes, CanvasHeaderMenuCreationAttributes> {
    @Column
    name?: string
    @Column
    type?: string
}