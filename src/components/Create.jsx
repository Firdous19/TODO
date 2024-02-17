import { useState } from "react";
import Todo from "./Todo";

function Create({ inputColor, inputTextColor }) {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);

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
            }
          }}
        />
      </div>
      {/* Todo List Starts Here */}
      <ul>
        {todoList.map((todo, key) => (
          <Todo
            key={key}
            todoTask={todo}
            inputColor={inputColor}
            inputTextColor={inputTextColor}
          />
        ))}
      </ul>
    </>
  );
}

export default Create;
