const button = document.querySelector('#button')
const input = document.querySelector('#input')

// function button_function(event) {
//     alert("You have clicked on the button!");
// }

// button.addEventListener("click", button_function);

input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        alert('Enter is pressed!');
    }
});

button.addEventListener("click", function(event) {
    alert("You have clicked on the button!");
});
