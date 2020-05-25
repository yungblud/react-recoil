export const getUserById = async (id: number) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    )
    return response.json()
}
