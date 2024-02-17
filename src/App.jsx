import Heading from "./components/Heading";
import Create from "./components/Create";
import { useState } from "react";

function App() {
  const [headerImage, setHeaderImage] = useState({
    buttonImage: "/images/icon-sun.svg",
    inputColor: "hsl(235, 24%, 19%)",
    inputTextColor:"white",
    color: "hsl(235, 21%, 11%)",
    image: "/images/bg-desktop-dark.jpg",
    toggle: false,
  });

  return (
    <>
      <div style={{ backgroundColor: headerImage.color }} className="h-screen">
        <img
          className="w-full absolute top-0 left-0"
          src={headerImage.image}
          alt="images"
        />
        <div className="absolute top-[20%] left-2/4 transform -translate-x-2/4 -translate-y-3/4 border-red border-3 w-[520px]">
          <Heading headerImage={headerImage} setHeaderImage={setHeaderImage} />
          <Create inputColor={headerImage.inputColor} inputTextColor={headerImage.inputTextColor} />
        </div>
      </div>
    </>
  );
}

export default App;
