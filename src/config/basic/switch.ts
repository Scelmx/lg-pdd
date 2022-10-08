export default {
  name: '开关',
  config: {
    name: 'switch',
    type: 'switch',
    value: false,
    disabledOn: "",
    width: "",
    size: "default",
    loading: false,
    validateEvent: false,
    renderTag: {
      //最终渲染的节点信息
      default: 'input',
      elementUI: 'el-switch',
      isSingle: true,
    },
    class: "",
    style: {},
    events: []
  }
};
