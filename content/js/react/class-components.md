## Class Components

### Writing a Component (Class Component)

* You can also write a component as a **class**.
* Only way to get *all* the awesomeness of React
* No longer the case thanks to **hooks**
* Still extremely common

### Writing a Component (Class Component)

A **class component** extends `React.Component` and has a `render` method

```javascript
class Greeting extends React.Component {
  render() { /* ... */ }
}
```

### Writing a Component (Class Component)

The `render` method returns JSX to be rendered (just like the **function component**)

```javascript
class Greeting extends React.Component {
  render() { 
    return (
      <h1>Hello world</h1>
    )
  }
}
```

### Props (Class Components)

* The same rules govern **class components**
* Only different: you read off `this.props`

```javascript
class Greeting extends React.Component {
  render() {
    const { className, message } = this.props
    return (
      <div className={className}>
        {message}
      </div>
    )
  }
}
```

### State

* The second core part of a component is **state**
* State allows a UI to have dynamic behavior
* State can change in the response to events
  * Examples?
* State can track many things
  * Examples?
* Originally, state was only available for **class components**.
  * They're still very common, so we'll start there.

### State

* Components mount onto the DOM with an "initial state"

```javascript
class Counter extends React.Component {
  state = {
    count: 0
  }
  
  render() { /* ... */ }
}
```

### State

* State can be accessed in the class instance via `this.state`

```javascript
class Counter extends React.Component {
  state = { count: 0 }
  
  render() {
    console.log(this.state) // { count: 0 }
    // ...
  }
}
```

### Setting State

* State can be set via `this.setState`
* You provide the state keys you want to update

```javascript
class SpinalTapAmp extends React.Component {
  state = { volume: 0 }

  upToEleven = () => {
    this.setState({ volume: 11 })
  }

  // ...
}
```

### It Goes Up To Eleven

[![](./images/up-to-eleven.jpg)](https://www.youtube.com/watch?v=KOO5S4vxi0o)

### Triggering State Changes

A classic way to change state is with `<button>` clicks.

```javascript
render() {
  return (
    <button onClick={this.upToEleven}>TURN IT UP</button>
  )
}
```

We are giving `this.upToEleven` as a click handler for the `button` element.

### Triggering State Changes

What's the difference between these two buttons?

```javascript
<button onClick={this.upToEleven}>TURN IT UP</button>

<button onClick={this.upToEleven()}>TURN IT UP</button>
```

### Triggering State Changes

* The second one won't work.
* We are *invoking* `this.upToEleven` and taking its **return value** and assigning it as a click handler to the `button`.

### Showing State

* What happens when `this.setState` is invoked?
* It triggers a re-render of the component
* A component **render**s every time **props** or **state** changes
  * Otherwise, it just contentedly does nothing forever

### Showing State

* Every time the state changes, the `render` method runs

```javascript
class Counter extends React.Component {
  state = { count: 0 }
  
  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }
  
  render() {
    console.log(this.state) // what gets printed?
    return (
      <button onClick={this.increment}>Foo</button>
    )
  }
}
```

### Showing State

* Every time the state changes, the `render` method runs

```javascript
class Counter extends React.Component {
  state = { count: 0 }
  
  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }
  
  render() {
    return (
      <button onClick={this.increment}>
        Clicks: {this.state.count}
      </button>
    )
  }
}
```

### What's with the Funky Syntax

* `state` and `upToEleven` are called **public instance fields** [(link)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
* It allows initializing fields w/o using `constructor`
* Guarantees `this` will be the class instance inside a function body
  * (it **binds** `this` to the instance for the method)

### What's with the Funky Syntax

Older syntax would look like this...

```javascript
class SpinalTapAmp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { volume: 0 }
    this.upToEleven = this.upToEleven.bind(this)
  }

  upToEleven() {
    this.setState({ volume: 11 })
  }
  
  // ...
}
```

### Demo

Example [(link)](https://codesandbox.io/s/sad-bogdan-fvkd2?file=/src/App.js)

### Exercise

Exercise 1: sandbox [(link)](https://codesandbox.io/s/state-exercise-1-bxn0b?file=/src/App.js)

Exercise 2: sandbox [(link)](https://codesandbox.io/s/trusting-chebyshev-wlbv7?file=/src/App.js)
