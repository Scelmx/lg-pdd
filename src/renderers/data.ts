import { computed, reactive, ref, toRefs, watch } from 'vue';
import { useStore } from 'vuex';

interface Schema {
  value: any,
  instance: any,
  $store: any
}

export function useData(schema: any) {
  const state = reactive<Schema>({
    value: "",
    instance: "",
    $store: useStore()
  })
  const $dataStore = state.$store?.state.dataStore || {};
  const isUpdateStore = ref(true);
 
  /**
   * @description 获取options
   */
  const getOptions = computed(() => {
    if (schema.value.dynamicOptions && schema.value.dynamicOptions.length) {
      return $dataStore[schema.value.dynamicOptions]
    }
    return schema.value.staticOptions
  })

  /**
   * @description 从store中获取数据源, 存在则使用store数据，反之使用属性默认值
   */
  const dynamicData = () => {
    // 匹配双括号
    const { value } = schema.value
    const val = value || ''
    const tagReg: RegExp = /(?<={{).*(?=}})/g;
    const targetName = val.match(tagReg);
    try {
      if (targetName) {
        isUpdateStore.value = false
        const getData = new Function('data', `return data.${targetName[0]};`);
        return getData($dataStore) || val;
      }
    } catch (err) {
      console.warn(err, "输入动态值时异常")
    }
    return val;
  };

  watch(schema, (newSchema, oldSchema) => {
    distoryStore(oldSchema);
    initData();
  }, { deep: true })

  const toTargetType = (val: string, func: Function) => {
    try {
      return func(val)
    } catch(e) {
      console.log("转换失败，请检查字符串是否正确")
    }
  }

  /**
   * @description 初始化store数据
   */
  const initData = () => {
    const { name }= schema.value;
    state.value = $dataStore[name] || dynamicData()
    handleChange()
  };

  /**
   * @description 销毁store
   */
  const distoryStore = (config: any = schema.value) => {
    const { name }= config;
    state.$store.dispatch('setStore', { key: name, value: undefined });
  }

  /**
   * @description 触发事件导致数据改变时改变store数据
   */
  const handleChange = () => {
    const { name }= schema.value;
    state.$store.dispatch('setStore', { key: name, value: state.value });
  };

  return {
    ...toRefs(state),
    getOptions,
    toTargetType,
    initData,
    handleChange,
  };
}
