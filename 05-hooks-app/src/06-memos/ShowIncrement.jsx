import { memo } from "react";

export const ShowIncrement = memo ( ({ increment }) => {

    console.log('Se volvió a generar :(');

    return (
        <button
            className="btn btn-primary mt-2"
            onClick={() => {
                increment( 5 );
            }}
        >
            Incrementar
        </button>
    )
})
