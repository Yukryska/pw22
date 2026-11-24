const playButton = document.querySelector(".video-cover");
const video = document.querySelector("#petworld-video");

playButton.addEventListener("click", () => {
  playButton.hidden = true;
  video.hidden = false;
  video.focus();
  video.play().catch(() => {
    // The native controls remain available if the browser blocks autoplay.
  });
});

const newsletter = document.querySelector("#newsletter");
const newsletterStatus = document.querySelector("#newsletter-status");

newsletter.addEventListener("submit", (event) => {
  event.preventDefault();
  newsletter.reset();
  newsletterStatus.textContent = "Demo form. Your address was validated in this browser.";
  newsletterStatus.hidden = false;
});

const dialog = document.querySelector(".info-dialog");
const dialogText = {
  faq: ["FAQ", "Explore the services above for pet food, toys, veterinary treatments, and grooming."],
  privacy: ["Privacy policy", "The demo newsletter validates the email address in your browser and clears the field."],
  terms: ["Terms of use", "Petworld is a landing-page demonstration for a web development course."]
};

document.querySelectorAll("[data-dialog]").forEach((button) => {
  button.addEventListener("click", () => {
    const [title, description] = dialogText[button.dataset.dialog];
    dialog.querySelector("h2").textContent = title;
    dialog.querySelector("p").textContent = description;
    dialog.showModal();
  });
});
