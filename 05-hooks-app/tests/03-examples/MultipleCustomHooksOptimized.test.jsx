import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooksOptimized } from "../../src/03-examples/MultipleCustomHooksOptimized";
import { useCounter, useFetch } from "../../src/hooks";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooksOptimized />', () => { 

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });

    // Limpiar todos los Mocks antes de cada prueba
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null, 
            isLoading: true, 
            hasError: null,
        });

        render( <MultipleCustomHooksOptimized /> );

        expect( screen.getByText('Breaking Bad Quotes') );
        expect( screen.getByText('Loading...') );
        expect( screen.getByText('Next Quote') );

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        expect( nextButton.disabled ).toBeTruthy();

    });

    test('debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Mario',
                quote: 'Hola Mundo',
            }], 
            isLoading: false,
            hasError: null,
        });

        render( <MultipleCustomHooksOptimized /> );

        expect( screen.getByText('Hola Mundo') ).toBeTruthy();
        expect( screen.getByText('Mario') ).toBeTruthy();
        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        expect( nextButton.disabled ).toBeFalsy();
    });

    test('Debe llamar a la función de incrementar', () => {

        // Carga información simulando el retorno de la API
        useFetch.mockReturnValue({
            data: [{
                author: 'Mario',
                quote: 'Hola Mundo',
            }], 
            isLoading: false,
            hasError: null,
        });

        // Renderiza el Componente con la información de prueba
        render( <MultipleCustomHooksOptimized /> );

        // Obtener el Botón "Next Quote"
        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        
        // Disparar el evento onClick en el botón
        fireEvent.click( nextButton );

        // Espera que se haya llamado a la función de incrementar
        expect( mockIncrement ).toHaveBeenCalled();
    });

 });