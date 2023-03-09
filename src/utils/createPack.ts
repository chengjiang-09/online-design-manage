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
