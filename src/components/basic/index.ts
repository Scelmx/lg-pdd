let  basic:any = {}
const modules: any = import.meta.globEager('./*.vue')

for (const path of Object.keys(modules)) {
    let name = path.split('.')[1].slice(1)
    basic[name] = modules[path]?.default
}

export default basic