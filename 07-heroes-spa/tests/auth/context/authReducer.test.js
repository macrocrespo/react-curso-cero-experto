import { authReducer } from "../../../src/auth/context/authReducer";

describe('Pruebas en authReducer', () => { 

    const initialState = {
        logged: false,
    }
    
    test('Debe retornar el estado inicial', () => { 

        const newState = authReducer( initialState, {} );
        expect( newState ).toBe( initialState );

     });

     
    
 });