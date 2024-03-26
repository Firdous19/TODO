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
    handleFilter: () => { },
    toggleTheme: () => { },
    addTodos: () => { },
    deleteTodo: () => { },
    handleActiveTodos: () => { }
})

export const ThemeContextProvider = ThemeContext.Provider;

export default function useThemeContext() {
    return useContext(ThemeContext);
}