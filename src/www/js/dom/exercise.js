/**
 * Exercise 1
 * ============================================
 *
 * The three boxes need text labels: "Box 1", "Box 2", etc.
 * Place a text node inside each one using JS. Use a specific
 * query selector to locate each one:
 *
 * Box 1 - getElementsByClassName
 * Box 2 - getElementById
 * Box 3 - querySelector
 */

// your code goes here

/**
 * Exercise 2
 * ============================================
 *
 * Get the form state of the input text (the text in it) and
 * whether the checkbox is checked or not.
 */

const input = document.querySelector('input[type="text"]')
const checkbox = document.querySelector('input[type="checkbox"]')

// your code goes here
const inputVal = null // TODO your code goes here
const checkboxVal = null // TODO your code goes here

console.assert(inputVal === 'Hello world', 'input val not determined correctly')
console.assert(checkboxVal === true, 'checkbox val not determined correctly')

/**
 * Exercise 3
 * ============================================
 *
 * Implement the addTodo function. It should read from the input field
 * and add a new todo to the ul element with the `exercise3` id. It then
 * should clear the input field.
 *
 * When the input field is empty and the user tries to add an item,
 * do nothing.
 */

const addTodo = (e) => {
  e.preventDefault()

  // TODO Your code goes here

}

/**
 * Exercise 4
 * ============================================
 *
 * Insert a puppy GIF <img> into the container. Add a ".small-image" class.
 * Give it two attributes:
 *
 * 1. `alt` (for screen readers)
 * 2. `title` (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#the_title_attribute)
 *
 * use the `#setAttribute` method to do so.
 */

const container = document.querySelector('#exercise4-container')
const url = 'https://media4.giphy.com/media/hAvuWZIdxLbNMv6SqI/giphy.gif?cid=ecf05e47k5weoj6jsv0qha1vij4p2k1ej9z3gfe0bw5npcmz&rid=giphy.gif'

// TODO your code goes here
