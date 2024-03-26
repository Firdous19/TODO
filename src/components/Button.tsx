import React from "react";
import useThemeContext from "../Context/context";

type ButtonProps = {
    children: React.ReactNode,
    activeStyle?: React.CSSProperties,
    onClick?: () => void
}

function Button({ children, onClick }: ButtonProps) {
    const { headerImage } = useThemeContext();
    const { toggle } = headerImage;


    return (
        <button
            // style={activeStyle}
            onClick={onClick}
            className={`sm:text-md custom:text-sm text-gray-500 ${!toggle ? "hover:text-white" : "hover:text-black"} transition-all duration-200`}
        >
            {children}
        </button>
    );
}
export { Button };
