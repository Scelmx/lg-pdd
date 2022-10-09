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
    columns: [{
      value: 'id',
      itemLabel: 'id',
      width: ''
    }, {
      value: 'name',
      itemLabel: '名称',
      width: ''
    }],
    renderTag: {  //最终渲染的节点信息
      default: 'table',
      elementUI: 'el-table'
    },
    class: "",
    style: {},
    events: []
  }
}
