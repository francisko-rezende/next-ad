"use client";
import { ComponentProps } from "react";

type ButtonProps = {
  color: "green" | "blue";
} & ComponentProps<"button">;

export function Button({ color, ...props }: ButtonProps) {
  const classes =
    color === "blue"
      ? "bg-blue-700 p-2 rounded hover:bg-blue-400 transition-colors"
      : "bg-lime-700 p-2 rounded hover:bg-lime-400 transition-colors";
  return <button className={classes} {...props} />;
}
