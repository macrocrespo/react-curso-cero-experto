import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en <TodoReducer />', () => { 

    const inicialState = [{
        id: 1,
        description: 'Demo todo',
        done: false,
    }];

    test('Debe regresar el estado inicial', () => {

        const newState = todoReducer( inicialState, {} );
        expect( newState ).toBe( inicialState );

    });

    test('Debe agregar un todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo Todo 2',
                done: false,
            }
        };

        const newState = todoReducer( inicialState, action );
        expect( newState.length ).toBe(2);
        expect( newState ).toContain( action.payload );

    });

    test('Debe de eliminar un todo', () => {

        const action = {
            type: '[TODO] Delete Todo',
            payload: 1,
        };

        const newState = todoReducer( inicialState, action );
        expect( newState.length ).toBe(0);
    });

    test('Debe de realizar el toggle del todo', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1,
        };

        const fistState = todoReducer( inicialState, action );
        expect( fistState[0].done ).toBeTruthy();

        const secondState = todoReducer( fistState, action );
        expect( secondState[0].done ).toBeFalsy();
        
    });

});