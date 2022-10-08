export default {
  name: '按钮',
  config: {
    name: 'button',
    type: 'button',
    value: '提交',
    hiddenOn: "",
    disabledOn: "",
    category: "",
    size: "default",
    plain: false,
    round: false,
    circle: false,
    loading: false,
    loadingIcon: "Loading",
    icon: "",
    renderTag: {
      //最终渲染的节点信息
      default: 'button',
      elementUI: 'el-button',
    },
    style: {},
    events: []
  }
};
