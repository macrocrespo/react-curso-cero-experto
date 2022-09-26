import { getByText, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { AppRouter } from "../../src/router/AppRouter";

describe('Pruebas en <AppRouter />', () => {

    test('Debe Mostrar la página de Login si no esta autenticado', () => {

        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue } >
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getByText('LoginPage') ).toBeTruthy();

    });

    test('Debe Mostrar la página de Marvel si esta autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                id: 1,
                name: 'Mario',
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue } >
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        
        expect( screen.getByText('Marvel Page') ).toBeTruthy();

    });

});