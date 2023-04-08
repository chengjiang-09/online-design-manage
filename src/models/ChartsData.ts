import { Table, Column, Model, DataType } from "sequelize-typescript";
import { Optional } from "sequelize";

export interface ChartDataAttributes {
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  id?: number;
  chart_id?: number;
  data?: object;
}

interface ChartDataCreationAttributes
  extends Optional<ChartDataAttributes, "id"> {
  dataValues: ChartDataAttributes | null;
}

@Table({
  tableName: "charts_data",
  modelName: "ChartsData",
})
export default class ChartData extends Model<
  ChartDataAttributes,
  ChartDataCreationAttributes
> {
  @Column
  chart_id?: number;
  @Column({
    type: DataType.JSON,
  })
  data!: object;
}
