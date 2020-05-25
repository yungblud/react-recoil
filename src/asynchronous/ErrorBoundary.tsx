import React, { Component } from 'react'

interface Props {
    children: any
}

interface State {
    error: any
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            error: null,
        }
    }
    static getDerivedStateFromError(error: any) {
        return { error }
    }
    render() {
        const { error } = this.state
        if (error) {
            return <div>{error.toString()}</div>
        }
        return this.props.children
    }
}

export default ErrorBoundary
