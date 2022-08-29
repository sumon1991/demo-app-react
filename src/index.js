import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const element = <h1>Hello, world!</h1>;

// const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>;

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };
// const element = (
//   // calling a function
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

// JSX Prevents Injection Attacks
// const title = response.potentiallyMaliciousInput;
// // This is safe:
// const element = <h1>{title}</h1>;

// const element = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// );
// React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object like this:
// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );

// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };

// root.render(element);

// Defining a function
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}
setInterval(tick, 1000);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
