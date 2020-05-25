import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { todoList as getTodoList, todoListState } from './states'
import { Todo } from './types/Todo'
import TodoCreator from './TodoCreator'
import TodoItem from './TodoItem'

const TodoList = () => {
    const [todos, setTodos] = useRecoilState(todoListState)
    const todoList = useRecoilValue(getTodoList)
    useEffect(() => {
        setTodos(todoList)
    }, [todoList, setTodos])
    return (
        <>
            <TodoCreator />
            {todos.map((todo: Todo) => (
                // <div key={todo.id}>{todo.todo}</div>
                <TodoItem key={todo.id} todoItem={todo} />
            ))}
        </>
    )
}

export default TodoList
