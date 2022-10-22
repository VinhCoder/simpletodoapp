import TodoApp from "./TodoApp";
import TodoItems from "./TodoItems";

function Todos({ todos, handleCheckbox, handleDelete }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItems
            todo={todo}
            key={todo.id}
            handleCheckbox={handleCheckbox}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default Todos;
