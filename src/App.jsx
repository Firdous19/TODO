import Heading from "./components/Heading";
import Create from "./components/Create";
import { createContext, useState } from "react";
import Footer from "./components/Footer";

const Filter = createContext();
const ClearCompleted = createContext();

function App() {
  const [headerImage, setHeaderImage] = useState({
    buttonImage: "/images/icon-sun.svg",
    inputColor: "hsl(235, 24%, 19%)",
    inputTextColor: "white",
    color: "hsl(235, 21%, 11%)",
    image: "/images/bg-desktop-dark.jpg",
    toggle: false,
  });

  const [noOfTodos, setNoOfTodos] = useState(0);
  const [filter, setFilter] = useState("all");
  const [clearCompleted, setClearCompleted] = useState(false);

  return (
    <>
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
          <Heading headerImage={headerImage} setHeaderImage={setHeaderImage} />
          <ClearCompleted.Provider value={{ clearCompleted, setClearCompleted }}>
            <Filter.Provider value={{ filter, setFilter }}>
              <Create
                setNoOfTodos={setNoOfTodos}
                inputColor={headerImage.inputColor}
                inputTextColor={headerImage.inputTextColor}
              />
              <Footer
                noOfTodos={noOfTodos}
                inputColor={headerImage.inputColor}
                inputTextColor={headerImage.inputTextColor}
              />
            </Filter.Provider>
          </ClearCompleted.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
export { Filter, ClearCompleted };
