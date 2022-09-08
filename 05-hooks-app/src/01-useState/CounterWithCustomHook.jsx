import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
        <h1>Counter with Hook: { counter }</h1>
        
        <button className="btn btn-primary" onClick={increment}>+1</button>
        <button className="btn btn-success" onClick={decrement}>-1</button>
        <button className="btn btn-danger" onClick={reset}>Reset</button>

        <hr />
    </>
  )
}
