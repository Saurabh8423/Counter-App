import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CounterApp = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop:'50px'}}>
        <h2>Counter App with Redux</h2>
        <h1>{count}</h1>
        <button onClick={()=> dispatch({type:'INCREMENT'})}>+</button>{' '}
        <button onClick={()=> dispatch({type:'DECREMENT'})}>-</button>{' '}
        <button onClick={()=> dispatch({type:'RESET'})}>Reset</button>
    </div>
  )
}

export default CounterApp
