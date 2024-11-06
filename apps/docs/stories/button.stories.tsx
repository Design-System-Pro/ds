import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@ds-pro/ds/button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const Hover: Story = {
  args: {
    children: "Hover",
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const Focus: Story = {
  args: {
    children: "Focus",
  },
  parameters: {
    pseudo: {
      focusVisible: true,
    },
  },
};

export const Active: Story = {
  args: {
    children: "Active",
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};
