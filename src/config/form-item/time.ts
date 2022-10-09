export default {
  name: '时间选择器',
  config: {
    type: 'timepicker',
    label: '时间',
    labelWidth: '',
    defaultValue: '',
    placeholder: '',
    format: 'HH:mm:ss',
    prefixIcon: '', // 自定义头部图标类名
    size: 'small',
    selectableRange: '18:30:00 - 20:30:00',
    'start-placeholder': '',
    'end-placeholder': '',
    'range-separator': '-',
    delimiter: ',',
    isRange: false,
    required: false,
    editable: true,
    clearable: false,
    readonly: false,
    disabled: false,
    checkedInfo: '请选择时间',
    isFormat: false,
    renderTag: {  //最终渲染的节点信息
      default: 'input',
      elementUI: 'el-timepicker',
      isSingle: true,
    },
    class: "",
    style: {},
    events: []
  }
}
