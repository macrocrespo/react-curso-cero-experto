export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span 
            aria-label="span"
            style={{
                cursor: "pointer",
            }}
            className={ `align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }` }
            onClick={ () => onToggleTodo( todo.id ) }
        >
                { todo.description }
        </span>
        <button 
            aria-label="deleteButton"
            onClick={ () => onDeleteTodo( todo.id )  }
            className="btn btn-danger">Delete
        </button>
    </li>
  )
}
