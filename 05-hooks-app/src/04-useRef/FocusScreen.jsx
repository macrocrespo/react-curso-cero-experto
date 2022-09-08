import { useRef } from "react"

export const FocusScreen = () => {

  const inputRef = useRef();

  const onClickBtn = () => {
    inputRef.current.select();
  }

  return (
    <>
        <h1>Focus Screen</h1>

        <input type="text" 
            ref={ inputRef }
            className="form-control"
            placeholder="Ingrese su Nombre"
        />

        <button 
          className="btn btn-primary mt-2"
          onClick={ onClickBtn }
        >
          Set focus
        </button>

        <hr />
    </>
  )
}
