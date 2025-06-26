# Interview Questions Week 2

## 1. How do you select elements in the DOM?

You can select elements in the DOM using methods like:

- `document.getElementById('id')` - Selects an element by its ID.
- `document.querySelector('.class')` - Selects the first element matching a CSS selector.
- `document.querySelectorAll('.class')` - Selects all elements matching a CSS selector.
- `document.getElementsByClassName('class')` - Selects elements by their class name.
- `document.getElementsByTagName('tag')` - Selects elements by their tag name.

## 2. What are event listeners?

Event listeners are functions that wait for specific events (e.g., clicks, key presses) to occur on an element. You can add an event listener using:

```javascript
element.addEventListener('event', function);
```

## 3. Explain event delegation.

Event delegation is a technique where you attach a single event listener to a parent element to handle events for its child elements. This works because of event bubbling, where events propagate from the target element up to its ancestors.

## 4. How do you prevent default behavior in JS?

You can prevent the default behavior of an event using:

```javascript
event.preventDefault();
```

For example, preventing a form submission:

```javascript
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
```

## 5. What is the difference between var, let, and const?

- `var`: Function-scoped, can be redeclared, and does not respect block scope.
- `let`: Block-scoped, cannot be redeclared, and is preferred for variables that change.
- `const`: Block-scoped, cannot be redeclared or reassigned, used for constants.

## 6. How does bubbling and capturing work in events?

- **Bubbling**: Events propagate from the target element up to its ancestors.
- **Capturing**: Events propagate from the root element down to the target element.
  You can specify the phase using the third parameter in `addEventListener`:

```javascript
element.addEventListener('event', function, true); // Capturing phase
element.addEventListener('event', function, false); // Bubbling phase
```

## 7. How do you add and remove classes in JS?

- Add a class:

```javascript
element.classList.add("className");
```

- Remove a class:

```javascript
element.classList.remove("className");
```

- Toggle a class:

```javascript
element.classList.toggle("className");
```

## 8. What is closure in JavaScript?

A closure is a function that retains access to its outer scope even after the outer function has finished executing. Example:

```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2
```

## 9. Explain arrow functions.

Arrow functions are a concise way to write functions in JavaScript. They do not have their own `this` context and are often used for callbacks. Example:

```javascript
const add = (a, b) => a + b;
```

## 10. What is the difference between == and ===?

- `==`: Compares values after type coercion (e.g., `5 == '5'` is `true`).
- `===`: Compares values and types without coercion (e.g., `5 === '5'` is `false`).

---

## Additional Questions:

### 11. What is the difference between null and undefined?

- `null`: Represents an intentional absence of value.
- `undefined`: Represents a variable that has been declared but not assigned a value.

### 12. What are template literals in JavaScript?

Template literals allow embedding expressions and multi-line strings using backticks:

```javascript
const name = "John";
const greeting = `Hello, ${name}!`;
```

### 13. How do you handle asynchronous code in JavaScript?

You can handle asynchronous code using:

- Callbacks
- Promises (`.then`, `.catch`)
- `async/await`

### 14. What is the purpose of the `Array.map()` method?

The `Array.map()` method creates a new array by applying a function to each element of the original array:

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2); // [2, 4, 6]
```

# Key Concepts: DOM, Event Listeners, JavaScript ES6, Dynamic UI, Arrays

#### DOM

The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing developers to manipulate HTML and CSS programmatically.

#### Event Listeners

Event listeners are functions that respond to user interactions or other events on a webpage. They are added to elements to execute specific actions when an event occurs.

#### JavaScript ES6

ES6 (ECMAScript 2015) introduced modern features to JavaScript, such as `let`, `const`, arrow functions, template literals, destructuring, and promises, making the language more powerful and concise.

#### Dynamic UI

Dynamic UI refers to user interfaces that change or update dynamically based on user interactions or data changes, often achieved using JavaScript.

#### Arrays

Arrays are data structures used to store multiple values in a single variable. JavaScript provides various methods to manipulate arrays, such as `map()`, `filter()`, `reduce()`, and `forEach()`.
