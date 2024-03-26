import { createContext, useContext } from "react";

export type TodoList = {
    id: number | string,
    task: string,
    completed: boolean,
}

type HeaderImageProps = {
    buttonImage: string,
    inputColor: string,
    inputTextColor: string,
    color: string,
    image: string,
    toggle: boolean,
}

export const ThemeContext = createContext({
    todoLength: 0,
    // filter: "all",
    filter: 'all',
    headerImage: {} as HeaderImageProps,
    todoList: [] as TodoList[],
    clearCompleted: () => { },
    handleFilter: (filter: string) => { },
    toggleTheme: () => { },
    addTodos: (todo: TodoList) => { },
    deleteTodo: (id: number | string) => { },
    handleActiveTodos: (id: number | string) => { }
})

export const ThemeContextProvider = ThemeContext.Provider;

export default function useThemeContext() {
    return useContext(ThemeContext);
}