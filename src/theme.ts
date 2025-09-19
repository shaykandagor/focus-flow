// defineConfig - define your custom theme configuration.
// defaultConfig - Chakra’s built-in default theme settings
// createSystem - Combines your custom config with Chakra’s defaults to generate the final theme system.

import {
  createSystem,
  defineConfig,
  defaultConfig,
  mergeConfigs,
} from "@chakra-ui/react";

const customTheme = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          value: {
            base: { value: "#FFFFFF" }, // Light mode
            _dark: { value: "#000000" }, // Dark mode
          },
        },
        secondary: {
          value: {
            base: { value: "#000000" }, // Light mode
            _dark: { value: "#FFFFFF" }, // Dark mode
          },
        },
      },
    },
  },
});

export const system = createSystem(mergeConfigs(defaultConfig, customTheme));
