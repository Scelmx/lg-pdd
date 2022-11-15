export interface LgComponent {
    schema: any
}
export interface Schema {
    id: string,
    name: string,
    value: string | number
    children?: Array<Schema>
}
export interface LgEvent {
    name: string,
    trigger: string,
    content?: string | object
}
export interface DrawerAction {
    visible: boolean,
    title: string,
    action: object,
    width?: string
}
export interface BaseAction {
    type: string
    name: string,
}
export interface AjaxAction extends BaseAction {
    url: string,
    method: string,
    params: object | string
}
export interface localtionAction extends BaseAction {
    url: string,
    method: string,
    params: object | string
}