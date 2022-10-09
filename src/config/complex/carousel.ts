export default {
    name: '走马灯',
    config: {
      type: 'carousel',
      height: '',
      initialIndex: 0,
      trigger: 'hover',
      autoplay: true,
      interval: 3000,
      indicatorPosition: '',
      arrow: 'hover',
      mode: '',
      loop: true,
      direction: 'horizontal',
      pauseOnHover: true,
      renderTag: { //最终渲染的节点信息
        default: "div",
        elementUI: 'el-carousel'
      },
      chirdren: [{
        name: 'item1',
        context: 'item1',
        type: 'text'
      },
      {
        name: 'item2',
        context: 'item2',
        type: 'text'
      }],
      class: "",
      style: {},
      events: []
    }
  }
  