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

# Questions
why useEffect runs after render

difference between side effects and state updates

examples of bad side effects in render

why StrictMode double-invokes effects