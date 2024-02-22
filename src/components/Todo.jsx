import { useContext } from "react";
import { DeleteTodo } from "./Create";

function Todo({ id, todoTask, inputColor, inputTextColor }) {
  const deleteTodo = useContext(DeleteTodo);

  return (
    <>
      <div
        key={id}
        style={{
          backgroundColor: inputColor,
          color: inputTextColor,
        }}
        className="group p-3.5 border-b border-gray-400 flex align-middle justify-between hover:cursor-pointer"
      >
        <div className="flex">
          <input
            type="checkbox"
            name=""
            id=""
            //   className="mr-3 "
            draggable="true"
            className="mt-1 mr-3 rounded-full appearance-none h-4 w-4 border border-gray-300 checked:bg-blue-600 checked:border-transparent focus:outline-none borderCheckBox cursor-pointer"
          />
          <li>{todoTask}</li>
        </div>
        <button
          className="opacity-0 group-hover:opacity-100"
          onClick={() => {
            deleteTodo(id);
          }}
        >
          <img className="w-4" src="/images/icon-cross.svg" alt="cross" />
        </button>
      </div>
    </>
  );
}

export default Todo;
