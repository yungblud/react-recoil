import React from 'react'
import { atom, useRecoilState } from 'recoil'

export const textState = atom({
    key: 'textState',
    default: '',
})

const TextInput = () => {
    const [text, setText] = useRecoilState(textState)
    const onChange = (event: any) => {
        const { value } = event.target
        setText(value)
    }
    return (
        <div>
            <input type="text" value={text} onChange={onChange} />
            <br />
            Echo: {text}
        </div>
    )
}

export default TextInput
