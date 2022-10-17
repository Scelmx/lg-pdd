export default {
  name: '导航菜单',
  config: {
    type: 'nav',
    name: 'nav',
    mode: 'horizontal',
    backgroundColor: '#fff',
    textColor: '#303133',
    activeTextColor: '#409EFF',
    defaultActive: '',
    menuTrigger: 'hover',
    collapse: false,
    ellipsis: true,
    uniqueOpened: false,
    collapseTransition: true,
    renderTag: {  //最终渲染的节点信息
      default: 'ul',
      elementUI: 'el-menu'
    },
    children: [{
      itemLabel: '菜单项1',
      value: '',
      url: '',
      renderTag: {  //最终渲染的节点信息
        default: 'li',
        elementUI: 'el-menu-item'
      },
    }, {
      itemLabel: '菜单项2',
      value: '',
      url: '',
      renderTag: {  //最终渲染的节点信息
        default: 'li',
        elementUI: 'el-menu-item'
      },
    }],
    class: "",
    style: {},
    events: []
  }
}
