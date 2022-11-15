import utils from "./utils";

export function generatorScript(list: Array<any>, obj: any) {
  for (let i = 0; i < list.length; i++) {
    const { type, name, children, value } = list[i];
    if (type === 'form') {
      obj[name] = {}
    } else {
      const rule = utils.getDynamicRule();
      if (value?.match(rule)) {
        const variable = value.match(rule)[0]
        obj[variable] = "";
      } else {
        obj[name] = "";
      }
    }
    if (children && children.length) {
      generatorScript(children, type === 'form' ? obj[name] : obj)
    }
  }
}