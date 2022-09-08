import { useCounter } from "../hooks"
import { Small } from "./Small";

export const Memorize = () => {

    const { counter, increment } = useCounter(10);

  return (
    <>
        <h1>Counter: <Small value={ counter} /></h1>
    
        <button 
            className="btn btn-primary mt-2"
            onClick={ () => increment() }
        >
            +1
        </button>

        <hr />
    </>
  )
}
