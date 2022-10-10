export default {
  name: '标签页',
  config: {
    type: 'tabs',
    renderTag: {  //最终渲染的节点信息
      default: 'ul',
      elementUI: 'el-tabs'
    },
    children: [],
    class: "",
    style: {},
    events: []
  }
}
