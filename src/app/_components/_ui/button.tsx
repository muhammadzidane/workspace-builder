"use client";

import { ButtonHTMLAttributes } from "react";

import clsx from "clsx";

type ButtonProps = {
  size?: "large" | "medium" | "small";
  variant?: "default" | "ghost" | "outline";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  className = "",
  size = "medium",
  variant = "default",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "rounded-lg font-medium transition focus:outline-none cursor-pointer";

  const variants = {
    default: "bg-slate-900 text-white hover:bg-slate-800",
    ghost: "text-slate-700 hover:bg-slate-100",
    outline: "border border-slate-300 text-slate-700 hover:bg-slate-100",
  };

  const sizes = {
    large: "px-6 py-3 text-base",
    medium: "px-4 py-2 text-sm",
    small: "px-2 py-1 text-xs",
  };

  return (
    <button
      // eslint-disable-next-line security/detect-object-injection
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  );
};

export default Button;
