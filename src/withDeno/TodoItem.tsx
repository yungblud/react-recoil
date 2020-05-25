import React, { useState, useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { removeTodo } from './api'
import { todoListState } from './states'
import { Todo } from './types/Todo'
import { toggleIsDone } from './api'

interface Props {
    todoItem: Todo
}

const TodoItem = ({ todoItem }: Props) => {
    const setTodoList = useSetRecoilState(todoListState)
    const [isDone, setIsDone] = useState(false)
    useEffect(() => {
        setIsDone(todoItem.isDone)
    }, [todoItem])
    const onClickRemove = async () => {
        const { todos } = await removeTodo(todoItem.id)
        setTodoList(() => [...todos])
    }
    const onToggle = async () => {
        const updatedTodo: Todo = await toggleIsDone(todoItem.id)
        setTodoList((oldTodoList: Todo[]) => {
            const existingTodoList = [...oldTodoList]
            const updatedIndex = oldTodoList.findIndex(
                (todo: Todo) => +todo.id === +updatedTodo.id
            )
            if (updatedIndex === -1) {
                return
            }
            existingTodoList.splice(updatedIndex, 1, updatedTodo)
            return existingTodoList
        })
        setIsDone(updatedTodo.isDone)
    }
    return (
        <div>
            {todoItem.todo}
            <div onClick={onClickRemove}>X</div>
            <input type="checkbox" onClick={onToggle} checked={isDone} />
        </div>
    )
}

export default TodoItem
