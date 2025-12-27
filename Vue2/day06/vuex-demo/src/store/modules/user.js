// user模块
const state = {
  userInfo: {
    name: 'zs',
    age: 18
  },
  score: 80
}
const mutations = {}
const actions = {}
const getters = {}

export default {
  // 1.开启命名空间
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
