import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";

describe('Pruebas en <PublicRoute />', () => {

    test('Debe mostrar el children si no esta autenticado', () => {

        const contextValue = {
            logged: false,
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Sitio publico</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Sitio publico')).toBeTruthy();

    });

    test('Debe navegar si esta autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                id: 1,
                name: 'Mario Crespo',
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Sitio publico</h1>
                            </PublicRoute>
                        } />
                        <Route path="marvel" element={<h1>Página de Marvel</h1>} />
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Página de Marvel')).toBeTruthy();

    });

});