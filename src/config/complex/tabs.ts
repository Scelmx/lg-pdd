export default {
  name: '标签页',
  config: {
    type: 'tabs',
    mode: '',
    tabPosition: 'top',
    closable: false,
    addable: false,
    editable: false,
    stretch: false,
    renderTag: {  //最终渲染的节点信息
      default: 'ul',
      elementUI: 'el-tabs'
    },
    children: [{
      itemLabel: "选项1",
      value: 1,
      children: [],
      renderTag: {
        default: 'li',
        elementUI: 'el-tab-pane'
      }
    },
    {
      itemLabel: "选项2",
      value: 2,
      children: [],
      renderTag: {
        default: 'li',
        elementUI: 'el-tab-pane'
      }
    }],
    class: "",
    style: {},
    events: []
  }
}
