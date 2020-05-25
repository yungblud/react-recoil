import React from 'react'
import { useRecoilState } from 'recoil'
import TodoItemCreator from './TodoItemCreator'
import TodoItem from './TodoItem'
import TodoListFilters from './TodoListFilters'
import { todoListState } from './states'
import TodoListStats from './TodoListStats'

const TodoList = () => {
    const [todoList] = useRecoilState(todoListState)
    return (
        <div>
            <TodoListFilters />
            <TodoListStats />
            <TodoItemCreator />
            {todoList.map((todoItem: any) => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </div>
    )
}

export default TodoList
