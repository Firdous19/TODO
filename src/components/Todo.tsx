import useThemeContext, { TodoList } from "../Context/context";


export function Todo({ todo }: { todo: TodoList }) {
    const { headerImage, deleteTodo, handleActiveTodos } = useThemeContext()
    const { inputColor, inputTextColor } = headerImage;

    return (
        <>
            <div
                style={{
                    backgroundColor: inputColor,
                    color: inputTextColor,
                }}
                className="group p-3.5 border-b border-gray-400 flex align-middle justify-between hover:cursor-pointer h-fit"
            >
                <div className="flex">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        className="mt-1 mr-3 rounded-full appearance-none h-4 w-4 border border-gray-300 checked:bg-blue-600 checked:border-transparent focus:outline-none borderCheckBox cursor-pointer"
                        onChange={() => handleActiveTodos(todo.id)}
                    />
                    <li
                        className="max-w-full marker:none"
                        style={{
                            textDecoration: todo.completed ? "line-through" : "none",
                        }}
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