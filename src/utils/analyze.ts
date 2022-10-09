import $ from 'gogocode';
import { getConfig, dslToHtml } from './config';

class Design {
  html: string;
  template: string = "";
  style: string = "";
  schema: any;
  getCode: any;
  UI: string = 'default';
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
  public analyzeDesign(): Design | String {
    let list: any = this.schema;
    if (!Array.isArray(this.schema)) {
      list = [this.schema];
    }
    if (!list.length) {
      return "";
    }
    this.template = this.analys(list)
    this.style = this.getStyle(list)
    this.html = dslToHtml(this.style, this.template)
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
      const typeStr = type && type!== '' ? `type="${type}"` : "";
      const classStr = className && className !== '' ? `class="${className}"` : "";
      const valueStr = value ? `value="${value}"` : "";
      
      if (list[i].renderTag.isSingle) { // 单标签逻辑
        template += `
        <${tag} ${nameStr} ${typeStr} ${classStr} ${valueStr} />`;
      } else {
        if (type === 'table') {
          template += `<table>${this.getTableStr(list[i].columns)}</table>`;
        } else {
          template += `
          <${tag} ${nameStr} ${typeStr} ${classStr} ${valueStr}>
            ${ itemLabel || value || this.analys(children) || this.analys(options)}
          </${tag}>`;
        }
      }
    }
    return template;
  }

  public parseToCode(type: string = "html", ui: string = "") {
    switch(type) {
      case "html": return this.html;
      case "vue": return this.transferCode('vue', ui);
      case "react": return this.transferCode('react', ui);
    }
  }


  private transferCode(type: string, ui: string) {
    const aster = $(this.template, {
      parseOptions: {
        language: 'html'
      }
    });
    const config = getConfig(type)
    let astResult = aster
      .replace('<div class="$_$1">$$$1</div>', config.group)
      .replace('<img src="$_$1"  class="$_$2" />', config.image)
      .replace('<span class="$_$1">$$$1</span>', config.text)
      .generate({
        isPretty: true
      });
    if (type === 'vue') {
      return `<template>${astResult}</template>`
    }
    return astResult
  }

  /**
   * 生成样式并返回字符串
   * @param list dslCode
   * @returns 样式字符串
   */
  private getStyle(list: Array<any>): string {
    let style = "<style>";
    for (let i = 0; i < list.length; i++) {
      const className = list[i].class !== "" ? list[i].class : list[i].name;
      style += `\n .${className}${JSON.stringify(list[i].style, null, 2)}`
      if(list[i].children && list[i].children.length > 0) {
        this.getStyle(list[i].children);
      }
    }
    style += "\n</style>";
    return style
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
