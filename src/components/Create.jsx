import { createContext, useState } from "react";
import Todo from "./Todo";
import Todos from "./Todos";

const TodoList = createContext();
const DeleteTodo = createContext();

function Create({ setNoOfTodos, inputColor, inputTextColor }) {
  const [todo, setTodo] = useState({
    id: 0,
    task: "",
    completed: false,
  });
  const [todoList, setTodoList] = useState([]);

  // console.log(todoList);

  //Deleting Todo items not required by the user
  function deleteTodo(id) {
    console.log(id);
    setTodoList(() => {
      return todoList.filter((todo, index) => index != id);
    });
    console.log("Delete: ", todoList.length);
    setNoOfTodos(todoList.length - 1);
  }

  return (
    <>
      <div className="relative mb-7">
        <button className="border-2 outline-none border-gray-500 bg-transparent w-4 h-4 rounded-full absolute top-1/2 transform -translate-y-2/4 ml-3"></button>
        <input
          style={{
            backgroundColor: inputColor,
            color: inputTextColor,
          }}
          className="w-full p-[14px] pl-11 rounded-md placeholder-gray-500 placeholder:text-[16px] text-[16px]"
          type="text"
          placeholder="Create a new Todo...."
          value={todo.task}
          onChange={(event) => {
            setTodo((prev) => {
              return {
                id: todoList.length,
                task: event.target.value,
                completed: false,
              };
            });
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              setTodoList([...todoList, todo]);
              setTodo({ ...todo, task: "" });
              //Displaying the no of todos in the todoList
              setNoOfTodos(todoList.length + 1);
            }
          }}
        />
      </div>

      {/* Segregated Todo List Rendering logic using context Api */}
      <TodoList.Provider value={{ todoList, setTodoList }}>
        <DeleteTodo.Provider value={deleteTodo}>
          <Todos inputColor={inputColor} inputTextColor={inputTextColor} />
        </DeleteTodo.Provider>
      </TodoList.Provider>

      {/* Todo List Starts Here */}
      {/* <ul>
        {todoList.map((todo, index) => (
          <Todo
            id={index}
            key={index}
            todoTask={todo}
            inputColor={inputColor}
            inputTextColor={inputTextColor}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul> */}
    </>
  );
}
export default Create;
export { TodoList, DeleteTodo };
