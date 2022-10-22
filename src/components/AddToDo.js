import { useState } from "react";

function AddTodo({ addSubmit }) {
  const [text, setText] = useState("");
  const addTodo = (e) => {
    addSubmit(text);
    e.preventDefault();
    setText("");
  };
  return (
    <form className="form-container">
      <input
        type="text"
        placeholder="Add to do..."
        className="input-text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button className="input-submit" onClick={addTodo}>
        Submit
      </button>
    </form>
  );
}

export default AddTodo;
