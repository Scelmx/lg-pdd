const attrBase = {
  name: {
    label: "字段名",
    type: "input",
    desc: ""
  },
  label: {
    label: "标签",
    type: "input",
    desc: ""
  },
  labelWidth: {
    label: "标签宽度",
    type: "input",
  },
  text: {
    label: '文本',
    type: 'input'
  },
  maxlength: {
    label: '最大长度',
    type: 'input'
  },
  minlength: {
    label: '最小长度',
    type: 'input'
  },
  value: {
    label: "字段值",
    type: "textarea"
  },
  hiddenOn: {
    label: "条件隐藏",
    type: "textarea"
  },
  disabledOn: {
    label: "条件禁用",
    type: "textarea"
  },
  readonlyOn: {
    label: "条件只读",
    type: "textarea"
  },
  options: {
    label: "选项",
    type: "select",
    options: [{
      label: "123",
      value: "321"
    }]
  },
  category: {
    label: "状态",
    type: "select",
    options: [{
      label: "成功",
      value: "success"
    },
    {
      label: "主要",
      value: "primary"
    },
    {
      label: "警告",
      value: "warning"
    }, {
      label: "危险",
      value: "danger"
    },
    {
      label: "信息",
      value: "info"
    }, 
    {
      label: "文字",
      value: ""
    }]
  },
  size: {
    label: "组件大小",
    type: "select",
    options: [{
      label: "大",
      value: "large"
    }, {
      label: "中",
      value: "default"
    }, {
      label: "小",
      value: "small"
    }]
  },
  plain: {
    label: "朴素化",
    type: "switch"
  },
  round: {
    label: "圆角化",
    type: "switch"
  },
  circle: {
    label: "圆形化",
    type: "switch"
  },
  loading: {
    label: "加载中",
    type: "switch"
  },
  loadingIcon: {
    label: "加载图标",
    type: "IconSelect"
  },
  icon: {
    label: "图标",
    type: "IconSelect"
  }
}

const styleBase = {
  width: {
    label: "宽度",
    type: "number"
  },
  height: {
    label: "高度",
    type: "number"
  },
  fontSize: {
    lable: "字体大小",
    type: "select",
    options: [],
  },
  color: {
    label: "字体颜色",
    type: "color" // 拾色器
  },
  fontWeight: {
    label: "字体粗细",
    type: "select",
    options: []
  },
  padding: {
    label: "内边距",
    type: "rect"
  },
  margin: {
    label: "外边距",
    type: "rect"
  },
  childMargin: {
    label: "子项边距",
    type: "rect"
  },
}

export { attrBase, styleBase }
