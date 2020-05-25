import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import CharacterCounter from './CharacterCounter'
import TodoList from './todo/TodoList'
import User from './asynchronous/User'
import ErrorBoundary from './asynchronous/ErrorBoundary'
import DenoTodoList from './withDeno/TodoList'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <ErrorBoundary>
                <CharacterCounter />
                <TodoList />
                <React.Suspense fallback={<div>Loading...</div>}>
                    <User />
                </React.Suspense>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <DenoTodoList />
                </React.Suspense>
            </ErrorBoundary>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
