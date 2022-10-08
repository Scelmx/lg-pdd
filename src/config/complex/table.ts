export default {
  name: '表格',
  config: {
    type: 'table',
    name: 'table',
    stripe: false,
    border: false,
    size: '',
    fit: '',
    showHeader: '',
    highlightCurrentRow: '',
    emptyText: '',
    renderTag: {  //最终渲染的节点信息
      elementUI: 'el-nav'
    },
    columns: [{
      value: 'id',
      label: 'id',
      width: ''
    }, {
      value: 'name',
      label: '名称',
      width: ''
    }],
    class: "",
    style: {},
    events: []
  }
}
