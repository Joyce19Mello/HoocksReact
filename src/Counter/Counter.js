import React from 'react';

import './Counter.css';

export default React.memo(function Counter(props) {

    const { add, remove } = props;

    return (
        <div className='simpleButtonContainer'>
            <button
                style={{ backgroundColor: 'blue' }}
                className='button'
                onClick={add}
            >+</button>
            <button
                style={{ backgroundColor: 'red' }}
                className='button'
                onClick={remove}
            >-</button>
        </div>
    );
})
