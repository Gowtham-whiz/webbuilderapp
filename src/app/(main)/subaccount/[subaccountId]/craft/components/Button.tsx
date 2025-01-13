// components/user/Button.js
import React from "react";
import { Button as MaterialButton } from "@mui/material";

export const Button = ({
  size,
  variant,
  color,
  children,
}: {
  size?: any;
  variant?: any;
  color?: any;
  children?: any;
}) => {
  return (
    <MaterialButton size={size} variant={variant} color={color}>
      {children}
    </MaterialButton>
  );
};
