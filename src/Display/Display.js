import React from 'react';

import './Display.css';

export default React.memo(function Display(props) {

    const { odd } = props;

    console.log("RENDER");

    return (
        <div>
            {
                odd.map(obj =>(
                    <>
                        <span>
                            {obj.label}
                        </span>
                        <br/>
                    </>
                ))
            }
        </div>
    );
})
