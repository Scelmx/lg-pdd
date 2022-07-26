export default {
  name: '图片组件',
  config: {
    type: 'image',
    name: 'image',
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
      elementUI: 'image'
    },
    events: []
  }
}
