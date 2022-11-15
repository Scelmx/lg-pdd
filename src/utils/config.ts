interface CodeConfig {
  group: string,
  image: string,
  text: string
}

export interface ScriptConfig {
  variable: any,
  function: string
}

const vueConfig: CodeConfig = {
  group: '<view class="$_$1">$$$1</view>',
  image: '<image src="@/static/$_$1" class="$_$2" mode="aspectFit"></image>',
  text: '<text class="$_$1">$$$1</text>'
}

const reactConfig: CodeConfig = {
  group: '',
  image: '',
  text: ''
}

export function getConfig(type: string) {
  if (type == "vue") {
    return vueConfig
  } else {
    return reactConfig
  }
}

export function dslToHtml(type: string, style: string, body: string, script: ScriptConfig): string {
  switch (type) {
    case 'html': return getHTMLTemp(style, body, script);
    case 'vue': return getVueTemp(style, body, script);
    default: return getVueTemp(style, body, script);
  }
}

function getHTMLTemp(style: string, body: string, script: ScriptConfig): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite App</title>
        <style>
          ${style.replaceAll("\"", "").replaceAll(",", ";")}
        </style>
      </head>
      <body>
        ${body}
      </body>
      <script>
        ${ getScript("html", script) }
      </script>
    </html>`
}

function getVueTemp(style: string, body: string, script: ScriptConfig): string {
  return `
    <template>
      ${body}
    </template>

    <script>
      ${ getScript("vue2", script)}
    </script>

    <style>
      ${style.replaceAll("\"", "").replaceAll(",", ";")}
    </style>
  `
}

export function getScript(type: string, script: ScriptConfig): string {
  let res = "";
  switch(type) {
    case 'html': res = getScriptForHTML(script); break;
    case 'vue2': res = getScriptForVue2(script); break;
    case 'vue3': res = getScriptForVue3(script); break;
  }
  return res;
}

function getScriptForHTML(script: ScriptConfig) {
  let varStr = ''
  for (const key of Object.keys(script.variable)) {
    let value = script.variable[key];
    try {
      if (value && (value.length || Object.keys(value).length)) {
      } else {
        value =  '\"\"';
      }
    } catch (err) {
      console.warn(err);
    }
    varStr += `let ${key} = ${value};\n`
  }
  return varStr + '\n' + script.function;
}

function getScriptForVue2(script: ScriptConfig) {
  const res = `
  export default class test {
    created () {},
    data() {
      return ${JSON.stringify(script.variable)}
    },
    method: {
      ${script.function}
    }
  }
`
  return res;
}

function getScriptForVue3(script: ScriptConfig) {
  const res = `
    import { ref, reactive } from "vue";
    // 必然是个对象，注意区分简单变量与对象变量。
    ${script.variable};

    ${script.function};
  `
  return res;
}