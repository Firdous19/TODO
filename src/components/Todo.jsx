function Todo({ key, todoTask, inputColor, inputTextColor }) {
  return (
    <>
      <div
        key={key}
        style={{
          backgroundColor: inputColor,
          color: inputTextColor,
        }}
        className="p-3.5 border-b border-gray-400 flex align-middle"
      >
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
    </>
  );
}

export default Todo;
