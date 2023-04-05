import { Model, Column, Table, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { Optional } from 'sequelize'
import ComponentsDefaultsConfigures from './ComponentsDefaultsConfigures';

interface ComponentsDefaultsConfiguresLayoutAttributes {
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    id?: number;
    configures_id?:number
    label?: string
    type?: string
    value?: string
}

interface ComponentsDefaultsConfiguresLayoutCreationAttributes extends Optional<ComponentsDefaultsConfiguresLayoutAttributes, 'id'>{
    dataValues: any;
}

@Table({
    tableName: "components_defaults_configures_layout",
    modelName: "ComponentsDefaultsConfiguresLayout",
})
export default class ComponentsDefaultsConfiguresLayout extends Model<ComponentsDefaultsConfiguresLayoutAttributes, ComponentsDefaultsConfiguresLayoutCreationAttributes>{
    @Column
    label?: string
    @Column
    type?: string
    @Column
    value?: string

    @ForeignKey(() => ComponentsDefaultsConfigures)
    @Column
    configures_id?: number
  
    @BelongsTo(() => ComponentsDefaultsConfigures)
    componentsDefaultsConfigures?: ComponentsDefaultsConfigures;
}