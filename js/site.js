function getValues() {
    let userMessage = document.getElementById('message').value;

    // Process the input to remove non-alphanumeric characters and convert to lowercase
    let processedMessage = userMessage.toLowerCase().replace(/[^a-z0-9]/gi, '');

    // Check if the processed message is less than 2 characters
    if (processedMessage.length < 2) {
        Swal.fire({
            icon: 'error',
            backdrop: false,
            title: 'Oops',
            text: 'Please enter at least 2 alphanumeric characters to check for palindrome.'
        });

        return;
    } else {
        // Check if the processed message is a palindrome
        let isPalindrome = checkForPalindrome(processedMessage);
        // Reverse the original user message for display
        let userMessageReversed = reverseString(userMessage);

        // Create an object with the original and reversed messages and the palindrome result
        let results = {
            input: userMessage,
            reversed: userMessageReversed,
            isPalindrome: isPalindrome
        };

        // Display the results
        displayResults(results);
    }
}

function displayResults(results) {
    let alert = document.getElementById('alert');
    alert.classList.remove('invisible', 'alert-success', 'alert-danger');

    if (results.isPalindrome == true) {
        // Make the alert green for success
        alert.classList.add('alert-success');
        alert.querySelector('h4').innerHTML = 'Well Done! You entered a palindrome';
    } else {
        // Make the alert red for failure
        alert.classList.add('alert-danger');
        alert.querySelector('h4').innerHTML = 'Oh No! That is not a palindrome';
    }

    // Display the input and reversed messages in the alert body
    alert.querySelector('p').innerHTML = `You entered: <b>${results.input}</b>.<br /> Your message reversed is: <b>${results.reversed}</b>`;
}

function checkForPalindrome(input) {
    // The input is already processed (lowercased and non-alphanumeric characters removed)
    let reversed = reverseString(input);

    // Check if the reversed string is the same as the input
    let isPalindrome = reversed === input;

    // Return a value indicating whether it is or is not a palindrome
    return isPalindrome;
}

function reverseString(inputString) {
    let result = '';

    // Loop through the string from the end towards the beginning
    for (let index = inputString.length - 1; index >= 0; index--) {
        result += inputString[index];
    }

    return result;
}
