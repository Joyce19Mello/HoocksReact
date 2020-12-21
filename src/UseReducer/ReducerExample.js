import React, { useReducer } from 'react';

import Counter from '../Counter';

import './ReducerExample.css';

export default function UseReducer() {
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case 'add':
        return { count: state.count + 1 };
      case 'remove':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }


  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='simpleReducerContainer'>
      <span>
        {state.count}
      </span>
      <Counter
        add={() => dispatch({ type: 'add' })}
        remove={() => dispatch({ type: 'remove' })}
      />
    </div>
  );
}
