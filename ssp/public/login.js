document.addEventListener("DOMContentLoaded", function (event) {
    const loginForm = document.querySelector("#login-form");
    const registrationForm = document.querySelector("#registration-form");
    const modal = document.querySelector("#welcomeModal");
    const modalClose = document.querySelector("#modalClose");
    const modalContent = document.querySelector(".modal-content-inner");
    
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        showModal("Welcome!", "Login successful!");
    });

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        showModal("Welcome!", "Sign-up successful!");
    });

    function showModal(title, content) {
        modalContent.innerHTML = `
          <h2>${title}</h2>
          <p>${content}</p>
          <button class="button register-button">Get Started!</button>
        `;
        modal.style.display = "block";

        const registerButton = document.querySelector(".register-button");
        if (registerButton) {
            registerButton.addEventListener("click", function (event) {
                window.location.href = 'index1.html';
            });
        }
    }

    modalClose.addEventListener("click", function (event) {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    const showOTPButton = document.querySelector(".show-otp-button");
    const otpContainer = document.querySelector(".otp-container");
    const otpInputFields = document.querySelectorAll(".otp-input");

    showOTPButton.addEventListener("click", function () {
        otpContainer.style.display = "flex";
    });

    otpInputFields.forEach(function (inputField, index) {
        inputField.addEventListener("input", function () {
            if (index < otpInputFields.length - 1 && inputField.value) {
                otpInputFields[index + 1].focus();
            }
        });
    });

    otpInputFields[otpInputFields.length - 1].addEventListener("input", function () {
        if (otpInputFields[otpInputFields.length - 1].value) {
            // Perform OTP verification here
            showModal("OTP Verified", "OTP verification successful!");
        }
    });
});

