import React from "react";

const borderRadiusClassMap: Record<string, string> = {
  "rounded-none": "0px",
  "rounded-sm": "2px",
  "rounded": "4px",
  "rounded-md": "6px",
  "rounded-lg": "8px",
  "rounded-xl": "12px",
  "rounded-2xl": "16px",
  "rounded-3xl": "24px",
  "rounded-full": "9999px",
};

type BorderRadiusProps = {
  borderRadius?: string;
};

const BorderRadius: React.FC<BorderRadiusProps> = (props) => {
  const borderRadiusValue = borderRadiusClassMap[props.borderRadius || "rounded-none"];

  return (
    <div>
      <div
        style={{
          height: "100px",
          width: "100px",
          borderRadius: borderRadiusValue,
          backgroundColor: "orange",
        }}
      ></div>
    </div>
  );
};

export default BorderRadius;
