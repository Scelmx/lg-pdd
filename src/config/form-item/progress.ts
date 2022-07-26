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
    style: {
      width: '50px',
      height: '50px'
    },
    renderTag: {  //最终渲染的节点信息
      elementUI: 'el-progress'
    },
    events: []
  }
}
