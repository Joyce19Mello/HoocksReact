import React, { useEffect, useState } from 'react';
import './App.css'
import CallbackExample from './UseCallback';
import MemoExample from './UseMemo';
import RefExample from './UseRef';
import ReducerExample from './UseReducer';
import StatefullComponent from "./StatefullComponent";
import UseStateExample from "./UseState";
import UseEffectExample from "./UseEffect/UseEffectExample";
import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';

export default function App() {

  const [choice, setChoice] = useState(1);

  const INITIAL_TITLE = "Hoocks react";

  useEffect(() => {
    document.title = INITIAL_TITLE
  })

  return (
    <>
      <aside style={{ paddingRight: '20px' }}>
        <Button variant="contained" color="secondary" onClick={() => setChoice(1)}>Stateful component</Button>
        <Button variant="contained" color="secondary" onClick={() => setChoice(2)}>UseState exemplo</Button>
        <Button variant="contained" color="secondary" onClick={() => setChoice(3)}>UseEffect exemplo</Button>
        <Button variant="contained" color="secondary" onClick={() => setChoice(4)}>UseCallback exemplo</Button>
        <Button variant="contained" color="secondary" onClick={() => setChoice(5)}>UseMemo exemplo</Button>
        <Button variant="contained" color="secondary" onClick={() => setChoice(6)}>UseRef exemplo</Button>
        <Button variant="contained" color="secondary" onClick={() => setChoice(7)}>UseReducer exemplo</Button>
      </aside>

      <main>
        {
          choice === 1 &&
          <Card className='example'>
            <span className="title">
              STATEFULL COMPONENT
                      </span>
            <StatefullComponent />
          </Card>
        }
        {
          choice === 2 &&
          <Card className='example'>
            <span className="title">
              USESTATE EXEMPLO
                      </span>
            <UseStateExample />
          </Card>
        }
        {
          choice === 3 &&
          <Card className='example'>
            <span className="title">
              USEEFFECT EXEMPLO
                      </span>
            <UseEffectExample />
          </Card>
        }
        {
          choice === 4 &&
          <Card className='example'>
            <span className="title">
              USECALLBACK EXEMPLO
                  </span>
            <CallbackExample />
          </Card>
        }

        {
          choice === 5 &&
          <Card className='example-memo'>
            <span className="title">
              USEMEMO EXEMPLO
                  </span>
            <MemoExample />
          </Card>
        }
        {
          choice === 6 &&
          <Card className='example'>
            <span className="title">
              USEREF EXEMPLO
                  </span>
            <RefExample />
          </Card>
        }
        {
          choice === 7 &&
          <Card className='example'>
            <span className="title">
              USEREDUCER EXEMPLO
                  </span>
            <ReducerExample />
          </Card>
        }
      </main>
    </>
  );
}

