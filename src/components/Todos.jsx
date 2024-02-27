import Todo from "./Todo";
import { TodoList } from "./Create";
import { createContext, useContext, useState } from "react";
import { Filter } from "../App";

function Todos({ inputColor, inputTextColor }) {
  const { todoList } = useContext(TodoList);
  const { filter } = useContext(Filter);

  if (filter === "all") {
    return (
      <ul>
        {todoList.map((todo, index) => {
          console.log("Todo: ",todo);
          return (
            <Todo
              // id={index}
              key={index}
              todo={todo}
              inputColor={inputColor}
              inputTextColor={inputTextColor}
            />
          );
        })}
      </ul>
    );
  } else if (filter === "active") {
    return (
      <ul>
        {todoList.map((todo, index) => {
          if (!todo.completed) {
            return (
              <Todo
                // id={index}
                key={index}
                todo={todo}
                inputColor={inputColor}
                inputTextColor={inputTextColor}
              />
            );
          }
        })}
      </ul>
    );
  } else {
    return (
      <ul>
        {todoList.map((todo, index) => {
          if (todo.completed) {
            return (
              <Todo
                // id={index}
                key={index}
                todo={todo}
                inputColor={inputColor}
                inputTextColor={inputTextColor}
              />
            );
          }
        })}
      </ul>
    );
  }
}

export default Todos;
