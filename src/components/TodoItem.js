import React from "react";

const TodoItem = ({ text }) => (
  <>
    <div className="todo-item">
      <input className="check-box" type="checkbox" />
      <div className="item">{text}</div>
      <button className="todo-remove">삭제하기</button>
    </div>
  </>
);

export default TodoItem;
