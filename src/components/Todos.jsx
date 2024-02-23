import Todo from "./Todo";
import { TodoList } from "./Create";
import { useContext } from "react";

function Todos({ inputColor, inputTextColor }) {
  const { todoList } = useContext(TodoList);

  // console.log("todolist ", todoLists);
  return (
    <ul>
      {todoList.map((todo, index) => {
        return (
          <Todo
            id={index}
            key={index}
            todoTask={todo.task}
            inputColor={inputColor}
            inputTextColor={inputTextColor}
          />
        );
      })}
    </ul>
  );
}

export default Todos;
