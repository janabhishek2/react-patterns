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


