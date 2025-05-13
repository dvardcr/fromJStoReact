# fromJStoReact

<h2>What is the DOM?</h2>
The DOM (Document Object Model) is an object representation of the HTML elements. It acts as a bridge between your code and the user interface, and has a tree-like structure with parent and child relationships.

<h2>What is the difference between Imperative vs Declarative Programming? - Think about the difference between step-by-step instructions on how to make a pizza vs just ordering a pizza.</h2>

Imperative tells the computer how to do something step by step.
Declarative tells the computer what you want, and it figures out how.
Like making a pizza yourself (imperative) vs ordering one (declarative).


<h2>What is JSX – the syntax extension for JavaScript?</h2>
JSX stands for JavaScript XML.
JSX lets you write code that looks like HTML inside your JavaScript, making UI code cleaner and easier to read.

Instead of using document.createElement(), you can just write code that looks like HTML but works like JavaScript.
### Example usage
```jsx
function Welcome() {
  return <h1>Hello, welcome to my site!</h1>;
}
```

Behind the scenes, it's converted to JavaScript that creates that &lt;h1&gt; element.

<h2>What is the Babel interpreter?</h2>
Babel is a JavaScript compiler that lets you write modern JavaScript (like JSX or ES6) and converts it into older JavaScript that all browsers can understand. In other words, Babel translates new JavaScript code into older code so it works everywhere.

<h2>What is the difference between props and state?</h2>
In React, a component is a function that returns UI elements.
Props (properties): Data passed to a component from the outside and it is read-only.
State: Data managed inside the component that can change over time.

<h2>True or False: You can update the page content by manipulating the DOM.</h2>
True

<h2>Which of the following statements is more declarative?</h2>
"A Hawaiian pizza please." Declarative programming allows you to describe what you want to happen, rather than the steps to make it happen.

<h2>Why do you need to compile your React code?</h2>
React uses JSX which needs to be compiled into JavaScript. JSX is a syntax extension for JavaScript, but browsers don't understand JSX out of the box, so you'll need a JavaScript compiler to transform your JSX code into regular JavaScript.

<h2>How would you nest a `Nav` component inside a `Layout` component in React?</h2>
In React, you can nest components inside each other, forming a component tree.

### Example usage

```jsx
<Layout>
  <Nav />
</Layout>
```

<h2>What are props used for in React?</h2>
Passing information to components. Props can be passed to components similarly to HTML attributes, but you can pass any JavaScript value through them, including objects and functions.

<h2>What is the difference between props and state?</h2>
Props are read-only information that's passed to components. State is information that can change over time, usually triggered by user interaction.