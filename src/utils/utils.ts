/**
 * @author zyx
 * @param schema 整颗schema树
 * @param id 需要查找的id
 * @returns 成功返回一个对象，失败返回null
 */
const findSchemaById = (schema: object, id: string): any => {
  let result: Object | null = null
  function search(tree: Array<any>, id: string) {
    for (let i = 0; i < tree.length; i++) {
      if (result) break

      const children = tree[i].children || tree[i].body
      if (children && children.length > 0) {
        search(children, id)
      }

      if (tree[i].id === id) {
        result = {
          target: tree[i]
        }
        break
      }
    }
  }
  search([schema], id)
  return result;
}

/**
 * @author zyx
 * @param schema 整颗schema树
 * @param target 需要更新的目标
 */
const changeSchemaById = (schema: object, target: { id: string }): void => {
  function search(tree: Array<any>, schema: { id: string }) {
    for (let i = 0; i < tree.length; i++) {
      const children = tree[i].children || tree[i].body
      if (children && children.length) {
        search(tree[i], schema)
      }
      if (tree[i].id === schema.id) {
        tree[i] = schema
        break
      }
    }
  }
  search([schema], target)
}

/**
 * @author zyx
 * @returns 唯一的id
 */
const createId = () => {
  return Math.random().toString(36).split('.')[1]
}

export default {
  createId,
  findSchemaById,
  changeSchemaById
}