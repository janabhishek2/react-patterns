/** @type { import('@storybook/react').Preview } */
import Center from '../src/components/stories/Center/Center';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: (story)=> {
        return (
            <ChakraProvider>
                {story()}
            </ChakraProvider>
        )
    }
};

export default preview;
