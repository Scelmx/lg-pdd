import { ScriptConfig, getConfig, dslToHtml } from './config';
import { generatorScript } from './generatorScript'
import utils from './utils';
class Design {
  html: string;
  template: string = "";
  style: string = "";
  script: ScriptConfig = {
    variable: {},
    function: ""
  };
  schema: any;
  getCode: any;
  UI: string = 'default';
  type: string = 'html';
  constructor(schema: any) {
    this.schema = schema
    this.html = ""
    this.getCode = this.parseToCode
  }

  public setSchema(schema: any): void {
    this.schema = schema;
  }
  public setUI(ui: string): void {
    this.UI = ui;
  }
  public analyzeDesign(type: string): Design {
    let list: any = this.schema;
    this.type = type;
    if (!Array.isArray(this.schema)) {
      list = [this.schema];
    }
    if (!list.length) {
      return this;
    }
    this.template = this.analys(list)
    generatorScript(list, this.script.variable);
    this.html = dslToHtml(type, this.style, this.template, this.script);
    return this
  }
  public analys(list: any[]): string {
    if (!list || list.length === 0) return '';
    let template = ""
    for (let i = 0; i < list.length; i++) {
      const tag = list[i].renderTag[this.UI]
      const item = list[i];
      const { itemLabel, type, class: className, name, value, children, options } = item;

      const nameStr = name || type ? `name="${name || type}"` : "";
      const typeStr = type && type !== '' ? `type="${type}"` : "";
      const classStr = className && className !== '' ? `class="${className}"` : "";
      const valueStr = value !== '' ? `${value?.match(utils.getDynamicRule()) ? ':' : ''}value="${value}"` : "value = ''";
      
      if (list[i].renderTag.isSingle) { // 单标签逻辑
        const str = `
        <${tag} ${nameStr} ${typeStr} ${classStr} ${valueStr} />`;
        template += this.formItem(list[i], str)
      } else {
        if (type === 'table') {
          const str = `<table>${this.getTableStr(list[i].columns)}</table>`;
          template += this.formItem(list[i], str)
        } else {

          const str = `
          <${tag} ${nameStr} ${typeStr} ${classStr} ${valueStr}>
            ${itemLabel || value || this.analys(children) || this.analys(options)}
          </${tag}>`;
          template += this.formItem(list[i], str)
        }
      }
    }
    return template;
  }

  public formItem(item: any, tag: string): string {
    if (item.isFormItem && this.type.indexOf('vue') > -1) {
      return `
        <el-form-item label="${item.label || item.itemLabel}">
          ${tag}
        </el-form-item>
      `
    }
    return tag;
  }

  public parseToCode(ui: string = "") {
    // switch(this.type) {
    //   case "html": return this.html;
    //   case "vue": return this.transferCode('vue', ui);
    //   case "react": return this.transferCode('react', ui);
    // }
    return this.html;
  }


  // private transferCode(type: string, ui: string) {
  //   const aster = $(this.template, {
  //     parseOptions: {
  //       language: 'html'
  //     }
  //   });
  //   const config = getConfig(type)
  //   let astResult = aster
  //     .replace('<div class="$_$1">$$$1</div>', config.group)
  //     .replace('<img src="$_$1"  class="$_$2" />', config.image)
  //     .replace('<span class="$_$1">$$$1</span>', config.text)
  //     .generate({
  //       isPretty: true
  //     });
  //   if (type === 'vue') {
  //     return `<template>${astResult}</template>`
  //   }
  //   return astResult
  // }

  /**
   * 生成样式并返回字符串
   * @param list dslCode
   * @returns 样式字符串
   */
  private getStyleAndScript(list: Array<any>, obj: any = undefined) {
    for (let i = 0; i < list.length; i++) {
      const className = list[i].class !== "" ? list[i].class : list[i].name;
      this.style += `\n .${className} ${JSON.stringify(list[i].style, null, 2)}`;
      let target = this.script.variable;
      if (obj) {
        target = obj;
      }
      if (list[i].value?.match(utils.getDynamicRule())) {
        const name = list[i].value?.match(utils.getDynamicRule())[0]
        target[name] = "";
      } else {
        target[list[i].name] = "";
      }
      for (let item of list[i].events) {
        this.script.function += `\n function ${item.name}() {
          // 占位
        }`;
      }
      if (list[i].children && list[i].children.length > 0) {
        this.getStyleAndScript(list[i].children);
      }
      return target;
    }
  }

  /**
   * 生成表格数据结构
   * @param list 表格columns
   * @returns 表格字符串
   */
  private getTableStr(list: any[]): string {
    let line = "\n";
    for (let i = 0; i < list.length; i++) {
      line += "<tr>\n"
      for (let j = 0; j < list.length; j++) {
        if (i === 0) {
          line += `<th>${list[j].itemLabel}</th>\n`
        } else {
          line += `<td>${list[j].value}</td>\n`
        }
      }
      line += "</tr>\n"
    }
    return line
  }
}

export default Design;
