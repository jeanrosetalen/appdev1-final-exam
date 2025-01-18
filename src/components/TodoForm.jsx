import React from "react";

const TodoForm = ({addTodo, setNewTodo, newTodo}) => {
    
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter todo title"
      />
      <button
        onClick={() => {
            addTodo(newTodo)
            setNewTodo('')
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;