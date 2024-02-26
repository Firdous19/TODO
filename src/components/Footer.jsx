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
    return <Todos inputColor={inputColor} inputTextColor={inputTextColor} />;
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
        className="flex justify-between align-middle p-3.5 pb-4 rounded-b-md custom1:rounded-none"
      >
        <h4 className="sm:text-md custom:text-sm text-gray-500">
          {noOfTodos} items left
        </h4>
        <div className="w-40 flex justify-between align-middle custom1:hidden">
          <Button onClick={handleAllTodos}>All</Button>
          <Button onClick={handleAllTodos}>Active</Button>
          <Button onClick={handleCompletedTodos}>Completed</Button>
        </div>
        <div>
          <Button>Clear Completed</Button>
        </div>
      </div>
      <div
        style={{
          backgroundColor: inputColor,
          color: inputTextColor,
        }}
        className="flex justify-between align-middle p-2 pb-3 rounded-b-md hidden custom1:block"
      >
        <div className="w-40 flex justify-between align-middle mx-auto">
          <Button onClick={handleAllTodos}>All</Button>
          <Button onClick={handleAllTodos}>Active</Button>
          <Button onClick={handleCompletedTodos}>Completed</Button>
        </div>
      </div>
    </>
  );
}

export default Footer;
