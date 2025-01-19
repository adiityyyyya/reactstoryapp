import { Meta, StoryObj } from "@storybook/react";
import Shadow from "../Shadow/Shadow.tsx";

const meta: Meta<typeof Shadow> = {
  component: Shadow,
  title: "Foundations/Box Shadow",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Utilities for controlling the box shadow of an element.

#### Usage
\`\`\`jsx
<div class="shadow ..."></div>
<div class="shadow-md ..."></div>
<div class="shadow-lg ..."></div>
<div class="shadow-inner ..."></div>
\`\`\`

#### Options
- **shadow-sm**: Small shadow
- **shadow**: Default shadow
- **shadow-md**: Medium shadow
- **shadow-lg**: Large shadow
- **shadow-xl**: Extra large shadow
- **shadow-2xl**: Double extra large shadow
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    boxShadow: {
      control: "select",
      options: [
        "shadow-sm",
        "shadow",
        "shadow-md",
        "shadow-lg",
        "shadow-xl",
        "shadow-2xl",
      ],
    },
  },
};

export default meta;


export const ShadowSm: StoryObj<typeof Shadow> = {
  args: {
    boxShadow: "shadow-sm",
  },
};

export const Shadoww: StoryObj<typeof Shadow> = {
  args: {
    boxShadow: "shadow",
  },
};

export const ShadowMd: StoryObj<typeof Shadow> = {
  args: {
    boxShadow: "shadow-md",
  },
};

export const ShadowLg: StoryObj<typeof Shadow> = {
  args: {
    boxShadow: "shadow-lg",
  },
};

export const ShadowXl: StoryObj<typeof Shadow> = {
  args: {
    boxShadow: "shadow-xl",
  },
};

export const Shadow2xl: StoryObj<typeof Shadow> = {
  args: {
    boxShadow: "shadow-2xl",
  },
};