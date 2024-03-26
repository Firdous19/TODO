import { Button } from "./index";
import useThemeContext from "../Context/context";

function Footer() {

    const { headerImage, todoLength, handleFilter, clearCompleted } = useThemeContext();
    const { inputColor, inputTextColor } = headerImage;


    return (
        <>
            <div
                style={{
                    backgroundColor: inputColor,
                    color: inputTextColor,
                }}
                className="flex justify-between align-middle p-3.5 pb-4 rounded-b-md custom1:rounded-none"
            >
                <h4 className="sm:text-md custom:text-sm text-gray-500">
                    {todoLength} items left
                </h4>
                <div className="w-40 flex justify-between align-middle custom1:hidden">
                    <Button onClick={() => handleFilter('all')} >All</Button>
                    <Button onClick={() => handleFilter('active')}>Active</Button>
                    <Button onClick={() => handleFilter('completed')}>Completed</Button>
                </div>
                <div>
                    <Button onClick={clearCompleted}>Clear Completed</Button>
                </div>
            </div>
            <div
                style={{
                    backgroundColor: inputColor,
                    color: inputTextColor,
                }}
                className="p-2 pb-3 rounded-b-md hidden custom1:block"
            >
                <div className="w-40 flex justify-between align-middle mx-auto">
                    <Button onClick={() => handleFilter("all")}>All</Button>
                    <Button onClick={() => handleFilter("active")}>Active</Button>
                    <Button onClick={() => handleFilter("completed")}>Completed</Button>
                </div>
            </div>
        </>
    );
}

export { Footer };
