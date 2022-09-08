import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe('Pruebas en <HomePage />', () => { 
    
    test('Debe mostrar el componente sin el Usuario', () => {


        render( 
            <UserContext.Provider value={{ user: null }} >
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe( 'null' );

    });

    test('Debe mostrar el componente con el Usuario', () => {

        const user = {
            id: 1,
            name: 'Mario',
            email: 'mario@google.com',
        }

        render( 
            <UserContext.Provider value={{ user }} >
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        const userResult = JSON.parse( preTag.innerHTML );

        expect( userResult.id ).toBe( user.id );
        expect( userResult.name ).toBe( user.name );
        expect( userResult.email ).toBe( user.email );

    });

 });