import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const day = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <>
      <div className="todo-info-set">
        <h1>To-Do List app</h1>
        <div className="todo-list-info">
          <h2>{dateString}</h2>
          <p className="day">{day}</p>
          <p className="tasks">할 일 4개 남음</p>
        </div>
        <TodoItem text="블로깅하기" />
        <TodoItem text="공부하기" />
        <TodoItem text="리액트" />
        <TodoItem text="시험준비" />
      </div>
      <div className="create-todo">
        <input className="todo-input" type="text"></input>
        <button className="input-button">등록하기</button>
      </div>
    </>
  );
};

export default TodoList;
