import React, { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

function Button({ variant = "primary", ...props }: IButton) {
  return (
    <button
      {...props}
      style={{
        ...props.style,
        backgroundColor: variant === "primary" ? "blue" : "white",
        color: variant === "primary" ? "white" : "black",
        padding: "5px 10px",
        borderRadius: "4px",
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;
