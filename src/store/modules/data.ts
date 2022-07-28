export default {
  state() {
    return {
      test: "yes"
    }
  },
  getters: {},
  mutations: {
    setStore(state: any, data: any) {
      state = Object.assign(state, {
        [data.key]: data.value
      })
    },
    destroyStore(state: any, key: string) {
      state[key] = undefined
    }
  },
  actions: {
    setStore(state: any, data: any) {
      state.commit('setStore', data)
    },
    destroyStore(state: any, key: string) {
      state.commit('destroyStore', key)
    }
  }
}