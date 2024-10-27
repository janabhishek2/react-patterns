/** @type { import('@storybook/react-webpack5').StorybookConfig } */
import "@storybook/addon-console";
import "@storybook/addon-docs";
import "@storybook/addon-actions";

const config = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        "@storybook/addon-docs",
        "@storybook/addon-actions"
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
};
export default config;

// config for storybook (addons/where to find stories etc)..