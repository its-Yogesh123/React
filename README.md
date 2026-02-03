# JSX
    Dynammic Attributes
# Components
### LifeCycle
1. Constructed -> Mounted -> Updated(Re-render) -> Unmounted
    {} - Can run any js in these brackets
    Return JSX must be single element(component)

# Props
    Params to that component function
# state

# Hooks
    Params to that component function
- useEffect : 
    - Whenever lifecycle changed of any components then we can inject code with useEffect
    - Run code/fun when lifecycle of comp. changes

`Critical Moment: useLayoutEffect If you have a useLayoutEffect, React runs it synchronously immediately after the DOM mutation but before the browser paints.`

Hooks like:

useState → store data between renders

useEffect → run side effects safely

useLayoutEffect → DOM-measure side effects

useMemo → pure calculations

useCallback → stable functions

exist to support:
👉 pure rendering + controlled side effects

- contextAPI :
When Custom Hook for contextAPI 
```
Component render
   ↓
calls useCart()
   ↓
useCart calls useContext(CartContext)
   ↓
Component subscribes to CartContext

```

# SPA - Single Page Application
Dynamic Routing
/path - absolute path
path - normal (extensible path)


# Redux
    Solve same problem as contextAPI does



# Side Effect
Side effects are operations that interact with or modify something outside the component’s render output, such as the DOM, network, timers, or subscriptions.

# Workflow of react
```
1. event trigger
   ↓
2. Batching (multiple setState calls)
   ↓
3. Render Phase 
   ↓
4. commit phase updates DOM once
   ↓
5. Layout and  Paint ( The Browser's Turn )
   ↓
6. Effect Execution (The Cleanup)
    - Passive Effect Execution
```
# 1. Trigger 
Any event(like button click) lead to  a state change (setState) or a prop change or a parent re-rendering then re-rendring start for particular component

# 2. Batching :
### React groups multiple state updates into a single re-render for performance.
- Legacy (React 17 & older): React only batched updates inside event handlers (like onClick). It did not batch updates inside setTimeout or Promises.
- Automatic Batching (React 18): React batches everything
```scss
// without batching  - strictly follow rule whenever statechange comp re-render
setA(1) → render
setA(2) → render
setC(3) → render

//  with batching
setA(1) → into update queue
setA(2) → into update queue
setC(3) → into update queue
→ render ONCE

// Note : all modification must be in single function/event
```
### Working
- During an event/render react takes snapshot and place same value everywhere where state is used and if state is changed then pushed it into Queue 
e.g
    ```scss
    // A =0 and B =1 (before this event)
    setA(A + 1);
    setA(A + 2);
    setB(B + 1);
    ``` 
1. React Will capture state value and put everywhere we are using that particular state e.g we are using state `A` 2 times inside `setA()` so at both places values of `A` will be 0(value before this event i.e. 0)  and same for state `B` 

2. if there is any change state like setState() i.e `setA()` and `setB()` it push its params to queue
    ```scss
    setA(0 + 1); // Queue.push(0+1) | Queue like {0+1}
    setA(0 + 2);  //  Queue.push(0 + 2) | Queue {0+1, 0+1}
    setB(1 + 1); // Queue.push(1+1)   - Queue for state B | Queue {1+1}

    // --- Update queue look likse
    Queue_A = {0+1,0+2} -> {1,2}  // queue is processed one by one
    1 -> A become 1 
    2 -> A become 2
    // final value in A will be 2 
    Queue_B = {1+1} -> {2}
    2 -> B become 2
    // final value in B will be 2
    ``` 
3. If we pass callback then  `in callback state is passed at time of processing` 
    ```scss
    // state is A =0
    setA(x => x+1)    // x is not any state it's just params

    // let see
    setA(x => x+1) // Queue = {x => x+1}
    setA(x => x+1) // Queue = {x => x+1 , x=>x=1}

    // now all over queue processing time
    x => x+1   -> 0 => 0+1  -> A become 1
    x => x+1   -> 1 => 1+1 -> A become 2
    ```
    - Functional updates work with batching. 😎

`React says Don’t re-render until all updates in the same event are done`
# 3. Render Phase
### Render phase = React calls components to compute the next UI (Virtual DOM).
- Just Calculation how will bw the new UI (internal calculation)
- It does NOT:
    - ❌ update the browser DOM
    - ❌ run effects (useEffect)
    - ❌ do layout or paint

- It ONLY:
    - ✅ calls component functions
    - ✅ builds a new React element tree
    - ✅ compares it with the previous one (Diffing/Reconciliation)

- Do's in render phase
    - reading props
    - reading state
    - calculating JSX
    - calling pure functions
- Don't
    - ❌ manipulate DOM
    - ❌ call setState
    - ❌ call APIs
    - ❌ mutate global variables
    - ❌ generate random values
    - ❌ do side effects
    - Because ??

### Workflow
```scss
New Tree Construction (Call Componets to get latest JSX/UI)
   ↓
Diffing / Reconciliation
   ↓
Tagging : update destory or insert new node
```

### Diffing / Reconciliation O(n) 
- Heuristic Based use 2 concept 
    - Two elements of different types will produce different trees.
    - The developer can hint at which child elements may be stable across different renders using a key prop.
- React Compare Old Tree vs New Tree


`Re-mounting` : Destrying old Node and its subtree completly and Making new Node - ***State not Preserved***

`Re-rendring` : Component run and just update data - ***State Preserved***

It produces a list of changes(tagging):
👉 “change text”, “insert node”, “remove node”


#### Diffing Rules: Reuse vs. Destroy
React scans the tree level-by-level (Breadth-First). When comparing a node from the old tree to the new tree, it asks: "Are these the same?"
- Rule A: Different Element Types → Destroy & Rebuild
```html
// Old
<div className="before" title="Odd" />
// New
<div className="after" title="Even" />
```

- Rule B: Same Element Types → Update & Reuse

`Render Phase Goal : Given current state and props, what should the UI look like`

# 4. Commit Phase
# 5. Layout & Paint Phase
# 6. Effect Execution



# React Fiber @React16+
# Debouncing
# Closure + Stall State Problem
 A closure is simply a function **remembering** the variables that were around when it was created.

When a component renders, React takes a Snapshot (photo) of that exact moment i.e.
- The props at that moment are frozen in time.
- The state variables at that moment are frozen in time.
- The functions (event handlers, effects) defined inside are created inside that snapshot `Closures`.

### Stale State Problem



Closure capture the initial state/props but are expected to have currect/update values lead to stall state
```js
function BrokenCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Current count is:', count); 
      setCount(count + 1); 
    }, 1000);

    return () => clearInterval(timer);
  }, []); 
  return <h1>{count}</h1>;
}
```

What happens?

- 0 Seconds: Component Mounts. count is 0.

- Effect Runs: setInterval is created. It forms a closure around count. Inside this closure, count is forever 0.

- 1 Second: Interval runs. setCount(0 + 1). Count becomes 1. Screen updates to 1.

- 2 Seconds: Interval runs again. Crucial Point: This is the same interval created in the first render. It still remembers the count from the first render. It sees count is 0. It runs setCount(0 + 1). Count is still 1.

- Result: The counter flips to 1 and gets stuck there forever.


### How to fix stale state problems
- Use dependency array correctly
- Use functional state update
- Use useRef to store latest value

# Referential equality
Referential equality in React means two variables point to the exact `same object or function in memory`, not just objects that “look” the same.

React often decides whether to re-render or re-run logic using reference comparison not deep comparison.
```bash
New object → new reference → dependency changed -> re-rendering
```
## useMemo()
useMemo is used to memoize a computed value so that React can preserve referential equality between renders and avoid unnecessary recalculations or re-renders caused by new object or array references.

 ```js
 // when to use 
function App({ num }) {
  const result = useMemo(() => {
    console.log("Heavy calculation...");
    let sum = 0;
    for (let i = 0; i < 1_000_000_000; i++) {
      sum += i;
    }
    return sum + num;
  }, [num]);

  return <div>{result}</div>;
}
```
#### Not use when
- not in dependency array
- not passed to memoized child
- not expensive

`Note : useMemo does NOT stop component re-render but it keeps same reference to skips recalculation`
## useCallback() - function freezor 
`useCallback` caches a function definition between renders
- Keep the old version in memory unless the dependencies change


## React.memo
`React.memo` is a Higher Order Component (HOC) that wraps a component to prevent unnecessary re-renders. It render enclosing comp. if and only if `prevProps` !== `newProps`
### HOC
```scss
// HOC - a component/function
take component → add additional info → return new component
```
- When to use
    - Component is heavy (charts, lists, images)
    - Component renders many times
    - Props usually stay the same

`Overall : If the same props come again → don’t re-render the component.`


#### Why Need ?
- By default, a child is re-render if its parent get re-render even if props not change (unnecessary render)

- 🔴 The Trap: If you pass a function or object as a prop to a **React.memo** component without stabilizing it, React.memo fails completely due to refrential equality. 

### Comparison Table | These all are used for optimization
| Feature | React.memo | useCallback | useMemo |
|--------|-------------|-------------|---------|
| What it caches | A rendered component | A function definition | A calculated value |
| Main goal | Prevent re-rendering | Maintain referential equality | Save calculation time |
| Use when... | Component is heavy & props rarely change | Passing function to React.memo child | Expensive math OR stable object reference |


# Controlled vs Uncontrolled Components
## Controlled Component
`React is the Single Source of Truth.`
React manage the value by state ans trigger something on change

```jsx
const [data,setData] = useState();
<input value ={data} type="text"
onChange ={e => {setData(e.target.value)}}
>
// 
```
why Controlled?
- Instant Validation
- like for some text/input we can disble button (live action)
- search while typing


## Uncontrolled Component
`No single is Source of Truth.`
DOM store the actual values and react when nedded peak value usinf `ref_variable.current `
```jsx
const data = useRef();
<input ref ={data} type = "text">
```
why?
- Performance ↑ due few re-renders

Use Controlled when:
- instant validation
- need to enable/disable buttons
- need to show live preview
- need to format input
- Mostly normal forms

Use Uncontrolled when:
- Very large forms
- Simple one-time input
- File inputs (`<input type="file">`)

## Edge Cases

1. ❌ Forgetting onChange `=>` Render as Readonly 

2. ⚠️ Mixing controlled and uncontrolled `=>` React warning
    ```html
    <input defaultValue="abc" value={name} />
    defaultValue = "abc"   :- Uncontrolled
    value={name}   :- Controlled
    ```

3. ⚠️ Setting state to undefined or null `=>` React Warning

    ```scss
    const [name,setName] = useState();  // name is undefined initially
    <input value={name} onChange={...} >

    // undefined or null initial values make is uncontrolled
    // intial value must be there

    const [count,setCount] = useState(0);   // valid
    ```
4. Checkbox use `checked` instead of `value`
5. input type="Number" still string so be carefull while making state
6. File inputs are always uncontrolled by nature.
7. `We must choose one style only for single component.`

---


## Table
| Feature | Controlled Component | Uncontrolled Component |
|--------|----------------------|------------------------|
| Where is the value stored? | In React state (`useState`) | In the DOM itself |
| Who controls the input? | React controls it | Browser (DOM) controls it |
| How to access value? | From state variable | Using ref (`useRef`) |
| Uses value attribute? | ✅ Yes (`value={state}`) | ❌ No (`defaultValue` instead) |
| Uses onChange? | ✅ Required | ❌ Not required |
| Validation | Easy (because value is in state) | Harder (need to read from DOM) |
| Form submission | Directly from state | Must read from ref |
| Predictability | High (single source of truth) | Low (DOM & React both involved) |
| React way? | ✅ Recommended | ⚠ Used in special cases |
| Performance (big forms) | Slightly slower (many re-renders) | Faster (no re-render per keystroke) |


---
# Questions
What is Layout Thrashing ?

why useEffect runs after render

difference between side effects and state updates

examples of bad side effects in render

why StrictMode double-invokes effects
what to do for sequential update in single event?

closure + useCallback

closure + useMemo

closure + async/await


Is React.memo alone enough and in which conditions?
What are HOC - Higher Order Components and where to use?

React Portal