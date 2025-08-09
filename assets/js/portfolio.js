document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let status = document.getElementById("formStatus");

    if (name === "" || email === "" || message === "") {
        status.style.color = "red";
        status.textContent = "Please fill in all fields.";
        return;
    }

    if (!validateEmail(email)) {
        status.style.color = "red";
        status.textContent = "Please enter a valid email address.";
        return;
    }

    status.style.color = "green";
    status.textContent = "Your message has been sent successfully!";

    document.getElementById("contactForm").reset();
});

function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
