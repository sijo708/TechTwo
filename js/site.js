function getValues() {
    let userMessage = document.getElementById('message').value;

    if (userMessage.length < 2) {
        Swal.fire({
            icon: 'error',
            backdrop: false,
            title: 'Oops',
            text: 'Please enter at least 2 characters to check for palindrome.'
        });

        return;
    }

    // send the input to be checked if it is a palindrome
    let isPalindrome = checkForPalindrome(userMessage);

    // send results to be displayed
    let reversedInput;
    if (isPalindrome) {
        reversedInput = 'is';
    } else {
        reversedInput = 'is not';
    }

    let stringObject = {
        input: userMessage,
        reversedInput: reversedInput
    };

    displayResults(stringObject);
}

function checkForPalindrome(userMessage) {
    let string = userMessage.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversedString = string.split('').reverse().join('');

    return string === reversedString;
}

function displayResults(stringObject) {
    let alertBox = document.getElementById('alert');
    alertBox.classList.remove('invisible');

    if (stringObject.reversedInput === 'is') {
        // Display success message
        alertBox.classList.replace("alert-danger", "alert-success");
        alertBox.innerHTML = `<div><h4>Well done! You entered a Palindrome!</h4>This is a palindrome! <span class="fw-bold" id="results"></span></div>`;
        document.getElementById('results').textContent = stringObject.input;
    } else {
        // Display error message
        alertBox.classList.replace("alert-success", "alert-danger");
        alertBox.innerHTML = `<div><h4>Oh no!</h4>This is not a palindrome! <span class="fw-bold" id="results"></span></div>`;
        document.getElementById('results').textContent = stringObject.input;
    }
}