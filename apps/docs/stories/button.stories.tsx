import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@ds-pro/ds/button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
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
export const DefaultDefault: Story = {
  name: "[Default] Default",
  args: {
    children: "Button",
  },
};

export const DefaultHover: Story = {
  name: "[Default] Hover",
  args: {
    children: "Button",
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const DefaultFocus: Story = {
  name: "[Default] Focus",
  args: {
    children: "Button",
  },
  parameters: {
    pseudo: {
      focusVisible: true,
    },
  },
};

export const DefaultActive: Story = {
  name: "[Default] Active",
  args: {
    children: "Button",
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const SmallDefault: Story = {
  name: "[Small] Default",
  args: {
    children: "Button",
    size: "sm",
  },
};

export const SmallHover: Story = {
  name: "[Small] Hover",
  args: {
    children: "Button",
    size: "sm",
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const SmallFocus: Story = {
  name: "[Small] Focus",
  args: {
    children: "Button",
    size: "sm",
  },
  parameters: {
    pseudo: {
      focusVisible: true,
    },
  },
};

export const SmallActive: Story = {
  name: "[Small] Active",
  args: {
    children: "Button",
    size: "sm",
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const LargeDefault: Story = {
  name: "[Large] Default",
  args: {
    children: "Button",
    size: "lg",
  },
};

export const LargeHover: Story = {
  name: "[Large] Hover",
  args: {
    children: "Button",
    size: "lg",
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const LargeFocus: Story = {
  name: "[Large] Focus",
  args: {
    children: "Button",
    size: "lg",
  },
  parameters: {
    pseudo: {
      focusVisible: true,
    },
  },
};

export const LargeActive: Story = {
  name: "[Large] Active",
  args: {
    children: "Button",
    size: "lg",
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};
