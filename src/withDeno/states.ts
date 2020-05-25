import { atom, selector } from 'recoil'
import { getTodoList } from './api'

export const todoListState = atom({
    key: 'DenoTodoListState',
    default: [],
})

export const todoList = selector({
    key: 'DenoTodoList',
    get: async () => {
        const response = await getTodoList()
        return response.todos
    },
})
