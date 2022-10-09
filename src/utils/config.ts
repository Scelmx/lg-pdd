interface CodeConfig {
  group: string,
  image: string,
  text: string
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

export function dslToHtml(style: string, body: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vite App</title>
        ${style.replaceAll("\"", "").replaceAll(",", ";")}
      </head>
      <body>
        ${body}
      </body>
    </html>
`
}

export function dslToVue(style: string, body: string): string {
  return `
  <template>
    ${body}
  </template>

  <script>
  </script>

  ${style.replaceAll("\"", "").replaceAll(",", ";")}
`
}
