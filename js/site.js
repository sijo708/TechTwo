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
    } else {
        let isPalindrome = checkForPalindrome(userMessage);
        let userMessageReversed = reverseString(userMessage);

        let results = {
            input: userMessage,
            reversed: userMessageReversed,
            isPalindrome: isPalindrome
        };

        displayResults(results);
    }
}

function displayResults(results) {
    let alert = document.getElementById('alert');
    alert.classList.remove('invisible', 'alert-success', 'alert-danger');

    if (results.isPalindrome == true) {
        // make the alert green
        alert.classList.add('alert-success');
        // make the header say success
        alert.querySelector('h4').innerHTML = 'Well Done! You entered a palindrome';
    } else {
        alert.classList.add('alert-danger');
        alert.querySelector('h4').innerHTML = 'Oh No! That is not a palindrome';
    }

    // display the input & reverse in the body
    alert.querySelector('p').textContent = `You entered: ${results.input}. Your message reversed is: ${results.reversed}`;
}

function checkForPalindrome(input) {
    // take the user input and reverse it
    let lowerCaseInput = input.toLowerCase();
    lowerCaseInput = lowerCaseInput.replace(/[^a-z0-9]/gi, '');

    let reversed = reverseString(lowerCaseInput);

    // see if the reversed string is the same as the input
    let isPalindrome = reversed == lowerCaseInput;

    // return a value indicating whether it is or is not a palindrome
    return isPalindrome;
}

function reverseString(inputString) {
    let result = '';

    // loop through the string from the end towards the beginning
    for (let index = inputString.length - 1; index >= 0; index--) {
        result += inputString[index];
    }

    return result;
}