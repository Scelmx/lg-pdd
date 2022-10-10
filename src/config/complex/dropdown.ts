export default {
  name: '下拉菜单',
  config: {
    type: 'dropdown',
    name: 'dropdown',
    mode: '', // type
    context: '下拉菜单',
    size: 'default',
    maxHeight: '',
    splitButton: false,
    disabled: false,
    placement: 'bottom',
    trigger: 'hover',
    hideOnClick: true,
    showTimeout: 200,
    hideTimeout: 200,
    renderTag: {  //最终渲染的节点信息
      default: 'ul',
      elementUI: 'el-menu'
    },
    children: [],
    class: "",
    style: {},
    events: []
  }
}
