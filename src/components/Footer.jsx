import { useState } from "react";
import Button from "./Button";
function Footer({ noOfTodos, inputColor, inputTextColor }) {
  return (
    <>
      <div
        style={{
          backgroundColor: inputColor,
          color: inputTextColor,
        }}
        className="flex justify-between align-middle p-3.5 pb-4 rounded-b-md"
      >
        <h4 className="sm:text-md custom:text-sm text-gray-500">
          {noOfTodos} items left
        </h4>
        <div className="w-40 flex justify-between align-middle">
          <Button text="All" />
          <Button text="Active" />
          <Button text="Completed" />
        </div>
        <div>
          <Button text="Clear Completed" />
        </div>
      </div>
    </>
  );
}

export default Footer;
