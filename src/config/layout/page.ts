export default {
  name: '页面',
  config: {
    type: 'page',
    name: 'page',
    title: '标题',
    children: [],
    renderTag: {
      //最终渲染的节点信息
      default: "main",
      elementUI: 'el-selection',
    },
    class: "",
    style: {
      padding: '0 0 0 0',
      childMargin: '0 0 0 0', // 会透传给子项
    },
    events: []
  }
}
