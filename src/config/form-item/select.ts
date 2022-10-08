export default {
  name: '下拉框',
  config: {
    name: 'select1',
    label: '下拉选择',
    labelWidth: '',
    type: 'select',
    value: '',
    placeholder: '请选择',
    options: [
      {
        label: '选项1',
        desc: 'hahahahahha',
        value: '1',
        children:[]
      },
      {
        label: '选项2',
        value: '2',
        desc: 'jiajiajiajia',
        children:[]
      }
    ],
    'no-data-text': '无数据',
    size: 'small',
    hiddenOn: '',
    labelTips: '',
    groupKey: 'children',
    multiple: false,
    required: false,
    filterable: false,
    remote: false,
    remoteUrl: '',
    mapping: '',
    clearable: true,
    loading: false,
    showOptionDetail: false,
    disabled: false,  
    'reserve-keyword': false,
    'allow-create': false,
    'default-first-option': false,
    'popper-append-to-body': true,
    multipleLimit: 0,
    loadingText: '加载中',
    noMatchText: '无匹配数据',
    checkedInfo: '请选择下拉选择',
    validations: '',
    needMapping:false,
    valueKey: 'value',
    labelKey: 'label',
    valueType: 'string',
    renderTag: {  //最终渲染的节点信息
      default: "input",
      elementUI: 'el-select',
      isSingle: true,
    },
    class: "",
    style: {
      width: ''
    },
    events: [],
  }
}
