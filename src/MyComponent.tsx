import React from 'react'
// useAppSelector for accessing redux state
import { useAppSelector } from './redux/hooks'
// If we had to dispatch the changed state, we would use useAppDispatch

const MyComponent: React.FC = () => {
    const count = useAppSelector((state) => state.counter)
    return (
        <div>MyComponent count: {count}</div>
    )
}

export default MyComponent