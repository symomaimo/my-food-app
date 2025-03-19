import React from "react";
import { DiVim } from "react-icons/di";

const Button = ({
    isDisabled = false,
    btnType = "button",
    containerStyle = "",
    textStyle = "",
    title,
    rightIcon,
    handleClick,
  }) => {
    return (
      <button
        disabled={isDisabled?? false}
        type={btnType|| "button"}
        className={`custom-btn ${containerStyle}`}
        onClick={handleClick}
      >
        <span className={`flex-1 ${textStyle}`}>{title}</span>
        {rightIcon && <div className="relative w-6 h-6">{rightIcon}</div>}
      </button>
    );
  };
  
  export default Button;
  
