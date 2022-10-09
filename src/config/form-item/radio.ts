export default {
  name: '单选框',
  config: {
    type: 'radio',
    label: '单选框',
    labelWidth: '',
    staticOptions: [
      {
        itemLabel: '单选一',
        value: '0',
        disabled: false,
        border: false
      },
      {
        itemLabel: '单选二',
        value: '1',
        disabled: false,
        border: false
      }
    ],
    // source: '',
    value: '',
    hiddenOn: '',
    labelTips: '',
    disabled: false,
    required: false,
    // size: 'small',
    validations: '',
    checkedInfo: '请选择单选框',
    renderTag: {  //最终渲染的节点信息
      default: "input",
      elementUI: 'el-radio',
      isSingle: true,
    },
    class: "",
    style: {},
    events: []
  }
}
