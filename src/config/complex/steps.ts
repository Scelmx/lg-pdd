export default {
  name: '步骤条',
  config: {
    type: 'steps',
    name: 'steps',
    active: '',
    direction: '',
    processStatus: '',
    finishStatus: '',
    alignCenter: false,
    simple: false,
    renderTag: {  //最终渲染的节点信息
      elementUI: 'el-steps'
    },
    controls: [{
      title: '第一步',
      icon: '',
      description: '第一步描述'
    }, {
      title: '第二步',
      icon: '',
      description: '第二步描述'
    }],
    events: []
  }
}
