export default {
  name: '分页',
  config: {
    type: 'pagination',
    name: 'pagination',
    pageSize: '10',
    currentPage: '1',
    total: '100',
    layout: "sizes, prev, pager, next",
    renderTag: {  //最终渲染的节点信息
      default: 'pagination',
      elementUI: 'el-pagination'
    },
    class: "",
    style: {},
    events: []
  }
}
