import utils from "../../utils/utils"

export default {
  state() {
    return {
      activeId: '',
      activeSchema: undefined,
      schema: undefined
    }
  },
  getters: {},
  mutations: {
    /**
     * 设置当前选中schema 对象
     * @param state 
     * @param activeId 
     */
    setActiveId(state: any, activeId: string) {
      const schema = state.schema || {}
      state.activeId = activeId
      state.activeSchema = utils.findSchemaById(schema, activeId).target || {}
    },

    /**
     * 给当前页的schema重新赋值
     * @param state 
     * @param schema 
     */
    setSchema(state: any, schema: any) {
      state.schema = schema
    }
  },
  actions: {
    init(state: any) {
      state.commit('setActiveId', '')
    },
    setActiveId(state: any, activeId: string) {
      state.commit('setActiveId', activeId)
    },
    setSchema(state: any, schema: any) {
      state.commit('setSchema', schema)
    }
  },
  modules: {}
}