export default {
  name: '上传组件',
  config: {
    type: 'file',
    label: '上传',
    labelWidth: '',
    action: 'http://ued.zuoyebang.cc/mis-square-api/api/upload/file',
    selectButtonText: '选择文件',
    tip: '只能选择图片',
    limit: 1,
    fileField: 'file',
    accept: '',
    listType: 'picture',
    triggerBtnType: 'primary',
    fileSize: '',
    hiddenOn: '',
    labelTips: '',
    fileData: {
      fileName: ''
    },
    itemName: '',
    itemUrl: '',
    isPreview: true,
    proxy: true,
    autoUpload: true,
    drag: false,
    multiple: false,
    showFileList: true,
    renderTag: {  //最终渲染的节点信息
      default: 'input',
      elementUI: 'el-upload',
      isSingle: true,
    },
    class: "",
    style: {},
    events: [],
  }
}
