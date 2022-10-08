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
    renderTag: {  //最终渲染的节点信息
      default: "image",
      elementUI: 'image'
    },
    class: "",
    style: {
      width: '50px',
      height: '50px'
    },
    events: []
  }
}
