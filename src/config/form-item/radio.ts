export default {
  name: '单选框',
  config: {
    type: 'radios',
    label: '单选框',
    labelWidth: '',
    options: [
      {
        label: '单选一',
        value: '0',
        disabled: false,
        border: false
      },
      {
        label: '单选二',
        value: '1',
        disabled: false,
        border: false
      }
    ],
    // source: '',
    defaultValue: '',
    hiddenOn: '',
    labelTips: '',
    disabled: false,
    required: false,
    // size: 'small',
    validations: '',
    checkedInfo: '请选择单选框',
    renderTag: {  //最终渲染的节点信息
      elementUI: 'el-radio'
    },
    events: []
  }
}
