1. Re-render means calling a function twice, re-render does not always means updating the UI.
2. Re-render only manipulates DOM when prev state and new states are different.
3. If there is some expensive work in components, then re-render cam be an issue.

1. When to use useReducer: when there are multiple states in the same component. Move all states to common object.
