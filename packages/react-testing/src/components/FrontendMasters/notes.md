Promises:

Callback: A function passed in another function as a argument.
JS is single threaded, browser is multi-threaded. TO perform any async work, js handles the code to browser web api, which returns data in task queue, then js thread picks it from queue.
Synchronous: When code is executed line by line to the end. ( order is fixed )
Async: Code will be processed later in time. ( no order is guaranteed );
Callbacks benefits: We can have async behaviour with pure js.
Cons of callbacks: Sometimes user forgets to call the callback and callback hell.
SetTimeout does not guarantee that code will be run after x sec, it will only be pushed to task queue after x sec.
Promises are used to handle callbacks gracefully.
Promises have 2 phases: creation and consumption.
In creation phase we specify the async task ( contract ) in the function and upon either call resolve / reject if that task was completed.
In consumption phase: we consume promise using then/catch to handle the resolved or rejected states.
Creating a promise class : maintain states, implement then, catch, finally. Resolve and reject are internal fns which change internal states of promise from pending to resolved/rejected. When resolve is called, then call the then callbacks.
A then block returns a resolved promise.!
Promise.all([p1,p2]) resolves all promises in async way. Max time: max time among all promises


Promise.all
1. all method runs all promises in async fashion and when all promises are resolved, it returns a promise which resolves to an array of values containing resolved values in the order as was provided during calling the resolve method.
2. if any promise fails, then returned promise is rejected.

Promise.allSettled
1. Returns a promise containing resolved array, having object with properties status, value, reason to indicate if promise was resolved, rejected and what is the value/reject reason/err.

Throttling

WeakMaps/WeakSets/Sets/Maps
1. Set is used to story items of any type ( arr | obj | primitives);
2. Map is used to store key value pairs. Both set and map are iterable.
3. WeakMap is used to store weak reference to object, if any object references are deleted from outside, it will be deleted inside weakmap as well. We can not iterate over the objects in real time.
4. Similar for ws.

React.memo and re-renders
1. We can prevent re-renders by separating concerns for components ( not calling non-prop-changing components in the same file ): move all state changing components to one file and rest to other.
2. Child-pattern to prevent re-render: Pass the component which needs not to be re-rendered via children prop from parent.

React.useState polyfill
1. use useReducer to re-render if state changes.
2. maintain states and hookIndex to track re-renders

useId
1. use useId hook to provide a unique id.
2. not to be used in functions/loops etc.

Portals
1. Used to teleport a component to a specific place in the DOM.
2. createportal(jsx, document.body);

Higher order function
1. A function which takes another function as argument or which returns a function or both.
2. Examples: array map, filter, reduce, forEach etc.
3. Useful for extension of a regular function. (example map is used to extend a callback function to return a new array of items based on a conversion callback fn.)

Higer order component
1. Higher order component takes an existing component as props and returns a new component.

