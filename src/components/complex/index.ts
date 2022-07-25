let  complex: any = {}
const modules: any = import.meta.globEager('./*.vue')

for (const path of Object.keys(modules)) {
  let name = path.split('.')[1].slice(1)
  complex[name] = modules[path]?.default
}

export default complex