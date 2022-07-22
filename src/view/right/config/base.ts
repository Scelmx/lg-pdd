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
  }
}

export default { attrBase, styleBase }
