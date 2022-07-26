import { attrBase, styleBase } from '../config/base';
function getAttr(schema: any) {
  return getConfigByAttr(schema, attrBase);
}

function getStyle(schema: any) {
  return getConfigByAttr(schema, styleBase);
}

function getConfigByAttr(schema: any, config: any) {
  const keys = Object.keys(schema);
  let attrs: any = {};
  keys.forEach((key) => {
    if (config[key]) {
      attrs[key] = config[key]
    }
  });
  return attrs
}

export { getAttr, getStyle }
