/** @type { import('@storybook/react').Preview } */
import Center from '../src/components/stories/Center/Center';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { withConsole } from '@storybook/addon-console';

const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [(story)=> {
        return (
            story()
        )
    },(storyFn, context) => withConsole()(storyFn)(context)]
};

export default preview;

// config for individual stories.. (decorators)