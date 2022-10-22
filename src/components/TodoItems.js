function TodoItems({ todo, handleCheckbox, handleDelete }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleCheckbox(todo.id)}
      />
      <span className={todo.completed ? "completed" : null}>{todo.title}</span>
      <button className="btn-style" onClick={() => handleDelete(todo.id)}>
        X
      </button>
    </li>
  );
}

export default TodoItems;
