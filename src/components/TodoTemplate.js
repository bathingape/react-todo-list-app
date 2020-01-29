import React from "react";
import TodoList from "./TodoList";
import TodoMenu from "./TodoMenu";

const TodoTemplate = () => (
  <div className="todo-template">
    <TodoMenu />
    <TodoList />
  </div>
);

export default TodoTemplate;
