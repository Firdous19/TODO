import Todo from "./Todo";
import { TodoList } from "./Create";
import { useContext } from "react";

function Todos({ inputColor, inputTextColor }) {
  const todoLists = useContext(TodoList);

  console.log("todolist ", todoLists);
  return (
    <ul>
      {todoLists.map((todo, index) => {
        return (
          <Todo
            id={index}
            key={index}
            todoTask={todo}
            inputColor={inputColor}
            inputTextColor={inputTextColor}
          />
        );
      })}
    </ul>
  );
}

export default Todos;
