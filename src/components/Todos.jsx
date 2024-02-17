import Todo from "./Todo";

function Todos({ inputColor, inputTextColor, todoList }) {
  return (
    <ul>
      {todoList.map((todo, key) => {
        <Todo
          key={key}
          todoTask={todo}
          inputColor={inputColor}
          inputTextColor={inputTextColor}
        />;
      })}
    </ul>
  );
}

export default Todos;
