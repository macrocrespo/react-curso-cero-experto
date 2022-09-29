import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis"

export const TodoApp = () => {

    // const { data: todos = [], isLoading } = useGetTodosQuery();
    const [todoId, setTodoId] = useState(1);
    const { data: todo, isLoading } = useGetTodoQuery(todoId);

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: { isLoading ? 'True' : 'False' }</h4>

            {/* <pre>
                { todos.map( ({id, title, completed}) => (
                    <li key={ id }>
                        <strong>{ completed ? 'DONE' : 'Pending' } </strong>
                        - { title }
                    </li>
                ) ) }
            </pre> */}

            <pre>{ JSON.stringify( todo ) }</pre>

            <ul>
      
            </ul>

            <button
                onClick={() => { setTodoId( todoId - 1 ) }}
                disabled={ todoId <= 1 }
            >
                Previous TODO
            </button>

            <button
                onClick={() => { setTodoId( todoId +1 ) }}
            >
                Next TODO
            </button>
        </>
    )
}
