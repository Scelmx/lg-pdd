const components: any[] = []

function Assembly(name: string) {
    console.log(123, 'xxx');
    return function (target: Function) {
        register(name, target)
    };
}

function register(name: string, target: any) {
    console.log(target, name);
}

export { Assembly }
