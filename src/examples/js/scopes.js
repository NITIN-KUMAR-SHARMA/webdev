// <<: function-scopes
function foo() {
  const a = 1
  console.log(a)
}

function bar() {
  console.log(a) // ?
}
// :>>

// <<: function-scopes-answer
function foo() {
  const a = 1
  console.log(a)
}

function bar() {
  console.log(a) // ReferenceError: a not defined
}
// :>>

// <<: nested-example
function outerFunction() {
  const outer = 'Outer variable'

  function innerFunction() {
    const inner = 'Inner variable'
    console.log(outer) // ?
  }

  console.log(inner) // ?
}

console.log(outer) // ?
// :>>

// <<: nested-answer
function outerFunction() {
  const outer = 'Outer variable'

  function innerFunction() {
    const inner = 'Inner variable'
    console.log(outer) // Outer variable
  }

  console.log(inner) // ReferenceError
}

console.log(outer) // ReferenceError
// :>>

// <<: shadowing
function foo() {
  const a = 10
  function inner() {
    const a = 2
    console.log(a) // ?
  }
  console.log(a) // ?
}
// :>>

// <<: shadowing-answer
function foo() {
  const a = 10
  function inner() {
    const a = 2
    console.log(a) // 2
  }
  console.log(a) // 10
}
// :>>

// <<: block-scope
function blockScope() {
  if (Math.random() > 0.5) {
    const a = 1
    var b = 2
  }
  console.log(a) // ?
  console.log(b) // ?
}
// :>>

// <<: block-scope-answer
function blockScope() {
  if (Math.random() > 0.5) {
    const a = 1
    var b = 2
  }
  console.log(a) // ReferenceError
  console.log(b) // It depends...
}
// :>>

// <<: block-scope-2
function blockScope() {
  {
    const a = 1
  }
  console.log(a) // ?
}
// :>>

// <<: block-scope-2-answer
function blockScope() {
  {
    const a = 1
  }
  console.log(a) // ReferenceError
}
// :>>

// <<: top-down
function first() {
  second()
}

function second() {
  console.log('Hello')
}

second() // ?
// :>>

// <<: top-down-answer
function first() {
  second()
}

function second() {
  console.log('Hello')
}

second() // 'Hello'
// :>>

// <<: top-down-const
const first = () => {
  second()
}

const second = () => {
  console.log('Hello')
}

second() // ?
// :>>

// <<: top-down-const-answer
const first = () => {
  return second()
}

const second = () => {
  return 'Hello'
}

second() // 'Hello'
// :>>

