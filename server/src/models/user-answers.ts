import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "answers",
})
export class answers extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  answer1!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  answer2!: string;
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  answer3!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  answer4!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  answer5!: string;

}