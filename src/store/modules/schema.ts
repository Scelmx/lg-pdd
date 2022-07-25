import utils from "../../utils/utils"

export default {
  state() {
    return {
      activeId: '',
      activeSchema: undefined
    }
  },
  getters: {},
  mutations: {
    setActiveId(state: any, activeId: string) {
      const schema = JSON.parse(window.localStorage.getItem("schema") || '')
      state.activeId = activeId
      state.activeSchema = utils.findSchemaById(schema, activeId)
    },
  },
  actions: {
    init(state: any) {
      state.commit('setActiveId', '')
    },
    setActiveId(state: any, activeId: string) {
      state.commit('setActiveId', activeId)
    }
  },
  modules: {}
}