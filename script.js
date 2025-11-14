// for addition
let add = (a, b) => {
    return Number(a) + Number(b);
}

// for subtraction
let sub = (a, b) => {
    return Number(a) - Number(b);
}

// for multiplication
let mult = (a, b) => {
    return Number(a) * Number(b);
}


// for division
let divide = (a, b) => {
    return Number(b) !== Number(0) ? Math.round(Number(a) / Number(b)) : "ZERO Dvision Error!";
}

// create obj to store the key:value pairs
let operate = {
    "+": add,
    "-": sub,
    "x": mult,
    "/": divide
}

let result = $(".result");
// console.log(result);

// manage state
let state = {
    'currentMode': "inputFirst",
    'num1': "",
    'operater': "",
    'num2': "",
    'display': '0'
}
function updateDisplay() {
    result.textContent = state.display;


}
function updateNum1() {
    // collect the calculated result to num1
    state.num1 = state.display;
    // console.log("num1 as result: " + state.num1);
    //made the num2 and operaotr empty
    state.num2 = "";
    // console.log("num2 as empty: " + state.num2);
    state.operater = "";
    // console.log("operater :" + state.operater);
}
// calling updateDisplay() to show the result
updateDisplay();
function $(item) {
    return item == ".number" || item == ".operater" ?
        document.querySelectorAll(item) : document.querySelector(item);

}

// state management 

// flag for state management of the data flow

//event for number click
$(".number").forEach(btn => {
    btn.addEventListener("click", (e) => {
        let clickedNumber = e.target.textContent;
        // console.log("clicked number "  + clickedNumber);
        if (state.currentMode === "inputFirst") {
            if (state.display === '0') {
                state.display = clickedNumber;
            } else {
                state.display += clickedNumber;
            }
            // store value to num1
            state.num1 = state.display;
            updateDisplay();

        } else if (state.currentMode === "operaterSelected") {
            state.currentMode = "inputSecond";
            state.display = clickedNumber;
            updateDisplay();

        } else if (state.currentMode == "inputSecond") {
            state.display += clickedNumber;
            updateDisplay();
        }

    });
});


//event for operator click
$(".operater").forEach(op => {
    op.addEventListener("click", (e) => {
        let operatorClicked = e.target.textContent;
        if (state.currentMode == "inputFirst") {

            //after clicking num1 
            state.operater = operatorClicked;
            state.currentMode = "operaterSelected";

            // console.log("Mode changed to OPERATOR_SELECTED");
            // console.log("num1:", state.num1, "operater:", state.operater);

        } else if (state.currentMode == "inputSecond") {
            state.currentMode = "showResult";
            state.num2 = state.display;
            switch (state.operater) {
                case "+": value = operate[state.operater](state.num1, state.num2); break;
                case "-": value = operate[state.operater](state.num1, state.num2); break;
                case "x": value = operate[state.operater](state.num1, state.num2); break;
                case "/": value = operate[state.operater](state.num1, state.num2); break;
            }
            let result = value;
            state.display = result;
            updateNum1();

        }
        if (state.currentMode == "showResult") {
            state.currentMode = "operaterSelected";
            state.operater = operatorClicked;
        }
        updateDisplay();

       

    });
});

$(".equal").addEventListener("click", (e) => {
    // TO-do
    // let equal = e.target.textContent;
    // console.log("isEqual " + equal);
    if (state.currentMode == "inputSecond") {
        state.currentMode = "showResult";
        state.num2 = state.display;
        switch (state.operater) {
            case "+": value = operate[state.operater](state.num1, state.num2); break;
            case "-": value = operate[state.operater](state.num1, state.num2); break;
            case "x": value = operate[state.operater](state.num1, state.num2); break;
            case "/": value = operate[state.operater](state.num1, state.num2); break;
        }
        let result = value;
        state.display = result;
        updateNum1();
    }
    updateDisplay();




});

$(".clear").addEventListener("click", () => {
    state.currentMode = "inputFirst",
        state.num1 = "",
        state.operater = "",
        state.num2 = "",
        state.display = "0"
    updateDisplay();
});







// let num1;
// let num2;
// let operator;

// function getValue(num1, num2, operator) {
//     return operator in operate ? operate[operator](num1, num2):`Invalid operator ${operator}`;

// }

// console.log(getValue(3, 5, "+"));
// console.log(getValue(3, 5, "-"));
// console.log(getValue(3, 5, "%"));



