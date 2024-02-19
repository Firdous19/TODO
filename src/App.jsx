import Heading from "./components/Heading";
import Create from "./components/Create";
import { useState } from "react";
import Footer from "./components/Footer";
import Todos from "./components/Todos";

function App() {
  const [headerImage, setHeaderImage] = useState({
    buttonImage: "/images/icon-sun.svg",
    inputColor: "hsl(235, 24%, 19%)",
    inputTextColor: "white",
    color: "hsl(235, 21%, 11%)",
    image: "/images/bg-desktop-dark.jpg",
    toggle: false,
  });

  return (
    <>
      <div
        style={{ backgroundColor: headerImage.color }}
        className="h-screen overflow-auto overflow-x-hidden"
      >
        <div
          style={{
            background: `url(${headerImage.image}) no-repeat center/cover`,
            backgroundSize: "cover",
            width: "100vw",
            height: "40vh",
          }}
        ></div>
        {/* <img className="w-full" src={headerImage.image} alt="images" /> */}
        <div className="sm:w-[520px] w-[90%]" style={{ margin: "-200px auto" }}>
          <Heading headerImage={headerImage} setHeaderImage={setHeaderImage} />
          <Create
            inputColor={headerImage.inputColor}
            inputTextColor={headerImage.inputTextColor}
          />
          {/* <Todos
            inputColor={headerImage.inputColor}
            inputTextColor={headerImage.inputTextColor}
          /> */}
          <Footer
            inputColor={headerImage.inputColor}
            inputTextColor={headerImage.inputTextColor}
          />
        </div>
      </div>
    </>
  );
}

export default App;
