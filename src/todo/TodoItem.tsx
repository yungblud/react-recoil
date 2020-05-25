import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from './states'

interface Props {
    item: any
}

const TodoItem = ({ item }: Props) => {
    const [todoList, setTodoList] = useRecoilState(todoListState)
    const index = todoList.findIndex((listItem: any) => listItem === item)

    const editItemText = ({
        target: { value },
    }: {
        target: { value: string }
    }) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: value,
        })
        setTodoList(newList)
    }
    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index)
        setTodoList(newList)
    }
    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,
        })

        setTodoList(newList)
    }
    return (
        <div>
            <input type="text" value={item.text} onChange={editItemText} />
            <input
                type="checkbox"
                checked={item.isComplete}
                onChange={toggleItemCompletion}
            />
            <button onClick={deleteItem}>X</button>
        </div>
    )
}

function replaceItemAtIndex(arr: any[], index: number, newValue: any) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

function removeItemAtIndex(arr: any[], index: number) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

export default TodoItem
