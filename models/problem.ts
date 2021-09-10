/*
 * 题目
 */

import * as TypeORM from "typeorm"
import Model from "./common"

@TypeORM.Entity()
export default class Problem extends Model {
  static cache = true

  /**
   * 题目标题, 不能超过 80 个字符
   */
  @TypeORM.Column({ default: "-", type: "varchar", length: 80 })
  title: string

  /**
   * 作者
   */
  @TypeORM.Index()
  @TypeORM.Column({ nullable: true, type: "integer" })
  author_id: number

  /**
   * 字符串编号, 方便自编和排序
   */
  @TypeORM.Column({ type: "varchar", length: 10 })
  display_id: string

  /**
   * 存放 markdown 格式的内容
   */
  @TypeORM.Column({ nullable: false, type: "text" })
  body: string

  @TypeORM.Column({ type: "int", default: '0' })
  judge_state: number

}