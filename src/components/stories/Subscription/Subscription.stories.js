import React from 'react';
import { Medium as MediumInputBox } from '../Inputbox/Inputbox.stories';
import { Primary as PrimaryButton } from '../Button/Button.stories';

export default {
    title: "SubscriptionS",
};

export const PrimarySubscription = () => {
    return (<>
        <MediumInputBox />
        <PrimaryButton>
            Click me to subscribe !
        </PrimaryButton>
    </>)
}