import { useContext, useState } from "react";
import Button from "./Button";
import { TodoList } from "./Create";
import Todos from "./Todos";
import { Filter } from "../App";
import { ClearCompleted } from "../App";

function Footer({ noOfTodos, inputColor, inputTextColor }) {
  // const { setTodoList } = useContext(TodoList);
  const { filter, setFilter } = useContext(Filter);
  const { clearCompleted, setClearCompleted } = useContext(ClearCompleted);

  console.log(filter);

  function handleFilter(id) {
    setFilter(id);
  }

  function clearCompletedTodos() {
    console.log("Clear Todos");
    setClearCompleted(prev=>!prev);
    // console.log(clearCompleted);
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
          <Button onClick={() => handleFilter("all")}>All</Button>
          <Button onClick={() => handleFilter("active")}>Active</Button>
          <Button onClick={() => handleFilter("completed")}>Completed</Button>
        </div>
        <div>
          <Button onClick={clearCompletedTodos}>Clear Completed</Button>
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
          <Button onClick={() => handleFilter("all")}>All</Button>
          <Button onClick={() => handleFilter("active")}>Active</Button>
          <Button onClick={() => handleFilter("completed")}>Completed</Button>
        </div>
      </div>
    </>
  );
}

export default Footer;
