import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  
    const [counter, setCounter] = useState( 10 );

    const incrementFather = useCallback(
      ( step ) => {
        console.log(step);
        setCounter( (value) => value + step );
      },
      [],
    );

    useEffect(() => {
      // incrementFather();
    }, [incrementFather]);
    

    // const incrementFather = () => {
    //     setCounter( counter + 1 );
    // }

    return (
    <>
        <h1>UseCallback Hook: { counter }</h1>
    
        <ShowIncrement increment={ incrementFather } />

        <hr />
    </>
  )
}
