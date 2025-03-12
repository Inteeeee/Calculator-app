// Function to add value to the display
function appendValue(value) {
    let display = 
document.getElementById("display");
       display.value += value;
}
// function to clear the display
function clearDisplay() {
    document.getElementById("display").value = "";
}
// function to delete the last character 
function deleteLast() {
    let display = 
document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
// function to calculate the results 
function calculateResults() {
    let display =
document.getElementById("display");
   try {
    if (display.value.trim() === "") {
        display.value = ""; // prevent empty evaluation
    } else{
        display.value =
        eval(display.value); // evaluate the maths expression
    }
} catch (error) {
    display.value = "Error"; // display error if calculation fails
}
}
// function to handle keyboard input 
document.addEventListener("keydown", function 
    (event) {
        let key = event.key;
        let allowedkey = 
        "0123456789+-*%/.^=BackspaceEnter";

        if (allowedkey.includes(key)) {
            event.preventDefault();   //prevent default behaviour

            if (key === "Enter") {
                calculateResults();
            }
            else if (key === "=") {
                calculateResults();
            }
            else {
                appendValue(key);
            }
        }});