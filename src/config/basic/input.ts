export default {
  name: '输入框',
  config: {
    name: 'input',
    label: "输入框",
    labelWidth: "",
    type: 'input',
    category: "text",
    value: "{{test}}",
    hiddenOn: "",
    disabledOn: "",
    readonlyOn: "",
    maxlength: "",
    minlength: "",
    placeholder: "",
    max: "",
    min: "",
    step: "",
    precision: "",
    rows: "",
    size: "default",
    prefixIcon: "",
    suffixIcon: "",
    resize: "",
    clearable: false,
    showWordLimit: false,
    validateEvent: false,
    renderTag: {
      //最终渲染的节点信息
      default: "input",
      elementUI: 'el-input',
      isSingle: true,
    },
    class: "",
    style: {
      "max-width": "200px",
    },
    events: [
      {
        input: {
          name: 'inputInput'
        },
        change: {
          name: 'inputChange'
        }
      }
    ]
  }
};
