import { useState } from "react";
import Todo from "./Todo";

function Create({ inputColor, inputTextColor }) {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);

  //Deleting Todo items not required by the user
  function deleteTodo(id) {
    console.log(id);
    setTodoList(() => {
      return todoList.filter((todo, index) => index != id);
    });
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
          value={todo}
          onChange={(event) => {
            setTodo(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              setTodoList([...todoList, todo]);
              setTodo("");
            }
          }}
        />
      </div>
      {/* Todo List Starts Here */}
      <ul>
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
      </ul>
    </>
  );
}

export default Create;
