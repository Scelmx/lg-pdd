function renderChildren(children: any = undefined) {
    if (!children) {
        console.log("请传入正确的自己元素集合")
        return false;
    }
    return children.map((child) => (`<Component attrs="${child}"></Component>`))
}

function renderContainer(attrs: any, children) {}