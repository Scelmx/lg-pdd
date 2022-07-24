let  container: any = {}
const modules: any = import.meta.globEager('./*.vue')

for (const path of Object.keys(modules)) {
  let name = path.split('.')[1].slice(1)
  container[name] = modules[path]?.default
}

export default container