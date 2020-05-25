import { atom, selector } from 'recoil'
import { getUserById } from './api'

const currentUserIDState = atom({
    key: 'CurrentUserID',
    default: 1,
})

export const currentUserName = selector({
    key: 'CurrentUserName',
    get: async ({ get }: { get: any }) => {
        const response = await getUserById(get(currentUserIDState))
        return response.name
    },
})
