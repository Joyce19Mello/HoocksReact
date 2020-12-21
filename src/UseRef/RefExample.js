import React, { useRef } from 'react';

import './RefExample.css';

export default function UseRef() {
    const inputRef = useRef(); 
    return (
        <div>
            <input type='text' ref={inputRef}/>
            <button
                style={{marginBottom: 10}}
                onClick={() => inputRef.current.focus()}
            >
                focus
            </button>
        </div>
    );
}
