1. Re-render means calling a function twice, re-render does not always means updating the UI.
2. Re-render only manipulates DOM when prev state and new states are different.
3. If there is some expensive work in components, then re-render cam be an issue.

1. When to use useReducer: when there are multiple states in the same component. Move all states to common object.
2. useReducer takes 2 args: one reducer function, and initial state of object.
3. reducer fn: a function which takes 2 args: prevState, nextState and returns updated state (new object) based on the checks.
4. useReducer works similar to useState: just for keeping all variables in an object, we are using it ( instead of multiple setState calls).

HOOKS
1. Hook is a function which lets you use reacts state and lifecycle features from a functional component.
2. We have to use react built in methods setState() etc to trigger re-render of UI using reactive variables. Directly changing vars wont work.

useSyncExternalStore
1. Sometimes we need to sync external store data, browser api with react state.
2. useSyncExternalStore takes as args 2 paramss.
3. subscribe fn: which takes in a notify function param which needs to be triggered when something inside store changes!!. Set it to a listener variable.
4. getStoreDataFn: this fn returns the current store data.
5. Whenever listener is called state changes and component re-render.

useState
1. setter function without prev function call always use the initial render value of component
2. setter function with prev function call update: uses value returned by prev setState: and uses it to set new value within one render.
3. Conditional rendering: always pass boolean, not numbers 0/1 to indicate true/false
4. useEffect: is called when componennt is mounted + is scheduled.
5. useEffect of child gets executed first; then parents' effect is called.

pure function
1. A function which returns same output for same inpiut
2. function which does not use any outer variables is a pure func.
3. pure functions make code testable and predicatable.

useEffect
1. effect: when we want to communicate with outer world as compared to react.
2. Examples: api call, socket connection, browser storage, local storage, addEventListener etc.
3. 3 modes of useEffect: do not use with no deps array/emoty deps array.
4. useEffect without params: runs on first render, run the return callback and then effect function on subsequent renders.
5. useEffect with query params: runs effect on subsequent renders.

Coding conventions:
1. imports: 3rd party libs, utils, constants, styles.
2. inside function: redux, useState calls, custom hooks, useEffect calls ( all arranged in one line ), functions, vars derived from state.

useEffect tips:
1. First: component is mounted, then effect runs.
2. When state/props change, when Component mounts/unmounts.
3. use primitive values in useEffect deps array, as using reference values ( like objects, functions ) will always run the callback inside effect unless it is wrapped in useCallback etc.
4. To reset all states of a child component do not use useEffect, use the key prop from parent component.
5. For connecting to external data source like document, localstorage etc; use syncExternalStore hook.
6. For api calls: create a custom hook / use 3rd party libs to create custom hooks and use in components. (reason: react 18 mount/unmount and then mount component  in dev mode, also components should have visual logic only.)

React dev tools
1. 2 sections: components and profiler.
2. component helps to debug the various components that cause the dom to render.
3. profiler helps to deubug each render using flamegraph and ranked chart.

Promise.all polyFill
1. Promise.all is used to run all promises in async fashion, returns a promise, when all the promises are resolved, then the returned promise gets resolved, if one of them fails the returned promise is rejected.
