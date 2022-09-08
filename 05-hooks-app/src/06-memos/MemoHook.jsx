import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

export const MemoHook = () => {

    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);
    const heavyStuff = ( iterations ) => {
      for (let i=0; i < iterations; i++) {
        console.log('Repeticion...');
      }
      return `${ iterations } iteraciones realizadas.`;
    }

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
        <h1>Counter: <small>{ counter }</small></h1>
    
        <h4>{ memorizedValue }</h4>

        <button 
            className="btn btn-primary mt-2"
            onClick={ () => increment() }
        >
            +1
        </button>

        <button 
          className="btn btn-outline-primary mt-2"
          onClick={ () => { setShow(!show) }}
        >
          Show / Hide
        </button>

        <code>{ JSON.stringify( show ) }</code>

        <hr />
    </>
  )
}
