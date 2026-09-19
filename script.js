const themeButton = document.getElementById("darkmodebutton");

if (themeButton) {
  const updateThemeLabel = () => {
    const isDarkMode = document.body.classList.contains("dark-mode");
    themeButton.textContent = isDarkMode ? "Light mode" : "Dark mode";
  };

  themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    updateThemeLabel();
  });

  updateThemeLabel();
}

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formMessage = document.getElementById("form-message");
    if (formMessage) {
      formMessage.textContent = "Thank you! Your message has been received.";
    }

    this.reset();
  });
}
