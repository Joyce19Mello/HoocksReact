import React, { useState, useCallback } from 'react';

import './CallbackExample.css';

import Counter from '../Counter';

export default function UseCallback() {

    const [count, setCount] = useState(0)
    const [render, setRender] = useState(false)

    const handleAdd = useCallback(() => {
        setCount(old => old+1)
    }, [])
    const handleRemove = useCallback(() => {
        setCount(old => old-1)
    }, [])
    const handleAddR = () => {
        setCount(old => old+1)
    }
    const handleRemoveR = () => {
        setCount(old => old-1)
    }

    return (
        <>
            <div className='simpleContainer'>
                <span>
                    {count}
                </span>
                {!render &&
                    <Counter
                        add={handleAdd}
                        remove={handleRemove}
                    />
                }
                {render &&
                    <Counter
                        add={handleAddR}
                        remove={handleRemoveR}
                    />
                }
            </div>
            <button
                style={{width:'50%', marginBottom: 10}}
                onClick={() => setRender(old => !old)}
            >
                {`RENDERING: ${render}`}
            </button>
        </>
    );
}
