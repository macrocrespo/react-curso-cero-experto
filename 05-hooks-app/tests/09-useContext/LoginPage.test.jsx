import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas en <LoginPage />', () => { 

    const user = {
        id: 1,
        name: 'Mario',
        email: 'mario@google.com',
    }

    const setUserMock = jest.fn();

    test('Debe mostrar el componente sin el usuario', () => {

        render( 
            <UserContext.Provider value={{ user: null }} >
                <LoginPage />
            </UserContext.Provider>
        );
        
        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe( 'null' );

    });

    test('Debe mostrar el componente con el usuario', () => {

        render( 
            <UserContext.Provider value={{ user }} >
                <LoginPage />
            </UserContext.Provider>
        );
        
        const preTag = screen.getByLabelText('pre');
        const userResult = JSON.parse( preTag.innerHTML );

        expect( userResult.id ).toBe( user.id );
        expect( userResult.name ).toBe( user.name );
        expect( userResult.email ).toBe( user.email );

    });

    test('Debe llamar el setUser cuando se hace click', () => {

        render( 
            <UserContext.Provider value={{ user, setUser: setUserMock }} >
                <LoginPage />
            </UserContext.Provider>
        );

        const setUserButton = screen.getByLabelText('setUser');
        fireEvent.click( setUserButton );
        expect( setUserMock ).toHaveBeenCalledWith( {"email": "mario@test.com", "id": 123, "name": "Mario Crespo"} );

    });
    
});