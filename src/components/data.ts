import { computed, watch } from 'vue';
import { useStore } from 'vuex';

export function useData(schema: any) {
  const $store: any = useStore();
  const $dataStore = $store?.state.dataStore || {};
  const { name, value } = schema;

  /**
   * @desc 获取options
   */
  const getOptions = computed(() => {
    if (schema.dynamicOptions && schema.dynamicOptions.length) {
      return $dataStore[schema.dynamicOptions]
    }
    return schema.staticOptions
  })

  /**
   * @desc 从store中获取数据源, 存在则使用store数据，反之使用属性默认值
   */
  const dynamicData = computed(() => {
    // 匹配双括号
    const val = value || ''
    const tagReg: RegExp = /(?<={{).*(?=}})/g;
    const targetName = val.match(tagReg);
    if (targetName) {
      const getData = new Function('data', `return data.${targetName[0]};`);
      return getData($dataStore) || val;
    }
    return val;
  });

  /**
   * @desc 优先使用远程数据
   */
  const data = computed(() => {
    return $dataStore[name] || dynamicData.value;
  });

  watch(name, (oldVal, newVal) => {
    $store.dispatch('destoryStore', oldVal);
    $store.dispatch('setStore', name, newVal);
  });

  /**
   * @desc 初始化store数据
   */
  const initData = () => {
    $store.dispatch('setStore', { key: name, value: data.value });
  };

  /**
   * @desc 触发事件导致数据改变时改变store数据
   */
  const handleChange = () => {
    $store.dispatch('setStore', { key: name, value: data.value });
  };

  return {
    value: data.value,
    getOptions: getOptions.value,
    initData,
    handleChange,
  };
}
