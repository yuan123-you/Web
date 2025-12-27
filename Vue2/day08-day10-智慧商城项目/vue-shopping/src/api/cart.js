/**
 * 购物车相关API接口
 * 提供购物车的增删改查功能
 */

// 导入封装好的axios请求实例
import request from '@/utils/request'

/**
 * 加入购物车
 * @param {number} goodsId - 商品ID，如iphone8的ID
 * @param {number} goodsNum - 商品数量
 * @param {number} goodsSkuId - 商品规格ID，如红色iphone8的ID、粉色iphone8的ID
 * @returns {Promise} 返回包含响应数据的Promise对象
 */
export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/add', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

/**
 * 获取购物车列表
 * @returns {Promise} 返回包含购物车列表数据的Promise对象
 */
export const getCartList = () => {
  return request.get('/cart/list')
}

/**
 * 更新购物车商品数量
 * @param {number} goodsId - 商品ID
 * @param {number} goodsNum - 新的商品数量
 * @param {number} goodsSkuId - 商品规格ID
 * @returns {Promise} 返回包含响应数据的Promise对象
 */
export const changeCount = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/update', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

/**
 * 删除购物车商品
 * @param {Array<number>} cartIds - 要删除的购物车项ID数组
 * @returns {Promise} 返回包含响应数据的Promise对象
 */
export const delSelect = (cartIds) => {
  return request.post('/cart/clear', {
    cartIds
  })
}
