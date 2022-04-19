const button = document.querySelector('#button_id')
const input = document.querySelector('#input_id')

input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        alert('Enter is pressed!');
    }
});

button.addEventListener("click", function(event) {
    alert("You have clicked on the button!");
});
