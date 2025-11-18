
---

# **Simple Calculator**

> A vanilla JavaScript calculator built as part of **The Odin Project**'s Foundations curriculum.

## 📝 Description

This project is a fully functional **simple calculator** built using only **HTML**, **CSS**, and **vanilla JavaScript**—with **no external libraries or frameworks**. It supports the four basic arithmetic operations:

- **Addition (`+`)**
- **Subtraction (`−`)**
- **Multiplication (`×`)**
- **Division (`÷`)**

Additional features include:
- Decimal point support (with prevention of multiple decimals)
- Error handling for **division by zero**
- Clean display formatting (results rounded to 2 decimal places)
- Responsive UI with immediate visual feedback

---

## ⚙️ Working Mechanism

The calculator uses a **state machine** to manage user interactions. All logic is driven by a central `state` object that tracks the current phase of input and calculation.

### 🧠 State Object

```js
let state = {
    currentMode: "inputFirst",  // Tracks input phase
    num1: "",                   // First operand
    operater: "",               // Selected operator (+, −, ×, ÷)
    num2: "",                   // Second operand
    display: "0",               // What's shown on screen
    hasDeciaml: false           // Prevents multiple decimal points
}
```

### 🔄 Workflow & Modes

The calculator cycles through three main modes:

#### 1. **`inputFirst`** (Initial State)
- User enters the **first number**.
- Each digit appends to `state.display`.
- `state.num1` is kept in sync with `display`.
- If display is `"0"`, it gets replaced (no leading zeros).

#### 2. **`operaterSelected`**
- Triggered when the user clicks an **operator** (`+`, `−`, `×`, `/`).
- Waits for the **second number**.
- Clears the display in preparation for `num2`.

#### 3. **`inputSecond`**
- User enters the **second number**.
- Digits and decimal points are appended to `display`.
- `state.num2` is populated when an operator or `=` is pressed next.

#### 🔢 Calculation & Result
- When a **new operator** is pressed **after** entering `num2`, or when **`=`** is clicked:
  - The operation is performed using the `operate` lookup object.
  - Result is formatted to **2 decimal places** (unless it's an error).
  - Display updates, and the result becomes the new `num1` for chained operations.
- **Division by zero** shows: `"ZERO Division Error!"` (note: typo fixed in message).

#### 🧹 Clear (`C`) Button
- Resets all state to default:
  ```js
  {
      currentMode: "inputFirst",
      num1: "",
      operater: "",
      num2: "",
      display: "0",
      hasDeciaml: false
  }
  ```

#### 🔘 Decimal Point Handling
- Only **one decimal point** allowed per number.
- The `.` button is **disabled** after a decimal is entered.
- Re-enabled when a new number input begins (e.g., after operator or clear).

---

## 🛠️ Code Structure Highlights

### ✅ Operation Functions
```js
let add = (a, b) => Number(a) + Number(b);
let sub = (a, b) => Number(a) - Number(b);
let mult = (a, b) => Number(a) * Number(b);
let divide = (a, b) => Number(b) !== 0 ? Number(a) / Number(b) : "ZERO Division Error!";
```

### 🔑 Operation Lookup Object
```js
let operate = {
    "+": add,
    "−": sub,
    "×": mult,
    "÷": divide
}
```
> Note: Your HTML likely uses `x` and `/`, so ensure operator symbols match between HTML and JS.

### 🎯 Event Handling
- **Number buttons**: Update display based on current mode.
- **Operator buttons**: Trigger calculation if in `inputSecond`, or set operator if in `inputFirst`.
- **Equals (`=`)**: Performs final calculation without changing mode until next input.
- **Clear (`C`)**: Resets state completely.

---

## 📌 Notes & Known Considerations

- **Typo Fix**: The error message should read **"Division"**, not "Dvision".
- **Operator Symbols**: Ensure your HTML uses the same symbols as your `operate` keys (`+`, `-`, `x`, `/`).
- **Chaining Operations**: After a result is shown, pressing a new operator uses that result as `num1`—enabling continuous calculations.
- **Input Sanitization**: All inputs are safely converted to `Number()` to handle string inputs from `.textContent`.

---

## 🚀 How to Use

1. Clone or download the project.
2. Open `index.html` in any modern web browser.
3. Use the on-screen buttons to perform calculations.

---

## 📚 Built With

- **HTML5** – Structure
- **CSS3** – Styling and layout
- **Vanilla JavaScript** – Logic and interactivity

---

## 🎯 Learning Outcomes (The Odin Project)

This project reinforces:
- DOM manipulation
- Event handling
- State management
- Conditional logic
- Modular function design
- User experience (UX) considerations

---

> 💡 **Tip**: Try chaining operations like `5 + 3 × 2 =` → should give `16` (not `11`), since this calculator evaluates **left-to-right**, not using mathematical precedence (as specified in the Odin Project requirements).

---

✅ **Fully functional. No dependencies. Pure JavaScript.**

--- 
Absolutely! Here’s an updated **README.md** section that adds a **"Limitations & Future Improvements"** part—including the lack of a backspace/delete button and missing keyboard support—while keeping the tone professional and honest, as expected in open-source or learning-project documentation.

---

## ⚠️ Limitations & Future Improvements

While this calculator covers all requirements of The Odin Project’s Foundations curriculum, it has a few intentional or unintentional limitations that could be enhanced in a future version:

### 🔙 No Backspace (Delete) Functionality
- If a user accidentally enters a wrong digit, there’s **no way to delete** the last character.
- A **"⌫" (backspace)** or **"DEL"** button would greatly improve usability by allowing corrections without clearing the entire input.

### ⌨️ No Keyboard Support
- Currently, the calculator **only responds to mouse/touch clicks**.
- It **does not support keyboard input** (e.g., typing `5 + 3 Enter`).
- Adding `keydown` event listeners for digits (`0–9`), operators (`+`, `-`, `*`, `/`), `Enter` (=), `Escape` (clear), and `Backspace` would make it far more accessible and efficient.

### 🧮 Additional Possible Enhancements
- Support for **negative numbers** (e.g., via a `±` button).
- **Mathematical precedence** (e.g., `2 + 3 × 4 = 14`, not `20`) — though **not required** by The Odin Project.
- **History display** or memory functions (`M+`, `MR`, etc.).
- **Responsive design** improvements for mobile devices.
- **Error recovery**: After “Division by Zero”, allow new input without full reset.

> 💡 These features are **outside the scope** of the current assignment but would be excellent next steps for personal growth or portfolio expansion.

---


