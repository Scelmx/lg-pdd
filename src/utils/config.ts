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

function getConfig(type: string) {
  if (type == "vue") {
    return vueConfig
  } else {
    return reactConfig
  }
}

export default getConfig;