# Stack & Queue — Revision Notes

Quick-revision guide for all problems covered in this folder. Each entry has the **problem**, the **core idea**, and the **implementation strategy** so you can recall the approach without re-reading the code.

---

## Contents

**Data Structures (building blocks)**
1. [Stack using Array](#1-stack-using-array) — `stack-arr.js`
2. [Stack using Linked List](#2-stack-using-linked-list) — `stack-LL-un-opimise.js`
3. [Queue using Array (circular)](#3-queue-using-array-circular) — `queue-arr.js`
4. [Deque (Double-Ended Queue)](#4-deque-double-ended-queue) — `slidingWindowMaximum.js` (skeleton)

**Problems (applications)**
5. [Balanced Parentheses](#5-balanced-parentheses) — `balancedParantheses.js`
6. [Next Greater Element (+ Circular)](#6-next-greater-element--circular) — `nge.js`
7. [Trapping Rain Water](#7-trapping-rain-water) — `trappingRainWater.js`
8. [Sliding Window Maximum](#8-sliding-window-maximum) — `slidingWindowMaximum.js`
9. [Celebrity Problem](#9-celebrity-problem) — `celebrityProblem.js`

---

## Data Structures

### 1. Stack using Array
**File:** `stack-arr.js`

**What:** LIFO structure backed by a plain JS array, capped at `maxsize`. This is the reusable `Stack` exported and used by the parentheses / NGE problems.

**Key operations**
- `push(ele)` — append at end (only if not full).
- `pop()` — `splice` off the last element and return it.
- `top()` — read last element without removing.
- `isFull` / `isEmpty` — getters comparing `length` to `maxsize` / `0`.

**Strategy:** Array end = top of stack. All ops are O(1) (except `splice`, still effectively O(1) at the tail). Exposed via `module.exports = { Stack }`.

> ⚠️ Note: `isFull`/`isEmpty` are **getters** here (used without `()`), whereas in the linked-list version they are **methods**. Watch this when reusing.

---

### 2. Stack using Linked List
**File:** `stack-LL-un-opimise.js` (marked "un-optimise")

**What:** Stack built on a singly linked list with `front` and `rear` pointers and a `currSize` counter.

**Key operations**
- `push` — create `Node`, attach at `rear`, move `rear` forward. Handles the empty case (set both `front` and `rear`).
- `pop` — **removes from the rear** (the "un-optimised" part): must walk from `front` to find the node whose `next === rear`, making pop **O(n)**. Handles empty and single-element cases.
- `display` — traverse `front → rear`.

**Strategy:** Because it pushes/pops at the rear of a *singly* linked list, popping needs a full traversal to find the second-to-last node.

**Optimisation idea (why it's "un-optimised"):** Push/pop at the **front** instead → both become O(1) and no traversal needed. (Or use a doubly linked list to pop from rear in O(1).)

---

### 3. Queue using Array (circular)
**File:** `queue-arr.js`

**What:** FIFO queue on a fixed-size array using the **circular buffer** technique with `front`, `rear`, and `currSize`.

**Key operations**
- `enqueue(num)` — write at `rear`, then advance `rear = (rear + 1) % maxSize`. Reject if full.
- `dequeue()` — read at `front`, null it out, advance `front = (front + 1) % maxSize`. Reject if empty.
- `isFull` — `currSize === maxSize`; `isEmpty` — `currSize === 0`.

**Strategy:** The modulo wrap-around lets freed slots at the start be reused, so the queue never "runs off the end" of the array. `currSize` is the source of truth for full/empty (avoids the classic ambiguity where `front === rear` could mean either).

**Complexity:** All ops O(1).

---

### 4. Deque (Double-Ended Queue)
**File:** `slidingWindowMaximum.js` (top comment + `DoubleEndedQueue` skeleton)

**What:** Queue supporting insert/remove at **both** ends — the tool needed for Sliding Window Maximum.

**Intended API**
- `push_front`, `push_back`, `pop_front`, `pop_back`
- `top_front`, `top_back`

**Status:** Skeleton only (`Node` + constructor with `front`/`back`/`currSize`; `push_back` is empty). To finish: implement as a **doubly linked list** so all six ops are O(1).

---

## Problems

### 5. Balanced Parentheses
**File:** `balancedParantheses.js` · **Uses:** array `Stack`

**Problem:** Given a string of brackets `[ ] { } ( )`, check if every opening bracket has a correctly-ordered matching close.

**Strategy (classic stack):**
1. Scan left → right.
2. On an **opening** bracket → `push` it.
3. On a **closing** bracket → check `stack.top()` is the matching opener.
   - Match → `pop` and continue.
   - Mismatch (or empty) → return `false` immediately.
4. At the end, valid only if the stack `isEmpty`.

**Why it works:** The stack enforces LIFO nesting — the most recent unclosed opener must be the first to close.

**Complexity:** O(n) time, O(n) space.

> Improvement: use a `{ ')':'(', ']':'[', '}':'{' }` map instead of three `if` blocks to make it concise and extensible.

---

### 6. Next Greater Element (+ Circular)
**File:** `nge.js` · **Uses:** array `Stack`

**Problem:** For each element, find the first greater element to its **right**; `-1` if none. Circular variant: the array wraps around.

**Strategy (monotonic stack, right → left):**
1. Iterate from the **last** index to the first.
2. Maintain a stack of candidate "greater" elements (kept decreasing from top).
3. For `arr[i]`:
   - Stack empty → `nge[i] = -1`.
   - `top > arr[i]` → `nge[i] = top`.
   - `top <= arr[i]` → **pop** all elements `<= arr[i]` (they can never be the answer for anything to the left), then the new top (if any) is the answer, else `-1`.
4. `push(arr[i])` for the elements to its left.

**Circular trick:** Concatenate the array with itself (`[...arr, ...arr]`) and run the same NGE. (In a full solution you'd then take the first `n` results.)

**Why it works:** An element smaller than the current one is useless as a future "next greater" for anything further left, so it's discarded — keeping the stack monotonic and giving amortised O(n).

**Complexity:** O(n) time (each element pushed/popped once), O(n) space.

---

### 7. Trapping Rain Water
**File:** `trappingRainWater.js`

**Problem:** Given building heights, compute total water trapped between them after rain.

**Key insight:** Water above index `i` = `min(maxToLeft, maxToRight) - height[i]` (only if positive).

**Strategy (prefix-max / suffix-max arrays):**
1. Build `prefixMax[i]` = tallest bar in `arr[0..i]`.
2. Build `suffixMax[i]` = tallest bar in `arr[i..n-1]`.
3. For each `i`, if `arr[i]` is below both, add `min(prefixMax[i], suffixMax[i]) - arr[i]`.

**Complexity:** O(n) time, O(n) space.

> Optimisation: the **two-pointer** approach solves this in O(1) extra space — move the pointer on the smaller side inward, tracking `leftMax`/`rightMax` on the fly.

---

### 8. Sliding Window Maximum
**File:** `slidingWindowMaximum.js` (strategy in comments; deque WIP)

**Problem:** For every window of size `k`, output the maximum element.

**Strategy (monotonic deque, decreasing):**
- Keep a deque holding **indices/values** in decreasing order; the **front is always the current window's max**.
- For each element:
  1. **Keep the window valid** — drop from the front any index that has slid out of the window.
  2. **Maintain monotonicity** — pop from the **back** while `back < currElement` (those can never be the max again).
  3. `push_back` the current element.
  4. Record `dq.front()` as the answer once the first full window is formed.

**Why a deque:** Both "evict from front" (out of window) and "evict from back" (smaller elements) are needed → double-ended, O(1) each.

**Complexity:** O(n) time (each element enters/leaves the deque once), O(k) space.

---

### 9. Celebrity Problem
**File:** `celebrityProblem.js` (approach documented; solution outlined)

**Problem:** Given an `n × n` matrix where `M[x][y] = 1` means "x knows y", find the **celebrity** — known by everyone but who knows no one. Return `-1` if none.

**Strategy (two-pointer elimination):**
- Take `l = 0`, `r = n - 1`.
- While `l < r`:
  - If `M[l][r] === 1` → `l` knows `r`, so **`l` can't be the celebrity** → `l++`.
  - Else (`M[r][l] === 1`, or `l` doesn't know `r`) → **`r` can't be the celebrity** → `r--`.
- The surviving index `l` is the **candidate**.

**Why it works:** Each comparison eliminates exactly one person, narrowing `n` candidates to 1 in O(n) steps.

**Complete solution reminder:** After finding the candidate, **verify** it — the candidate must know *no one* (its row is all 0s, self excluded) and be known by *everyone* (its column is all 1s, self excluded). Without verification the answer can be wrong when no celebrity exists.

**Complexity:** O(n) elimination + O(n) verification = O(n) time, O(1) space.

---

## Quick Recall Cheat-Sheet

| Problem | Core Tool | Time | Space | One-line trick |
|---|---|---|---|---|
| Balanced Parentheses | Stack | O(n) | O(n) | Push opens, match on close, end empty |
| Next Greater Element | Monotonic stack (R→L) | O(n) | O(n) | Pop all ≤ current, top is answer |
| Circular NGE | Same + `[...arr, ...arr]` | O(n) | O(n) | Double the array |
| Trapping Rain Water | Prefix/Suffix max | O(n) | O(n) | `min(Lmax, Rmax) − h[i]` |
| Sliding Window Max | Monotonic deque | O(n) | O(k) | Front = max; evict stale + smaller |
| Celebrity Problem | Two pointers | O(n) | O(1) | Eliminate one per step, then verify |

---

## Patterns to Remember
- **Monotonic stack/deque** → "next/previous greater/smaller" and "window max/min" families.
- **Prefix/Suffix precompute** → when each index needs info about everything on its left *and* right.
- **Two-pointer elimination** → when one comparison can rule out a candidate (celebrity, container-with-most-water).
- **Circular buffer (`% maxSize`)** → fixed-capacity queues without shifting elements.
