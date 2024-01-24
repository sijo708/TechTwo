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

    return string == reversedString;
}

function displayResults(stringObject) {
    // get a copy of the template
    let template;

    if (stringObject.reversedInput == 'is') {
        // -if it is a palindrome, select the success template
        template = document.getElementById('success-template')
    } else {
        // -if it is not a palindrome, select the danger template
        template = document.getElementById('danger-template')
    }
    
    let templateCopy = template.content.cloneNode(true);
    // put the orginal message in he <p class="input-message">
    templateCopy.querySelector('.input-message').textContent = `You enterd: ${stringObject.input}`;
    // put the reversed message in he <p class="reversed-message">
    templateCopy.querySelector('.reversed-message').textContent = `Your message reveresd is: ${stringObject.input.split('').reverse().join('')}`;

    // add our copy of the template to the div with ID "results"
    document.getElementById('results').prepend(templateCopy);
}