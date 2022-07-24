import basic from "./basic/index"
import complex from "./complex/index"
import container from "./container/index"

const modules: any = Object.assign(basic, complex, container)

export default {
  install(app: any) {
    for (const path in modules) {
      app.component(path, modules[path])
    }
  }
}