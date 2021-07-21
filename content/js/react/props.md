## Props

### Props

* Components receive **props** (properties)
* Props are the way to provide customization to a component
* They are **read-only**

### Passing Props

* Props are passed as key-value pairs in JSX
* You can pass 
  * a string
  * a JS value (number, boolean, object, array, etc.)

```javascript
const App = () => (
  <div>
    <Greeting message="Hello world" repeatTimes={3} />
  </div>
)
```

### Passing Props

You can also pass props to regular HTML elements like you normally do.

```javascript
<div key="root" />
<input type="text" value="Hello world" />
<textarea cols={3} />
```

### Passing Props

If you're passing a `true` value, you can drop the assignment in JSX:

```javascript
// these two are equivalent:
<input type="text" disabled={true} />
<input type="text" disabled />
```

### Passing Props

To give a **class name** (like `class="whatever"` in HTML), you use `className`

```javascript
<div className="row">
  <div className="col-3">{/* */}</div>
  <div className="col-9">{/* */}</div>
</div>
```

### Style note

You'll often see long JSX components "chopped down" like this:

```javascript
const App = () => (
  <div>
    <Greeting
      message="Hello world"
      repeatTimes={3}
    />
  </div>
)
```

### Props (Function Components)

* **Function Components** are functions that return JSX
* They take a **props** object as their first argument

```javascript
const Greeting = (props) => (
  <h1>{props.message}</h1>
)
```

### Props (Function Components)

* People often destructure the props object

```javascript
// inside the function params
const Greeting = ({ message }) => (
  <h1>{message}</h1>
)

// or in the function body
const Greeting = (props) => {
  const { message } = props
  return (
    <h1>{message}</h1>
  )
}
```

### Props (Function Components)

* React Components are different from HTML elements
* Props passed to React Components are never implicitly used
* If you give a component a `className` or `id`, that component needs to actually use it

```javascript
const Greeting = ({ className, message }) => (
  <div className={className}>
    {message}
  </div>
)

<Greeting
  className="yay"
  message="Hello world"
  id="Will not be applied :-(" 
/>
```

### Default Props

* Use JS object prop defaults to provide default values for props

```javascript
const Greeting = ({ message, size = 16 }) => (
  <div style={{ fontSize: size }}>
    {message}
  </div>
)
```

### Default Props

* Less common, you can give a `defaultProps` property to the JSX component.

```javascript
const Greeting = () => {/* ... */}

Greeting.defaultProps = {
  size: 16,
}
```

### Exercise

**Exercise 1**

Using your previous sandbox code or using this starter sandbox [(link)](https://codesandbox.io/s/romantic-grothendieck-d3ope?file=/src/App.js)...

* Extract a `Title` component
* Extract a `TodaysDate` component ("Today's date: ...")
* Extract a `FormatDate` component that takes a `date` and displays in mm/dd/YYYY
* Extract and re-use a `ShoppingItem` component
* CHALLENGE: Be able to pass a `done` boolean prop to `ShoppingItem`, which applies a `.done` class to the `<li>` element

**Exercise 2**

Starter sandbox [(link)](https://codesandbox.io/s/floral-morning-3q647?file=/src/App.js)
