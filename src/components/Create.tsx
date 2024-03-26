import { useState } from "react";
import useThemeContext, { TodoList } from "../Context/context";

function Create() {
    const { headerImage, addTodos } = useThemeContext();
    const { inputColor, inputTextColor } = headerImage;
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false,
    } as TodoList
    );

    function handleCreate(event: React.ChangeEvent<HTMLInputElement>) {
        setTodo({
            id: event.target.value.slice(0, 5) + Math.floor(Math.random() * 1000),
            task: event.target.value,
            completed: false,
        })
    }

    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            addTodos(todo);
            setTodo({ id: "", task: "", completed: false })
        }
    }

    return (
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
                onChange={handleCreate}
                onKeyDown={handleKeyPress}
            />
        </div>
    )
}

export { Create };