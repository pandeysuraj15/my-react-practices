# 🧮 React Calculator

A simple and responsive calculator built using **React.js**. This project focuses on handling user interactions, managing state with React Hooks, and implementing calculator operations with basic input validation.

## 🚀 Features

- Addition, subtraction, multiplication, and division
- Decimal number support
- `AC` — Clear the complete expression
- `DE` — Delete the last entered character
- `00` and `0` support
- Prevents invalid consecutive operators
- Prevents calculation when the expression ends with an operator
- Handles empty expressions
- Responsive calculator UI

## 🛠️ Tech Stack

- **React.js**
- **JavaScript (ES6+)**
- **CSS3**
- **Vite**
- **React Hooks (`useState`)**

## 📂 Project Structure

calculator/
├── src/
│ ├── App.jsx
│ ├── App.css
│ ├── main.jsx
│ └── index.css
├── public/
├── package.json
└── README.md

## 🧠 Concepts Practiced

This project helped me practice:

- React component development
- `useState` for state management
- Event handling
- Event bubbling
- Conditional logic
- String manipulation
- Array methods such as `includes()`
- Input validation
- Error handling with `try...catch`
- Handling edge cases
- Building expressions dynamically from user input

## ⚙️ How It Works

The calculator maintains the current expression in React state:

const [value, setValue] = useState("");

Whenever a calculator button is clicked, its value is captured and added to the current expression.

For example:

7 → 78 → 78+ → 78+5

When `=` is pressed, the expression is evaluated and the result is displayed.

Basic validations are also applied before performing the calculation, such as checking for an empty expression or an expression ending with an operator.

## ▶️ Run Locally

Clone the repository:

git clone <your-repository-url>

Navigate to the project:

cd calculator

Install dependencies:

npm install

Start the development server:

npm start

Open the local URL provided by Vite in your browser.

## 📌 Future Improvements

- Replace `eval()` with a custom expression parser
- Add keyboard support
- Add calculation history
- Improve decimal validation
- Support negative numbers
- Add more advanced mathematical operations
- Add automated tests
- UI Enhancement

## 🎯 Purpose

This project is part of my frontend practice series, where I am building small applications to strengthen my **JavaScript problem-solving, React development, state management, and edge-case handling** skills.
