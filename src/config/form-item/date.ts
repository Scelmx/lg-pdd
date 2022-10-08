export default {
  name: '日期选择器',
  config: {
    type: 'date',
    dateType: 'dateTime',
    label: '日期',
    labelWidth: '',
    defaultValue: '',
    placeholder: '请选择日期',
    inputFormat: 'yyyy-MM-dd',
    size: 'small',
    prefixIcon: '',
    startPlaceholder: '',
    endPlaceholder: '',
    'range-separator': '-',
    delimiter: ',',
    isRange: false,
    required: false,
    editable: true,
    clearable: true,
    readonly: false,
    disabled: false,
    checkedInfo: '请选择日期',
    isFormat: false,
    renderTag: {  //最终渲染的节点信息
      default: "input",
      elementUI: "el-datetime",
      isSingle: true,
    },
    class: "",
    style: {},
    events: []
  }
}
