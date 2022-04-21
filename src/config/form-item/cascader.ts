export default {
  name: '级联选择器',
  config: {
    type: 'cascader',
    label: '级联选择器',
    labelWidth: '',
    defaultValue: '',
    placeholder: '请选择',
    separator: '/',
    // popperClass: '',
    size: 'small',
    hiddenOn: '',
    labelTips: '',
    filterable: false,
    showAllLevels: false,
    collapseTags: false,
    required: false,
    clearable: false,
    disabled: false,
    options: [
      {
        label: '选项1',
        value: 'item1',
        children: [{
          label: '子项1.1',
          value: 'item1.1'
        }]
      },
      {
        label: '选项2',
        value: 'item2',
        children: [{
          label: '子项2.1',
          value: 'item2.1'
        }]
      }
    ],
    props: {
      expandTrigger: 'click',
      multiple: false,
      checkStrictly: false,
      // emitPath: true,
      // valueName: '',
      // labelName: '',
      // disabledName: '',
      // leaf: ''
    },
    checkedInfo: '请选择级联选择',
    bindAction: [],
    style: {
      width: ''
    }
  }
}
