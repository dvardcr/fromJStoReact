# fromJStoReact

What is the DOM?
The DOM (Document Object Model) is an object representation of the HTML elements. It acts as a bridge between your code and the user interface, and has a tree-like structure with parent and child relationships.

What is the difference between Imperative vs Declarative Programming - Think about the difference between step-by-step instructions on how to make a pizza vs just ordering a pizza.

Imperative tells the computer how to do something step by step.
Declarative tells the computer what you want, and it figures out how.
Like making a pizza yourself (imperative) vs ordering one (declarative).


What is JSX – the syntax extension for JavaScript?
JSX stands for JavaScript XML.
JSX lets you write code that looks like HTML inside your JavaScript, making UI code cleaner and easier to read.

Instead of using document.createElement(), you can just write code that looks like HTML but works like JavaScript.

Example:
function Welcome() {
  return <h1>Hello, welcome to my site!</h1>;
}

Behind the scenes, it's converted to JavaScript that creates that <h1> element.

What is the Babel interpreter?
Babel is a JavaScript compiler that lets you write modern JavaScript (like JSX or ES6) and converts it into older JavaScript that all browsers can understand. In other words, Babel translates new JavaScript code into older code so it works everywhere.

What is the difference between props and state?

In React, a component is a function that returns UI elements.
Props (properties): Data passed to a component from the outside and it is read-only.
State: Data managed inside the component that can change over time.