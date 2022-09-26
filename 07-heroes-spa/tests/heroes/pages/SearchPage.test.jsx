import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes";

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

describe('Pruebas en <SearchPage />', () => { 

    beforeEach(() => jest.clearAllMocks());
   
    test('Debe mostrarse correctamente con los valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        expect( container ).toMatchSnapshot();

    });

    test('Debe mostrar a Batman y el input con el valor del queryString', () => {

        render(
            <MemoryRouter initialEntries={['search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman');

        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg');


        const noResultsContainer = screen.getByLabelText('no-results');
        expect( noResultsContainer.style.display ).toBe('none');
    });

    test('Debe mostrar un error si no se encuentra el hero (batman123)', () => {

        render(
            <MemoryRouter initialEntries={['search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );

        const noResultsContainer = screen.getByLabelText('no-results');
        expect( noResultsContainer.style.display ).toBe('');

    });

    test('Debe llamar el navigate a la pantalla nueva', () => {

        const inputValue = 'superman';
        render(
            <MemoryRouter initialEntries={['search']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change( input, { target: { name: 'searchText', value: inputValue } } );
        
        const form = screen.getByRole('form');
        fireEvent.submit( form );
        expect( mockUseNavigate ).toHaveBeenCalledWith( `?q=${ inputValue }` );

    });

 });