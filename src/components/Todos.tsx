import { Todo } from "./Todo"
import useThemeContext from "../Context/context"

export function Todos() {
    const { todoList, filter } = useThemeContext()

    if (filter === 'all') {
        return (
            <ul>
                {
                    todoList.map((todo) => {
                        return <Todo key={todo.id} todo={todo} />
                    })
                }
            </ul>
        )
    }
    else if (filter === 'active') {
        return (
            <ul>
                {
                    todoList.map((todo) => {
                        return !todo.completed && <Todo key={todo.id} todo={todo} />
                    })
                }
            </ul>
        )
    }
    else {
        return (
            <ul>
                {
                    todoList.map((todo) => {
                        return todo.completed && <Todo key={todo.id} todo={todo} />
                    })
                }
            </ul>
        )
    }
}
