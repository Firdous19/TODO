
function Heading({ headerImage, setHeaderImage }) {

  function setButton() {
    setHeaderImage((prev) => {
      if (prev.toggle === false) {
        return {
          buttonImage: "/images/icon-moon.svg",
          inputColor: "hsl(0, 0%, 98%)",
          inputTextColor:"hsl(235, 24%, 19%)",
          color: "hsl(236, 33%, 92%)",
          image: "/images/bg-desktop-light.jpg",
          toggle: true,
        };
      } else {
        return {
          buttonImage: "/images/icon-sun.svg",
          inputColor: "hsl(235, 24%, 19%)",
          inputTextColor:"white",
          color: "hsl(235, 21%, 11%)",
          image: "/images/bg-desktop-dark.jpg",
          toggle: false,
        };
      }
    });
  }

  return (
    <div className="flex justify-between align-middle max-w-full py-2 mb-4">
      <h1 className="text-white font-bold text-4xl tracking-[15px]">TODO</h1>
      <div className="flex justify-between align-middle">
        <button onClick={setButton}>
          <img src={headerImage.buttonImage} alt="sun" />
        </button>
      </div>
    </div>
  );
}

export default Heading;
