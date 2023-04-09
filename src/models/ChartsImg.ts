import {
  Table,
  Column,
  Model,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import { Optional } from "sequelize";
import Chart from "./Charts";

export interface ChartsImgAttributes {
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  id?: number;
  chart_id?: number;
  img_path?: string;
  name?:string
}

interface ChartsImgCreationAttributes
  extends Optional<ChartsImgAttributes, "id"> {
  dataValues: ChartsImgAttributes | null;
}

@Table({
  tableName: "charts_img",
  modelName: "ChartsImg",
})
export default class ChartsImg extends Model<
  ChartsImgAttributes,
  ChartsImgCreationAttributes
> {
  @Column
  img_path?: string;

  @Column
  name?:string

  @ForeignKey(() => Chart)
  @Column
  chart_id?: number;

  @BelongsTo(() => Chart)
  Chart?: Chart;
}
