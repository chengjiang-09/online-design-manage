import { getDate, isEmpty } from "./utils";

interface CreateData {
  createdAt: string | symbol;
  updatedAt: string | symbol;
  deletedAt: string | symbol | null;
  [key: string | number | symbol]: any;
}

interface Value {
  [key: string | number | symbol]: any;
}

/**
 * 向数据库中插入数据时，对数据进行二次封装，添加一些必要字段
 * （此处可能会被sequelize默认字段覆盖）
 * 
 * @param value 
 * @returns 
 */
function createPack(value: Value): CreateData {
  let nowTime = getDate();
  let createData: CreateData = {
    createdAt: nowTime,
    updatedAt: nowTime,
    deletedAt: null,
  };

  if (!isEmpty(value)) {
    for (let key in value) {
      createData[key] = value[key];
    }
  }
  return createData;
}

export default createPack;
