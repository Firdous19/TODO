import React from "react"
import useThemeContext from "../Context/context"


type HeaderProps = {
    headerImage: {
        buttonImage: string,
        inputColor: string,
        inputTextColor: string,
        color: string,
        image: string,
        toggle: boolean,
    },
}

export function Header({ headerImage }: HeaderProps) {

    const { toggleTheme } = useThemeContext();

    return (
        <div className="flex justify-between align-middle max-w-full py-2 mb-4">
            <h1 className="text-white font-bold text-4xl tracking-[15px]">TODO</h1>
            <div className="flex justify-between align-middle">
                <button onClick={toggleTheme}>
                    <img src={headerImage.buttonImage} alt="sun" />
                </button>
            </div>
        </div>
    )
}