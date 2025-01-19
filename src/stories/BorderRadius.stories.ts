import { Meta, StoryObj } from "@storybook/react";
import borderRadius from "../BorderRadius/BorderRadius.tsx";

const meta: Meta<typeof borderRadius> = {
  component: borderRadius,
  title: "Foundations/Border Radius",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Utilities for controlling the border radius of an element.

#### Usage
\`\`\`jsx
<div class="rounded ..."></div>
<div class="rounded-md ..."></div>
<div class="rounded-lg ..."></div>
<div class="rounded-full ..."></div>
\`\`\`

#### Options
- **rounded-none**: No border radius (0px)
- **rounded-sm**: Small border radius (2px)
- **rounded**: Default border radius (4px)
- **rounded-md**: Medium border radius (6px)
- **rounded-lg**: Large border radius (8px)
- **rounded-xl**: Extra large border radius (12px)
- **rounded-2xl**: Double extra large border radius (16px)
- **rounded-3xl**: Triple extra large border radius (24px)
- **rounded-full**: Full circle border radius (9999px)
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    borderRadius: {
      control: "select",
      options: [
        "rounded-none",
        "rounded-sm",
        "rounded",
        "rounded-md",
        "rounded-lg",
        "rounded-xl",
        "rounded-2xl",
        "rounded-3xl",
        "rounded-full",
      ],
    },
  },
};

export default meta;

export const RoundedNone: StoryObj<typeof borderRadius> = {
  args: {
    borderRadius: "rounded-none",
  },
};

export const RoundedSm: StoryObj<typeof borderRadius> = {
  args: {
    borderRadius: "rounded-sm",
  },
};

export const Rounded: StoryObj<typeof borderRadius> = {
  args: {
    borderRadius: "rounded",
  },
};

export const RoundedMd: StoryObj<typeof borderRadius> = {
  args: {
    borderRadius: "rounded-md",
  },
};

export const RoundedLg: StoryObj<typeof borderRadius> = {
  args: {
    borderRadius: "rounded-lg",
  },
};

export const RoundedXl: StoryObj<typeof borderRadius> = {
  args: {
    borderRadius: "rounded-xl",
  },
};

export const Rounded2xl: StoryObj<typeof borderRadius> = {
  args: {
    borderRadius: "rounded-2xl",
  },
};

export const Rounded3xl: StoryObj<typeof borderRadius> = {
  args: {
    borderRadius: "rounded-3xl",
  },
};

export const RoundedFull: StoryObj<typeof borderRadius> = {
  args: {
    borderRadius: "rounded-full",
  },
};
