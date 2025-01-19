import { Meta, StoryObj } from "@storybook/react";
import Spacing, { spacingClassMap } from "../Spacing/Spacing.tsx";  // Ensure the import path is correct

const meta: Meta<typeof Spacing> = {
  component: Spacing,
  title: "Foundations/Spacing",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Utilities for controlling spacing (margin, padding and gap) of an element.

#### Usage
\`\`\`jsx
<div class="spacing-4 ..."></div>
<div class="spacing-16 ..."></div>
<div class="spacing-40 ..."></div>
\`\`\`

#### Options
${Object.entries(spacingClassMap)
  .map(([key, value]) => `- **${key}**: ${value}`)
  .join("\n")}
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    spacing: {
      control: "select",
      options: Object.keys(spacingClassMap),
    },
  },
};

export default meta;

export const Playground: StoryObj<typeof Spacing> = {
  args: {
    spacing: "spacing-4",
  },
};