export default {
  name: '滑块',
  config: {
    type: 'slider',
    name: 'slider',
    label: '',
    labelWidth: '',
    src: '',
    record: [],
    hiddenOn:'',
    labelTips: '',
    
    renderTag: {  //最终渲染的节点信息
      default: 'div',
      elementUI: 'el-slider'
    },
    class: "",
    style: {
      width: '50px',
      height: '1px'
    },
    events: []
  }
}
