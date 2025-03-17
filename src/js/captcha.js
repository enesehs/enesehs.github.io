let isCaptchaVisible = false;

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
        setTimeout(() => document.body.removeChild(alertElement), 500);
    }, 3000);
}

function validateCaptcha() {
    if (!hcaptcha.getResponse()) {
        showAlert("Please complete the hCaptcha");
        return false;
    }
    return true;
}

function submitForm(event) {
    if (event) event.preventDefault();
    
    const formElement = document.getElementById("contactForm");
    if (!validateCaptcha()) return;
    
    const formData = new FormData(formElement);

    fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfq7qrgGaoaFv18VVC-ZFeFeq4o9YpuNRUds3yfCxKU6S0Tow/formResponse",
        { method: "POST", body: formData, mode: "no-cors" }
    )
        .then(() => {
            showAlert("Form submitted successfully!", true);
            formElement.reset();
            hcaptcha.reset();
            toggleCaptchaVisibility(false);
        })
        .catch(() => {
            showAlert("There was an error submitting the form.");
            formElement.reset();
            hcaptcha.reset();
            toggleCaptchaVisibility(false);
        });
}

function toggleCaptchaVisibility(show) {
    const captchaElement = document.querySelector(".h-captcha");
    if (!captchaElement) return;
    
    isCaptchaVisible = show;
    captchaElement.style.opacity = show ? '1' : '0';
    
    if (!show) {
        setTimeout(() => {
            if (!isCaptchaVisible) captchaElement.style.opacity = '0';
        }, 300);
    } else {
        captchaElement.style.opacity = '1';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const contactForm = document.getElementById("contactForm");
    
    toggleCaptchaVisibility(false);
    
    if (emailInput) {
        emailInput.addEventListener('input', () => 
            toggleCaptchaVisibility(emailInput.value.includes('@'))
        );
    }
    
    if (contactForm) {
        contactForm.addEventListener("submit", submitForm);
    }
});
