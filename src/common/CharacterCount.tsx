import React from 'react'
import { selector, useRecoilValue } from 'recoil'
import { textState } from './TextInput'

const charCountState = selector({
    key: 'charCountState',
    get: ({ get }: { get: any }) => {
        const text = get(textState)
        return text.length
    },
})

const CharacterCount = () => {
    const count = useRecoilValue(charCountState)
    return <div>Character Count: {count}</div>
}

export default CharacterCount
