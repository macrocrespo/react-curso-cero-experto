import { useEffect, useReducer, useState } from "react";
import { todoReducer } from "../08-useReducer";

const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' )) || [];
}

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la gema del alma',
    //     done: false,
    // },
];

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    // const [todosCount, setTodosCount] = useState(0);
    // const [pendingTodosCount, setPendingTodosCount] = useState();

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        // setTodosCount(todos.length);
        // setPendingTodosCount( todos.filter(todo => !todo.done).length );
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Delete Todo',
            payload: id,
        }
        dispatch(action);
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id,
        }
        dispatch(action);
    }

    return {
        todos,
        todosCount: todos.length, 
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    };
}
