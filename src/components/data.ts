import { computed, watch } from "vue";
import { useStore } from "vuex";

export function useData(schema: any ) {
  const $store: any = useStore()
  const $dataStore = $store?.state.dataStore || {}
  const { name, value } = schema

  const dynamicData = computed(() => {
    // 匹配双括号
    const tagReg: RegExp = /(?<={{).*(?=}})/g
    const targetName = value.match(tagReg)
    if (targetName) {
      const getData = new Function("data", `return data.${targetName[0]};`)
      return getData($dataStore) || value
    }
    return value
  })

  const data = computed(() => {
    return $dataStore[name] || dynamicData.value
  })

  watch(name, (oldVal, newVal) => {
    $store.dispatch('destoryStore', oldVal)
    $store.dispatch('setStore', name, newVal)
  })

  const initData = () => {
    console.log(data.value);
    $store.dispatch('setStore', { key: name, value: data.value })
  }

  const handleChange = () => {
    $store.dispatch('setStore', { key: name, value: data.value })
  }

  return { value: data.value, initData, handleChange }
}