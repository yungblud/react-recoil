export const getTodoList = async () => {
    const response = await fetch('/api/todo')
    return response.json()
}

export const createTodo = async (todo: string) => {
    const response = await fetch('/api/todo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ todo }),
    })
    return response.json()
}

export const toggleIsDone = async (id: number) => {
    const response = await fetch(`/api/todo/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return response.json()
}

export const removeTodo = async (id: number) => {
    const response = await fetch(`/api/todo/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    return response.json()
}
