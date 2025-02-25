const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => {
    if (input.value.trim() !== "") {
        output.textContent = input.value;
    } else {
        output.textContent = 'Anonymous';
    }
});