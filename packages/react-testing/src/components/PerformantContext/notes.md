1. Context is the way to pass props down without prop drilling by wrapping parent in context provider.
2. It prevents un necessary re-renders when a top level prop changes.
3. only components using that prop will be re-rendered, not the other ones that are part of the tree of nodes.
4. Drawbacks: if any other value in context changes, which is not being used in the consumer, then the consumer will be re-rendered which is not perofmace optimistic. We can not memoise all the values in context.
5. We need to wrap the functions exposed by context in useCallback and objects inside useMemo and consumers have to be wrapped in React.memo.
6. Splitting context: to split data and functions in separate context. So consumers do not re-render when either context changes.
7. we need to use useReducer and pass the dispatch and state via context, to prevent consumers from re-rendering in case any function is re-created. dispatch function wont be re-created so we do not worry about wasted re-renders. 