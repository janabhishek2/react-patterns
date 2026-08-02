# JavaScript Polyfills & Internals — Revision Notes

Quick-revision guide for every file in this folder. Grouped by theme. Each entry gives the **concept**, the **implementation strategy**, and **gotchas / interview points** so you can recall the approach fast.

> These files re-implement built-in JS features from scratch (polyfills) plus a few browser-internals demos (event loop, web workers, AbortController). Great for frontend interview prep.

---

## Contents

**Array method polyfills**
1. [`Array.prototype.map`](#1-arrayprototypemap) — `polyfill-map.js`, `polyfill-map1.js`, `polyfill-map-final.js`
2. [`Array.prototype.filter`](#2-arrayprototypefilter) — `polyfill-filter-1.js`
3. [`Array.prototype.reduce`](#3-arrayprototypereduce) — `polyfill-reduce.js`
4. [`Array.prototype.slice`](#4-arrayprototypeslice) — `polyfill-slice.js`
5. [`Array.prototype.flat`](#5-arrayprototypeflat) — `polyfill-array-flat.js`

**Function / object internals**
6. [`Function.prototype.bind`](#6-functionprototypebind) — `polyfill-bind.js`
7. [`Function.prototype.call`](#7-functionprototypecall) — `polyfill-call.js` (stub)
8. [`new` operator](#8-new-operator) — `polyfill-new.js`
9. [`Object.create`](#9-objectcreate) — `polyfill-object-create.js`
10. [`this` binding / `Timer`](#10-this-binding--timer) — `functions.js`

**Timers**
11. [`setTimeout`](#11-settimeout) — `polyfill-setTimeout.js`
12. [`setInterval`](#12-setinterval) — `polyfill-setInterval.js`

**Promises**
13. [Promise polyfill (full)](#13-promise-polyfill-full) — `promises-polyfill.js`
14. [Promise polyfill (basic)](#14-promise-polyfill-basic) — `interview-prep.js`
15. [Native promise chaining demo](#15-native-promise-chaining-demo) — `test.js`

**Async control & concurrency**
16. [AbortController + cancellable promise](#16-abortcontroller--cancellable-promise) — `abort-controller.js`, `abort-controller1.js`
17. [Debounce](#17-debounce) — `polyfill-debounce.js`
18. [Event loop / `requestAnimationFrame`](#18-event-loop--requestanimationframe) — `polyfill-event-loop.js`
19. [Web Workers](#19-web-workers) — `worker.js`, `workers-practical.js`

**Harness**
20. [`index.html`](#20-indexhtml) — the runner page

---

## Array method polyfills

### 1. `Array.prototype.map`
**Files:** `polyfill-map.js` (v1), `polyfill-map1.js` (v2, standalone), `polyfill-map-final.js` (v3, final)

**Concept:** `map` returns a new array where each element is transformed by a callback.

**Strategy across the three versions:**
- **v1 (`polyfill-map.js`)** — simplest: create `newArr`, `forEach` over `this`, push `cb(item)`. Attached as `customMap`.
- **v2 (`polyfill-map1.js`)** — standalone `myMap(arr, cb, thisArg)`; calls `cb.call(thisArg, item, i, arr)` to pass **all three** map args (item, index, array) and honour `thisArg`. Works on array-like objects (`{length, 0, 1}`).
- **v3 (`polyfill-map-final.js`)** — the "correct" version: pre-sizes `new Array(this.length)`, walks with a `while` loop, and uses `Object.hasOwn(this, k)` to **skip holes in sparse arrays** (preserving index positions). Invoked via `.call` on an array-like.

**Interview points:**
- Real `map` preserves sparse holes → the `Object.hasOwn` guard.
- Callback receives `(value, index, array)`.
- Result length equals source length.

---

### 2. `Array.prototype.filter`
**File:** `polyfill-filter-1.js`

**Concept:** Return a new array containing only elements for which the callback is truthy.

**Strategy:** `while` loop over indices; `Object.hasOwn(this, k)` skips sparse holes; push `this[k]` only when `callbackFn(this[k])` is truthy.

**Interview point:** Demonstrated on a sparse array `[1,2,3,,4,,,5]` → holes are ignored, not treated as `undefined`.

---

### 3. `Array.prototype.reduce`
**File:** `polyfill-reduce.js`

**Concept:** Fold an array into a single accumulated value.

**Strategy:**
- Throw on empty array (matches native behaviour when no init value).
- If `init` given → start acc = `init`, index 0. Else → start acc = `this[0]`, index 1.
- Loop, `reducedValue = callbackFn(reducedValue, this[k])`, skipping sparse holes with `Object.hasOwn`.

**Gotcha (bug to note):** `const initialValue = init || this[0]` uses `||`, so a **falsy valid init** like `0` or `""` is wrongly ignored. Native uses `arguments.length` to detect whether init was passed. Worth fixing for correctness.

---

### 4. `Array.prototype.slice`
**File:** `polyfill-slice.js`

**Concept:** Return a shallow copy of a portion `[start, end)`; supports negative indices.

**Strategy:**
- Default `end` to length; clamp `end` to length if too large.
- Normalise negative `start`/`end` by adding `length` until non-negative.
- Copy `[start, end)` into a new array, skipping sparse holes.

**Gotchas:**
- `if(!startIndex && !endIndex)` treats `slice(0)` as "no args" because `0` is falsy — edge case bug.
- `startIndex % arrLength` is a non-standard twist; native `slice` clamps rather than wraps with modulo.

---

### 5. `Array.prototype.flat`
**File:** `polyfill-array-flat.js`

**Concept:** Flatten a nested array up to a given `depth` (default effectively infinite here = 100).

**Strategy:** **Recursion.** For each item: if it's an array and `depth > 0`, recurse with `depth-1` and spread the result; else push the item as-is.

**Bonus trick (in comments):** `arr.toString().split(",").map(Number)` fully flattens — but it stringifies everything and loses types, so it only works for clean numeric arrays.

---

## Function / object internals

### 6. `Function.prototype.bind`
**File:** `polyfill-bind.js`

**Concept:** `bind` returns a new function permanently bound to a given `this` and preset args.

**Strategy:** `myBind(thisArg, ...args)` returns a closure that calls the original function with `thisArg`.

**Gotcha (bug):** The returned function uses `this.call(...)` — it should be `self.call(thisArg, ...args)` where `self = this` (the original function). As written, `this` inside the returned function isn't the bound function. Also it doesn't `return` the result or merge later-passed args. Good "spot the bug" example.

---

### 7. `Function.prototype.call`
**File:** `polyfill-call.js`

**Status:** **Stub / near-empty** (single line). Intended to implement `call` by attaching the function as a temporary property on `thisArg`, invoking it, then deleting it. Not yet implemented.

---

### 8. `new` operator
**File:** `polyfill-new.js`

**Concept:** Replicate what `new Constructor(...args)` does under the hood.

**Strategy (`myNew`):**
1. Create a fresh empty object.
2. Build a prototype object carrying `constructor` + all keys copied from `Constructor.prototype`.
3. `Object.setPrototypeOf(obj, proto)` to wire the prototype chain.
4. `Constructor.call(obj, ...args)` to run the constructor with `this = obj`.
5. Return the object.

**Interview points:** The four things `new` does — create object, link prototype, bind `this`, return object (unless the constructor returns its own object). *(Simpler idiomatic version: `Object.create(Constructor.prototype)` instead of copying keys manually.)*

---

### 9. `Object.create`
**File:** `polyfill-object-create.js`

**Concept:** Create a new object with a specified prototype and optional property descriptors.

**Strategy (`myCreate`):** New object → `Object.defineProperties(newObj, properties)` for the descriptor map → `Object.setPrototypeOf(newObj, proto)`.

**Interview point:** Second arg uses **property descriptors** (`{ value, writable, enumerable, configurable }`), not plain values — hence `{ newValue: { value: "Abcd" } }`.

---

### 10. `this` binding / `Timer`
**File:** `functions.js`

**Concept:** Demonstrates arrow-function `this` capture inside a constructor + prototype method.

**Strategy:** `Timer` increments `this.seconds` in a `setInterval`; `getSeconds` is defined as an **arrow** on the prototype so it captures the enclosing `this`. An outer interval logs the value every 4s.

**Interview point:** Arrow functions don't get their own `this` → they inherit it lexically. That's why the arrow-based `getSeconds` correctly sees the instance's `seconds`.

---

## Timers

### 11. `setTimeout`
**File:** `polyfill-setTimeout.js`

**Concept:** Re-implement `setTimeout` / `clearTimeout` without using the native timer.

**Strategy:**
- Maintain a global `window.timeouts` queue of `{ id, exec, args, interval, timeToRun }`.
- `mySetTimeout` assigns an incrementing id, computes `timeToRun = Date.now() + interval`, pushes, and starts polling.
- `runCallbacks` checks each entry: if `Date.now() >= timeToRun` → execute + clear it; else re-schedule the poll via `requestIdleCallback`.
- `clearMyTimeout(id)` filters the entry out of the queue.

**Interview point:** Shows that timers are just a **task queue polled against the clock** — the browser fires callbacks when due, not exactly on time.

---

### 12. `setInterval`
**File:** `polyfill-setInterval.js`

**Concept:** Same idea as above but the callback re-arms itself repeatedly.

**Strategy:** Store interval descriptors; `runCallback` fires `exec` when due, resets `timeToRun = Date.now() + interval`, and re-schedules itself via `requestIdleCallback` so it keeps looping. `myClearInterval(id)` removes it from `window.myIntervals`.

**Gotcha (bug):** Typos mix `window.myIntervals` and `window.myIntevals` (missing `r`), so the store isn't consistent — note this if reusing.

---

## Promises

### 13. Promise polyfill (full)
**File:** `promises-polyfill.js` — **the most complete implementation**

**Concept:** A spec-flavoured `MyPromise` with proper states, microtask scheduling, and chaining.

**Strategy:**
- Private fields: `#value`, `#state` (`pending → resolved | rejected`), `#thenCbs`, `#catchcbs`.
- Constructor runs the executor in a `try/catch`; a throw triggers `#onFail`.
- `#onSuccess` / `#onFail` are **state-guarded** (only transition from `pending`) — a promise settles once.
- `#runCallbacks` flushes queued callbacks inside **`queueMicrotask`** → mirrors real async timing (microtask queue).
- `then` returns a **new MyPromise**, wiring the child's resolve to `thenCb(value)`'s result → enables chaining.
- `catch` = `then(undefined, catchCb)`.
- Static `MyPromise.resolve` / `MyPromise.reject`.

**Interview points:** three states + one-way transition, microtask semantics, and `then` returning a new promise for chaining.

---

### 14. Promise polyfill (basic)
**File:** `interview-prep.js`

**Concept:** A minimal, synchronous first-cut `MyPromise` — the "explain the idea" version.

**Strategy:** Stores `thenCallbacks` / `catchCallbacks`; `resolve` stores the value and invokes queued `then` callbacks; `then` registers a callback then calls `resolve()`.

**Limitations vs the full version (good to articulate):** no state machine, no microtask (runs synchronously), no chaining, `then` before `resolve` timing is fragile. This is the file `index.html` currently loads.

---

### 15. Native promise chaining demo
**File:** `test.js`

**Concept:** Baseline sanity check using the **real** `Promise` to show `.then` chaining and value propagation (`return 1` flows into the next `.then`). Reference for what the polyfills should reproduce.

---

## Async control & concurrency

### 16. AbortController + cancellable promise
**Files:** `abort-controller.js`, `abort-controller1.js`

**Concept:** Cancel an in-flight async operation using the standard `AbortController` / `AbortSignal`.

**Strategy:**
- `abort-controller.js` — wraps a `setTimeout` in a promise; if `signal.aborted` already, reject immediately; otherwise listen for the `"abort"` event → `clearTimeout` + reject. Calling `controller.abort()` cancels it.
- `abort-controller1.js` — practical `fetch(url, { signal })` demo; passing the signal lets an outstanding request be aborted.

**Interview points:** `signal.aborted`, the `"abort"` event, and passing `signal` into `fetch`. *(Bug in `abort-controller1.js`: `data = data` is self-assignment — the outer `data` never gets set due to shadowing.)*

---

### 17. Debounce
**File:** `polyfill-debounce.js`

**Concept:** Delay running a function until input stops for `interval` ms — classic search-box optimisation.

**Strategy:** Closure holds a `timeoutId`; each call `clearTimeout`s the previous one and schedules a fresh `setTimeout`. Only the last call within the window actually fires.

**Interview point:** Debounce (wait for a pause) vs throttle (run at most once per interval) — know the difference. Wired to an input's `"input"` event here.

---

### 18. Event loop / `requestAnimationFrame`
**File:** `polyfill-event-loop.js`

**Concept:** Demonstrates paint timing / event-loop ordering.

**Strategy:** Sets `box` color red → schedules a `requestAnimationFrame` to set it black → immediately sets it blue. Because synchronous code runs first and only the **final** style before paint matters, the box renders **blue**; the rAF callback (black) runs before the next repaint.

**Interview point:** Synchronous code → microtasks → rAF (just before paint) → paint. The browser only paints the last committed style per frame.

---

### 19. Web Workers
**Files:** `worker.js` (the worker), `workers-practical.js` (main thread)

**Concept:** Run a heavy CPU computation off the main thread so the UI stays responsive.

**Strategy:**
- `worker.js` — `self.onmessage` runs a huge loop (`17^8` iterations) then `postMessage`s the result.
- `workers-practical.js` — creates the worker, wires two buttons: one toggles a body class (proves the UI is **not blocked** while the worker computes), one posts a message to start the computation; `worker.onmessage` appends the result to the DOM.

**Interview points:** Workers run in a separate thread, communicate via `postMessage` / `onmessage` (structured-clone, no shared memory by default), and can't touch the DOM directly.

---

## Harness

### 20. `index.html`
The runner page. Contains a `#box` element (used by the event-loop demo) and loads **`interview-prep.js`** via `<script>`. Swap the `src` to run a different file in the browser (e.g. uncomment the `polyfill-event-loop.js` line, or point it at `promises-polyfill.js`).

---

## Quick Recall Cheat-Sheet

| File | Re-implements | Key trick |
|---|---|---|
| `polyfill-map*.js` | `Array.map` | new array, `cb(value,i,arr)`, skip holes |
| `polyfill-filter-1.js` | `Array.filter` | push when `cb` truthy, skip holes |
| `polyfill-reduce.js` | `Array.reduce` | acc + init handling (watch `||` bug) |
| `polyfill-slice.js` | `Array.slice` | negative-index normalisation |
| `polyfill-array-flat.js` | `Array.flat` | recursion with `depth-1` |
| `polyfill-bind.js` | `Function.bind` | return closure (has `self`/`this` bug) |
| `polyfill-new.js` | `new` | create → link proto → `call` → return |
| `polyfill-object-create.js` | `Object.create` | `defineProperties` + `setPrototypeOf` |
| `polyfill-setTimeout.js` | `setTimeout` | queue polled vs `Date.now()` |
| `polyfill-setInterval.js` | `setInterval` | self-rearming poll loop |
| `promises-polyfill.js` | `Promise` (full) | states + `queueMicrotask` + chaining |
| `interview-prep.js` | `Promise` (basic) | callback arrays, synchronous |
| `abort-controller*.js` | cancellation | `signal` + `"abort"` event |
| `polyfill-debounce.js` | debounce | clear + reschedule timer |
| `polyfill-event-loop.js` | paint timing | rAF vs sync style writes |
| `worker.js` / `workers-practical.js` | Web Workers | `postMessage` / `onmessage` |

---

## Recurring Patterns to Remember
- **Skip sparse holes** with `Object.hasOwn(this, k)` in every array polyfill.
- **Attach to prototype** (`Array.prototype.x = fn`) so it's callable as a method; use `.call(arrayLike, …)` to run on array-likes.
- **Prototype chain** = `Object.setPrototypeOf` / `Object.create` — the backbone of `new` and `Object.create`.
- **Timers = task queues** polled against `Date.now()`; the callback fires when due, never exactly on time.
- **Promises** = state machine (`pending → settled once`) + **microtask** scheduling + `then` returns a new promise (chaining).
- **Off-main-thread** work → Web Workers; **debounce/throttle** → tame high-frequency events; **AbortController** → cancel async work.

> ⚠️ Several files contain deliberate/known bugs (noted inline above: `reduce` `||`, `bind` `this` vs `self`, `setInterval` typo, `abort-controller1` self-assignment). Keep these in mind — they're common interview "spot the bug" traps rather than reference-quality code.

**Empty / not covered:** `polyfill-string-to-object.js` is empty (0 bytes) and `polyfill-call.js` is an unfinished stub.
