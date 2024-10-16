let isCaptchaVisible = false;

function showCaptcha() {
    const captchaElement = document.querySelector(".h-captcha");
    if (!isCaptchaVisible) {
        captchaElement.style.display = "block";
        isCaptchaVisible = true;
    }
}

function toggleCaptcha() {
    const emailValue = document.getElementById("email").value;
    const captchaElement = document.querySelector(".h-captcha");

    if (emailValue.includes("@")) {
        captchaElement.style.display = "block";
        captchaElement.style.opacity = "1";
    } else {
        captchaElement.style.opacity = "0";
        setTimeout(() => {
            hcaptcha.reset();
            isCaptchaVisible = false;
        }, 30000);
    }
}

function showAlert(message, isSuccess = false) {
    const alertElement = document.createElement("div");
    alertElement.textContent = message;
    Object.assign(alertElement.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: isSuccess ? "#4CAF5044" : "#f4433644",
        backdropFilter: "blur(10px)",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        zIndex: "1000",
        transition: "opacity 0.5s"
    });

    document.body.appendChild(alertElement);

    setTimeout(() => {
        alertElement.style.opacity = "0";
        setTimeout(() => {
            document.body.removeChild(alertElement);
        }, 500);
    }, 3000);
}

function validateCaptcha() {
    if (!hcaptcha.getResponse()) {
        showAlert("Please complete the hCaptcha");
        return false;
    }
    return true;
}

function validateForm(event) {
    event.preventDefault();
    if (isCaptchaVisible) {
        if (validateCaptcha()) {
            submitForm();
        }
    } else {
        showCaptcha();
    }
}

function submitForm() {
    const formElement = document.getElementById("contact-form");
    const formData = new FormData(formElement);

    if (validateCaptcha()) {
        fetch(
            "https://docs.google.com/forms/d/e/1FAIpQLSfq7qrgGaoaFv18VVC-ZFeFeq4o9YpuNRUds3yfCxKU6S0Tow/formResponse",
            { method: "POST", body: formData, mode: "no-cors" }
        )
            .then(() => {
                showAlert("Form submitted successfully!", true);
                formElement.reset();
                isCaptchaVisible = false;
                hcaptcha.reset();
            })
            .catch(() => {
                showAlert("There was an error submitting the form.");
                formElement.reset();
                isCaptchaVisible = false;
                hcaptcha.reset();
            });
    }
}

document
    .getElementById("contact-form")
    .addEventListener("submit", validateForm);
