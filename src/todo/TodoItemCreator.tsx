import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from './states'

const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState('')
    const setTodoList = useSetRecoilState(todoListState)
    const addItem = () => {
        setTodoList((oldTodoList: any[]) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            },
        ])
        setInputValue('')
    }
    const onChange = ({ target: { value } }: { target: { value: string } }) => {
        setInputValue(value)
    }
    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange} />
            <button onClick={addItem}>Add</button>
        </div>
    )
}

// utility for creating unique Id
let id = 0
function getId() {
    return id++
}

export default TodoItemCreator
