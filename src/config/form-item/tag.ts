export default {
  name: '标签',
  config: {
    type: 'tag',
    name: 'tag',
    label: '',
    labelWidth: '',
    value: 'tag',
    status: 'success',
    size: 'small',
    closable: false,
    effect: 'dark',
    hiddenOn: '',
    labelTips: '',
    renderTag: {  //最终渲染的节点信息
      default: 'tag',
      elementUI: 'el-tag'
    },
    class: "",
    style: {},
    events: []
  }
}
