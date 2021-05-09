## React Components

### Components

* **Components** are the building blocks of a UI.
* Components can contain other components.
* Semantically meaningful (e.g. `TodosList`, `Header`, `ProfileCard`)

### Components

Components can be used in JSX like other HTML elements.

```javascript
<div>
  <Header />
  <SearchBar />
  <Contents />
  <Footer />
</div>
```

### Components

Components accept `children`, just like HTML nodes can have children.

Presumably the component does something with those children. 

(You'll learn later how to make use of them.)

\columnsbegin
\column{.5\textwidth}

HTML:

```javascript
<ul>
  <li>Foo</li>
  <li>Bar</li>
  <li>Baz</li>
</ul>
```

\column{.5\textwidth}

React Components:

```javascript
<TodosList>
  <Todo>Foo</Todo>
  <Todo>Bar</Todo>
  <Todo>Baz</Todo>
</TodosList>
```
\columnsend

### Components

You'll often have a mix of components with and without children.

The components describe the semantic pieces of your UI.

```javascript
<div>
  <PageTitle>Edit User</PageTitle>
  <ProfileImageChooser />
  <EditableName>Andrew Smith</EditableName>
  <SaveButton />
</div>
```

### Writing a Component (Function Component)

A component is a function that returns JSX.

```javascript
const Greeting = () => (
  <h1>Hello world</h1>
)

const App = () => (
  <div>
    <Greeting />
  </div>
)
```

By convention, it's `PascalCase`.

### Writing a Component (Function Component)

You can even reuse a component multiple times if it makes sense.

```javascript
const EchoChamber = () => (
  <div>
    <Message />
    <Message />
    <Message />
  </div>
)
```

### Exercise

* Using your previous sandbox code or this starter sandbox [(link)](https://codesandbox.io/s/fervent-liskov-ncjoz?file=/src/App.js)...
  * Extract a `Header` component
  * Extract a `TodaysDate` component
  * Extract a `ShoppingList` component
* Write these components as **function components**
* Then refactor them components as **class components**

These components won't do much, we're just practicing creating components and describing our UI with components.
