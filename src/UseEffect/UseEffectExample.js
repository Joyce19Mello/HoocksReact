import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `${count} clicks`
    }, [count])

    return (
        <article>
            {
                count === 0 ?
                    <p>Você não clicou?</p> :
                    <p>Você clicou {count} vezes?</p>
            }
            <Button variant="contained" color="secondary" onClick={() => setCount(prevState => prevState + 1)}>
                +
            </Button>
        </article>
    );
};

export default UseEffectExample;