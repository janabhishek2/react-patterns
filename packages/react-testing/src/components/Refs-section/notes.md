1. refs are used to get direct access to dom nodes.
2. typical use cases: focus on some input box, scroll to element, detecting outside clicks etc.
3. ref is an mutable object which is maintained across re-renders.
4. initial state of ref can be accessed using ref.current.
5. ref is like useMemo hook on that object. useRef({a: 1}); similar to useMemo(() => ({ a: 1 }), []);
6. diff bw state and ref: refs update synchronously(at the same time) and state updates async.
7. When to use refs: a.Will that value will be used to render a component? b.Will that value be passed as a prop to the component. If both negative, then use ref.
8. refs can be used to count the re-renders.
9. refs are used to store prev state value using usePrevious hook.
10. Always access ref.current inside a useEffect or a callback function. Reason: ref is not mounted instantly, ref.current is accessible when ref is mounted to real dom.
