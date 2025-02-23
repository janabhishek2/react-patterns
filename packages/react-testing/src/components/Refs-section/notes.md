1. refs are used to get direct access to dom nodes.
2. typical use cases: focus on some input box, scroll to element, detecting outside clicks etc.
3. ref is an mutable object which is maintained across re-renders.
4. initial state of ref can be accessed using ref.current.
5. ref is like useMemo hook on that object. useRef({a: 1}); similar to useMemo(() => ({ a: 1 }), []);