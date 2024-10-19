/** @type { import('@storybook/react').Preview } */
import Center from '../src/components/stories/Center/Center';
import React from 'react';

const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: (story)=> <Center>{story()}</Center>
};

export default preview;
