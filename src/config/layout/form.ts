export default {
  name: '表单',
  config: {
    type: 'form',
    name: 'form',
    renderTag: {
      //最终渲染的节点信息
      default: "form",
      elementUI: 'el-from',
    },
    children: [],
    class: "",
    style: {
      padding: '0 0 0 0',
      childMargin: '0 0 0 0', // 会透传给子项
    },
    events: []
  }
}
