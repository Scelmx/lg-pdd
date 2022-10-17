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
        default: "ul",
        elementUI: 'el-carousel'
      },
      children: [{
        name: 'item1',
        context: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
        tagType: 'img',
        renderTag: {  //最终渲染的节点信息
          default: 'li',
          elementUI: 'el-carousel-item'
        },
      },
      {
        name: 'item2',
        context: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg',
        tagType: 'img',
        renderTag: {  //最终渲染的节点信息
          default: 'li',
          elementUI: 'el-carousel-item'
        },
      }],
      class: "",
      style: {},
      events: []
    }
  }
  