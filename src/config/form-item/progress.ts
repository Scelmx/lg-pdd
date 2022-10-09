export default {
  name: '进度条',
  config: {
    type: 'progress',
    name: 'progress',
    label: '',
    labelWidth: '',
    src: '',
    record: [],
    hiddenOn:'',
    labelTips: '',
    renderTag: {  //最终渲染的节点信息
      elementUI: 'el-progress'
    },
    class: "",
    style: {
      width: '50px',
      height: '1px',
      background: "#ccc",
    },
    events: []
  }
}
