import $ from 'gogocode';
import getConfig from './config';

class Design {
  html: string;
  schema: any;
  getCode: any;
  constructor(schema: any) {
    this.schema = schema
    this.html = ""
    this.getCode = this.parseToCode
  }

  public analyzeDesign(): Design {
    this.html = this.analys()
    return this
  }
  public analys(schema: any = this.schema): string {
    let list: any = schema;
    let html = ""

    if (!Array.isArray(schema)) {
      list = [schema];
    }
    if (!list.length) {
      return "";
    }
    for (let i = 0; i < list.length; i++) {
      if (list[i].type === "Group") {
        html += `<div class="${list[i].class}">${this.analys(list[i].layers || [])}</div>`;
      } else if (list[i].type === "Text") {
        html += `<span class="${list[i].class}">${list[i].text || ""}</span>`;
      } else {
        html += `<img class="${list[i].class}" src="${list[i].src || ""}"/>`;
      }
    }
    return html;
  }

  public parseToCode(type: string = "html") {
    switch(type) {
      case "html": return this.html;
      case "vue": return this.transferCode('vue')
      case "react": return this.transferCode('react')
    }
  }

  private transferCode(type: string) {
    const aster = $(this.html, {
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
}

export default Design;
