export interface LgComponent {
    schema: any
}

export interface Schema {
    id: string,
    name: string,
    value: string | number
    children?: Array<Schema>
}