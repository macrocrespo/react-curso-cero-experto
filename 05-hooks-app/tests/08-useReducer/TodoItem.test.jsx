import { screen, render, fireEvent } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en el componente <TodoItem />', () => { 

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false,
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('Debe mostrar el Todo Pendiente de completar', () => {

        render( 
            <TodoItem  
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock }
                onDeleteTodo={ onDeleteTodoMock }
            /> 
        );

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toContain('list-group-item');
        
        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('align-self-center');
        expect( spanElement.className ).not.toContain('text-decoration-line-through');

    });

    test('Debe mostrar el Todo Completado', () => {

        todo.done = true;

        render( 
            <TodoItem  
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock }
                onDeleteTodo={ onDeleteTodoMock }
            /> 
        );

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through');

    });

    test('Span debe llamar el toggleTodo cuando se hace click ', () => {

        todo.done = true;

        render( 
            <TodoItem  
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock }
                onDeleteTodo={ onDeleteTodoMock }
            /> 
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
        
    });

    test('Button debe llamar el deleteTodo cuando se hace click ', () => {

        render( 
            <TodoItem  
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock }
                onDeleteTodo={ onDeleteTodoMock }
            /> 
        );

        const deleteButton = screen.getByLabelText('deleteButton');
        fireEvent.click( deleteButton );
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
        
    });
 });