import React from 'react'
import { useRecoilValue } from 'recoil'
import { currentUserName } from './states'

const User = () => {
    const userName = useRecoilValue(currentUserName)
    return <div>name: {userName}</div>
}

export default User
