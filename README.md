# **Simple Calculator**:
# 
## Description:
 - This is the final odin Project foundation project where i have built just using vanila js (Html, css and JavaScript). 
 - This calculator has basic arthematci operation like 
 - **addition** : lets the user to add the two numbers. 
 - **Subtraction** : lets the user to subtract the two numbers. 
 - **Mulitplication** : lets the user to Multiply the two numbers. 
 - **Division** : lets the user to divid the two number

 ## working Mehancism:
    let state = {
        'currentMode': "inputFirst",
        'num1': "",
        'operater': "",
        'num2': "",
        'display': '0'
    }
 - **Define the state where the state will handle every update of the users click**

 ### work flow:
       if (state.currentMode === "inputFirst") {
            if (state.display === '0') {
                state.display = clickedNumber;
            } else {
                state.display += clickedNumber;
            }
            // store value to num1
            state.num1 = state.display;
            updateDisplay();

        }
 - first the user click **num1** if the display is 0 then add the click to num1 as state.num1 = "clicked number" (eg, 2).
 and update the display in screen  

 - 