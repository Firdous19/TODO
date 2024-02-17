function Create({ inputColor, inputTextColor }) {
  return (
    <div className="relative">
      <button className="border-2 outline-none border-gray-500 bg-transparent w-4 h-4 rounded-full absolute top-1/2 transform -translate-y-2/4 ml-3"></button>
      <input
        style={{
          backgroundColor: inputColor,
          color: inputTextColor,
        }}
        className="w-full p-[14px] pl-11 rounded-md placeholder-gray-500 placeholder:text-[16px] text-[16px]"
        type="text"
        placeholder="Create a new Todo...."
      />
    </div>
  );
}

export default Create;
