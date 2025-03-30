import React, { ReactElement } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { increment, decrement } from './redux/slices/counter/index';
import MyComponent from './MyComponent';

const App: React.FC<{ children?: React.ReactNode }> = (): ReactElement => {
  const counter = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Count is: {counter}</h1>

        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </header>
      <MyComponent />
    </div>
  );
}

export default App;
