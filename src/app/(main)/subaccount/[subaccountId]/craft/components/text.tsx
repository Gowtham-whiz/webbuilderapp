// components/user/Text.js
import React from "react";

export const Text = ({ text, fontSize }: { text: any; fontSize: any }) => {
  return (
    <div>
      <p style={{ fontSize }}>{text}</p>
    </div>
  );
};
