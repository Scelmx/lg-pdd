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
  value: {
    label: "字段值",
    type: "input"
  },
  options: {
    label: "选项",
    type: "select",
    options: [{
      label: "123",
      value: "321"
    }]
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
