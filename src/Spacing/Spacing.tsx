import React from "react";

export const spacingClassMap: Record<string, string> = {
  "spacing-0": "0px",
  "spacing-px": "1px",
  "spacing-0.5": "2px",
  "spacing-1": "4px",
  "spacing-1.5": "6px",
  "spacing-2": "8px",
  "spacing-2.5": "10px",
  "spacing-3": "12px",
  "spacing-3.5": "14px",
  "spacing-4": "16px",
  "spacing-5": "20px",
  "spacing-6": "24px",
  "spacing-7": "28px",
  "spacing-8": "32px",
  "spacing-9": "36px",
  "spacing-10": "40px",
  "spacing-11": "44px",
  "spacing-12": "48px",
  "spacing-14": "56px",
  "spacing-16": "64px",
  "spacing-20": "80px",
  "spacing-24": "96px",
  "spacing-28": "112px",
  "spacing-32": "128px",
  "spacing-36": "144px",
  "spacing-40": "160px",
  "spacing-44": "176px",
  "spacing-48": "192px",
  "spacing-52": "208px",
  "spacing-56": "224px",
  "spacing-60": "240px",
  "spacing-64": "256px",
  "spacing-72": "288px",
  "spacing-80": "320px",
  "spacing-96": "384px",
};

type SpacingProps = {
  spacing?: string;
};

const Spacing: React.FC<SpacingProps> = (props) => {
  const spacingValue = spacingClassMap[props.spacing || "spacing-0"];

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection:"row",
          gap: spacingValue,
        }}
      >
        <div
          style={{
            height: "100px",
            width: "100px",
            backgroundColor: "orange",
          }}
        ></div>
        <div
          style={{
            height: "100px",
            width: "100px",
            backgroundColor: "orange",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Spacing;
