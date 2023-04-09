import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Optional } from "sequelize";
import Chart from "./Charts";

export interface ChartsDataAttributes {
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  id?: number;
  chart_id?: number;
  data?: object;
}

interface ChartsDataCreationAttributes
  extends Optional<ChartsDataAttributes, "id"> {
  dataValues: ChartsDataAttributes | null;
}

@Table({
  tableName: "charts_data",
  modelName: "ChartsData",
})
export default class ChartsData extends Model<
  ChartsDataAttributes,
  ChartsDataCreationAttributes
> {
  @Column({
    type: DataType.JSON,
  })
  data!: object;

  @ForeignKey(() => Chart)
  @Column
  chart_id?: number;

  @BelongsTo(() => Chart)
  Chart?: Chart;
}
