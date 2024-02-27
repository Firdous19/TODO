import { useContext, useState } from "react";
import { DeleteTodo } from "./Create";
import { TodoList } from "./Create";

function Todo({ todo, inputColor, inputTextColor }) {
  const deleteTodo = useContext(DeleteTodo);
  const { todoList, setTodoList } = useContext(TodoList);
  const [activeTodo, setActiveTodo] = useState([]);

  // console.log("TodoList: ", todoList);

  function handleActiveTodos(id) {
    console.log("id: ", id);
    setTodoList((prevTodos) =>
      prevTodos.map((todo) => {
        // console.log("Todo item: ", todo);
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  }
  console.log("TodoList", todoList);
  // console.log("Active Todos: ", activeTodo);

  return (
    <>
      <div
        // key={id}
        style={{
          backgroundColor: inputColor,
          color: inputTextColor,
        }}
        className="group p-3.5 border-b border-gray-400 flex align-middle justify-between hover:cursor-pointer"
      >
        <div className="flex">
          <input
            type="checkbox"
            // checked={todo.completed}
            checked={todo.completed}
            name=""
            id=""
            //   className="mr-3 "
            draggable="true"
            className="mt-1 mr-3 rounded-full appearance-none h-4 w-4 border border-gray-300 checked:bg-blue-600 checked:border-transparent focus:outline-none borderCheckBox cursor-pointer"
            onChange={() => handleActiveTodos(todo.id)}
          />
          <li
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.task}
          </li>
        </div>
        <button
          className="opacity-0 group-hover:opacity-100"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          <img className="w-4" src="/images/icon-cross.svg" alt="cross" />
        </button>
      </div>
    </>
  );
}

export default Todo;
