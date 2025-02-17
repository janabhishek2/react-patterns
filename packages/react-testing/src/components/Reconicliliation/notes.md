1. state-reset: how to reset the state of a uncontrolled componnet after re-render?
2. Use keys: if there is a component and on re-render we display it in an if-else statement then we can use keys to differentiate in React.createElement as type property will be same for both: before and after re-render. We will differentiate using key prop.
3. keys are used while rendering array of elements as well, in case there is any change in order, we can not calculate the correct position without keys.

{
    type: Input, // component
    props: {
        key: "one"
    }
}   