import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, []);

    const { pokemons = [], isLoading, page } = useSelector(state => state.pokemons);

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />

            <span>
                Loading: 
                <strong>
                    { isLoading ? 'True' : 'False' }
                </strong>
            </span>

            <ul>
                {
                    pokemons.map( ({ name }) => (
                        <li key={ name }>
                            { name }
                        </li>
                    ))
                }
            </ul>

            <button
                disabled={ isLoading }
                onClick={ () => dispatch(getPokemons( page )) }
            >
                Next
            </button>
        </>
    )
}
