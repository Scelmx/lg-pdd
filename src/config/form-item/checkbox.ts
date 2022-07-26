export default {
  name: '复选框组件',
  config: {
    type: 'checkboxes',
    label: '复选框',
    labelWidth: '',
    options: [
      {
        label: '选项1',
        value: '1',
        disabled: false,
        size: ''
      },
      {
        label: '选项2',
        value: '2',
        disabled: false,
        size: ''
      }
    ],
    // min: '',
    max: '',
    defaultValue: '',
    // size: '',
    hiddenOn: '',
    disabled: false,
    required: false,
    validations: '',
    checkedInfo: '请选择复选框',
    renderTag: {  //最终渲染的节点信息
      elementUI: 'el-checkboxes'
    },
    events: []
  }
}
