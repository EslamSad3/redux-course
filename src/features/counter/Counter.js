import React, { useState } from 'react';
import { dec, inByAmout, inc, reset } from './counterSlice';
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incAmount, setIncAmount] = useState(0);
  const addValue = Number(incAmount) || 0;
  const resetAll = () => {
    setIncAmount(0);
    dispatch(reset());
  };
  return (
    <>
      <section style={{ textAlign: 'center' }}>
        <p>{count}</p>
        <div>
          <button
            onClick={() => {
              dispatch(inc());
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              dispatch(inByAmout(addValue));
            }}
          >
            amount
          </button>
          <button
            onClick={() => {
              dispatch(dec());
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              dispatch(reset());
            }}
          >
            0
          </button>
          <button onClick={() => resetAll()}>resetAll</button>
          <input type='text' value={incAmount} onChange={(e)=>{setIncAmount(e.target.value)}}/>
          <p>{addValue}</p>
        </div>
      </section>
    </>
  );
}

export default Counter;
