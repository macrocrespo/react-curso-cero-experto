import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

describe('Pruebas en el componente <NavBar />', () => {
    
    const contextValue = {
        logged: true,
        user: {
            id: 1,
            name: 'Mario Crespo',
        },
        logout: jest.fn(),
    }

    beforeEach(() => jest.clearAllMocks() );
    
    test('Debe mostrar el nombre de usuario', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue } >
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getByText('Mario Crespo') ).toBeTruthy();

    });

    test('Debe llamar el logout y navigate cuando se hace click en el botón de logout', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue } >
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );
        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockUseNavigate ).toBeCalledWith("/login", {"replace": true});

    });

 });