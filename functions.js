function generatePassword() {
    // Define the character sets
    var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    var numericChars = '0123456789';
    var specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    // Combine character sets based on user choices
    var allChars = '';
    if (document.getElementById('uppercaseCheckbox').checked) {
        allChars += uppercaseChars;
    }
    if (document.getElementById('lowercaseCheckbox').checked) {
        allChars += lowercaseChars;
    }
    if (document.getElementById('numericCheckbox').checked) {
        allChars += numericChars;
    }
    if (document.getElementById('specialCheckbox').checked) {
        allChars += specialChars;
    }

    // Get the desired password length
    var passwordLength = document.getElementById('passwordLength').value;

    // Generate the password
    var generatedPassword = '';
    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        generatedPassword += allChars.charAt(randomIndex);
    }

    // Display the generated password
    document.getElementById('passwordOutput').textContent = generatedPassword;
}

function toggleCheckbox(element) {
    var checkbox = element.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;

    if (checkbox.checked) {
        element.classList.add('active');
    } else {
        element.classList.remove('active');
    }
}

function copyToClipboard() {
    var passwordOutput = document.getElementById('passwordOutput');

    // Check if the password is not generated yet (empty)
    if (!passwordOutput.textContent.trim()) {
        // Display a custom alert message for not generated password
        var notGeneratedAlert = document.createElement('div');
        notGeneratedAlert.textContent = 'Password is not generated yet!';
        notGeneratedAlert.className = 'alert-not-generated';

        // Append the alert message to the body
        document.body.appendChild(notGeneratedAlert);

        // Hide the alert after a timeout of 2000 milliseconds (2 seconds)
        setTimeout(function () {
            notGeneratedAlert.style.display = 'none';
        }, 2000);
        return;
    }

    var range = document.createRange();
    range.selectNode(passwordOutput);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    // Display a custom alert message for copied password
    var alertMessage = document.createElement('div');
    alertMessage.textContent = 'Done!!! Password copied to clipboard!';
    alertMessage.className = 'alert';

    // Append the alert message to the body
    document.body.appendChild(alertMessage);

    // Hide the alert after a timeout of 2000 milliseconds (2 seconds)
    setTimeout(function () {
        alertMessage.style.display = 'none';
    }, 2000);
}

// Simulate default active state for checkboxes
document.addEventListener('DOMContentLoaded', function () {
    var checkboxes = document.querySelectorAll('.uppercaseCheckbox input, .lowercaseCheckbox input, .numericCheckbox input, .specialCheckbox input');

    checkboxes.forEach(function (checkbox) {
        checkbox.checked = true; // Check the checkbox
        checkbox.parentElement.classList.add('active'); // Add the "active" class
    });
});


