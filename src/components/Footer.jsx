import { useContext, useState } from "react";
import Button from "./Button";
import { TodoList } from "./Create";
import Todos from "./Todos";
import { Filter } from "../App";

function Footer({ noOfTodos, inputColor, inputTextColor }) {
  const { todoList, setTodoList } = TodoList;
  const { filter, setFilter } = useContext(Filter);
  
  console.log(filter);

  function handleFilter(id) {
    setFilter(id);
  }

  function handleCompletedTodos() {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    console.log(todoList);
  }
  // function handleCompletedTodos() {
  //   return <Todos inputColor={inputColor} inputTextColor={inputTextColor} />;
  // }

  return (
    <>
      <div
        style={{
          backgroundColor: inputColor,
          color: inputTextColor,
        }}
        className="flex justify-between align-middle p-3.5 pb-4 rounded-b-md"
      >
        <h4 className="sm:text-md custom:text-sm text-gray-500">
          {noOfTodos} items left
        </h4>
        <div className="w-40 flex justify-between align-middle">
          <Button onClick={handleAllTodos}>All</Button>
          <Button onClick={handleAllTodos}>Active</Button>
          <Button onClick={handleCompletedTodos}>Completed</Button>
        </div>
        <div>
          <Button>Clear Completed</Button>
        </div>
      </div>
    </>
  );
}

export default Footer;
