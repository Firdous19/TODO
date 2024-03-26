import { useEffect, useState } from "react";
import { Header, Create, Footer } from "./components/index"
import { ThemeContextProvider } from "./Context/context"
import { TodoList } from "./Context/context";
import { Todos } from "./components/Todos";

function App() {

  const [headerImage, setHeaderImage] = useState({
    buttonImage: "/images/icon-sun.svg",
    inputColor: "hsl(235, 24%, 19%)",
    inputTextColor: "white",
    color: "hsl(235, 21%, 11%)",
    image: "/images/bg-desktop-dark.jpg",
    toggle: false,
  });
  const [todoList, setTodoList] = useState([] as TodoList[]);
  const [todoLength, setTodoLength] = useState(0);
  const [filter, setFilter] = useState('all');

  function toggleTheme() {
    setHeaderImage((prev) => {
      return {
        toggle: !prev.toggle,
        buttonImage: prev.toggle ? "/images/icon-sun.svg" : "/images/icon-moon.svg",
        inputColor: prev.toggle ? "hsl(235, 24%, 19%)" : "hsl(0, 0%, 98%)",
        inputTextColor: prev.toggle ? "white" : "hsl(235, 21%, 11%)",
        color: prev.toggle ? "hsl(235, 21%, 11%)" : "hsl(0, 0%, 98%)",
        image: prev.toggle ? "/images/bg-desktop-dark.jpg" : "/images/bg-desktop-light.jpg",
      };
    });
    localStorage.setItem("theme", JSON.stringify(headerImage.toggle));
  }

  function addTodos(todo: TodoList) {
    setTodoList([...todoList, todo]);
  }

  function setNoOfTodos() {
    setTodoLength(todoList.length);
  }

  function deleteTodo(id: number | string) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  function handleActiveTodos(id: number | string) {
    setTodoList((prev) => {
      return prev.map((prevTodo) => {
        return prevTodo.id === id ? ({ ...prevTodo, completed: !prevTodo.completed }) : prevTodo
      })
    })
  }

  function clearCompleted() {
    setTodoList(todoList.filter((todo) => !todo.completed));
  }


  function handleFilter(filter: string) {
    setFilter(filter);
    console.log(filter);
  }

  useEffect(() => {
    setNoOfTodos();
    // localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("theme") as string);
    // console.log(theme);
    if (theme !== null) {
      setHeaderImage({
        toggle: theme,
        buttonImage: theme ? "/images/icon-sun.svg" : "/images/icon-moon.svg",
        inputColor: theme ? "hsl(235, 24%, 19%)" : "hsl(0, 0%, 98%)",
        inputTextColor: theme ? "white" : "hsl(235, 21%, 11%)",
        color: theme ? "hsl(235, 21%, 11%)" : "hsl(0, 0%, 98%)",
        image: theme ? "/images/bg-desktop-dark.jpg" : "/images/bg-desktop-light.jpg",
      }
      );
    }

  }, []);

  return (
    <>
      <ThemeContextProvider value={{ headerImage, todoLength, todoList, filter, toggleTheme, addTodos, deleteTodo, handleActiveTodos, handleFilter, clearCompleted }}>
        <div
          style={{ backgroundColor: headerImage.color }}
          className="h-screen overflow-auto overflow-x-hidden"
        >
          <div
            style={{
              background: `url(${headerImage.image}) no-repeat center/cover`,
              width: "100vw",
              height: "40vh",
            }}
          ></div>
          <div className="sm:w-[520px] w-[90%]" style={{ margin: "-200px auto" }}>
            <Header headerImage={headerImage} />
            <Create />
            <Todos />
            <Footer />
          </div>
        </div>
      </ThemeContextProvider >
    </>
  )
}


export default App
