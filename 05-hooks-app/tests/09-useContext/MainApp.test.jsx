import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";

describe('Pruebas en el componente <MainApp />', () => { 

    test('Debe mostrar el HomePage', () => {
    
        render( 
            <MemoryRouter initialEntries={['/']}>
                <MainApp /> 
            </MemoryRouter>
        );
        // screen.debug();

        expect( screen.getByText( 'HomePage' ) ).toBeTruthy();
    });

    test('Debe mostrar el LoginPage', () => {
    
        render( 
            <MemoryRouter initialEntries={['/login']}>
                <MainApp /> 
            </MemoryRouter>
        );
        expect( screen.getByText( 'LoginPage' ) ).toBeTruthy();
    });

    test('Debe mostrar el AboutPage', () => {
    
        render( 
            <MemoryRouter initialEntries={['/about']}>
                <MainApp /> 
            </MemoryRouter>
        );
        expect( screen.getByText( 'AboutPage' ) ).toBeTruthy();
    });

    test('En caso de Error 404, debe mostrar el AboutPage', () => {
    
        render( 
            <MemoryRouter initialEntries={['/esta-pagina-no-existe']}>
                <MainApp /> 
            </MemoryRouter>
        );
        expect( screen.getByText( 'AboutPage' ) ).toBeTruthy();
    });

});