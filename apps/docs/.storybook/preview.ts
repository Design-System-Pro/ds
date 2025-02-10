import "@ds-pro/ds/globals.css";

import type { Preview } from "@storybook/react";
import type { Decorator } from "@storybook/react";
import { IFrameStorybook } from "./iframe-storybook";

const preview: Preview = {
  parameters: {},
};

export const decorators: Decorator[] = [IFrameStorybook];
export default preview;
