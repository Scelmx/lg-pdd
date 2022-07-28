export default {
  name: '级联选择器',
  config: {
    type: 'cascader',
    label: '级联选择器',
    labelWidth: '',
    value: '',
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
    margin: '',
    staticOptions: [
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
    },
    checkedInfo: '请选择级联选择',
    events: [],
    style: {
      width: ''
    },
    renderTag: {  //最终渲染的节点信息
      elementUI: 'el-cascader'
    },
  }
}
