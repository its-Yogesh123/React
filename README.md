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



# React Fiber @React18+
# Debouncing
# Questions
What is Layout Thrashing ?

why useEffect runs after render

difference between side effects and state updates

examples of bad side effects in render

why StrictMode double-invokes effects
what to do for sequential update in single event?