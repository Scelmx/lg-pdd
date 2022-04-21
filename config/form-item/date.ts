export default {
  name: '日期选择器',
  config: {
    type: 'datetime',
    conponentType: 'date',
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
    bindAction: []
  },
  attrs: {}
}
