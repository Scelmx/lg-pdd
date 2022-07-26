export default {
  name: '进度条',
  config: {
    type: 'slider',
    name: 'slider',
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
      elementUI: 'el-slider'
    },
    events: []
  }
}
