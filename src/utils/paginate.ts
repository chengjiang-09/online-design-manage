/**
 * 
 * 分页统一处理
 * 
 * @param data 
 * @param currentPage 
 * @param total 
 * @param limit 
 * @returns 
 */
export const paginate = <T>(
  data: T,
  currentPage: number,
  total: number,
  limit: number
):{
    data: T,
    currentPage: number,
    total: number,
    totalPage: number,
    limit: number
} => {
  return {
    data,
    currentPage,
    total,
    totalPage: Math.ceil(total / limit),
    limit,
  };
};
