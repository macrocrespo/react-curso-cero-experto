import { useTodos } from "../hooks/useTodos";
import { TodoAdd, TodoList } from "./";

export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos();

    return (
        <>
            <h1 className="text-center">Todo App ({ todosCount })  <small>Pendientes: { pendingTodosCount }</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />

                    <TodoAdd
                        onNewTodo={handleNewTodo}
                    />

                </div>
            </div>
            <hr />
        </>
    )
}
