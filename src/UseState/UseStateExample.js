import { Button } from '@material-ui/core';
import React, { useState } from 'react';

const UseStateExample = () => {
    const [count, setCount] = useState(0);

    return (
        <article>
            {
                count === 0 ?
                    <p>Você não clicou?</p> :
                    <p>Você clicou {count} vezes?</p>
            }
            <Button variant="contained" color="secondary" onClick={() => setCount(count + 1)}>
                Clica aqui
            </Button>
        </article>
    );
};

export default UseStateExample;