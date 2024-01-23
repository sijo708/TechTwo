function getValues() {
    let userMessage = document.getElementById('message').value;

    if (userMessage.length < 2) {
        Swal.fire({
            icon: 'error',
            backdrop: false,
            title: 'Oops',
            text: 'Please enter at least 2 characters to check for palindrome.'
        });
    } else {
        // send the input to be checked if it is a palindrome
        let isPalindrome = checkForPalindrome(userMessage);
        // send results to be displayed
        displayResults(isPalindrome);
    }
}

function checkForPalindrome(userMessage) {
    let string = userMessage.replace(/\s+/g, '').toLowerCase();
    let reversedString = string.split('').reverse().join('');

    return string === reversedString;
}

function displayResults(isPalindrome) {
    let resultMessage;

    if (isPalindrome) {
        resultMessage = 'is';
    } else {
        resultMessage = 'is not';
    }

    document.getElementById('result').innerHTML =
        `The entered string ${resultMessage} a palindrome.`;

    document.getElementById('alert').classList.remove('invisible');
}
