import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from './states'
import { Todo } from '../todo/types/todo'
import { createTodo } from './api'

const TodoCreator = () => {
    const [inputValue, setInputValue] = useState('')
    const setTodoList = useSetRecoilState(todoListState)
    const addItem = async () => {
        const newTodo = await createTodo(inputValue)
        setTodoList((oldTodoList: Todo[]) => [...oldTodoList, newTodo])
        setInputValue('')
    }
    const onChange = ({ target: { value } }: { target: { value: string } }) => {
        setInputValue(value)
    }
    return (
        <>
            <input type="text" value={inputValue} onChange={onChange} />
            <button type="button" onClick={addItem}>
                addItem
            </button>
        </>
    )
}

export default TodoCreator
