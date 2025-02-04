document.addEventListener("DOMContentLoaded", function () {
  const addMeButton = document.getElementById("add_me_button");
  addMeButton.addEventListener("click", () => {
    alert("someone wants to add me....");
  });
  addMeButton.addEventListener("mouseenter", () => {
    // alert("someone wants to add me....");
    addMeButton.classList.add("new_button");
  });
  addMeButton.addEventListener("mouseleave", () => {
    // alert("someone wants to add me....");
    addMeButton.classList.remove("new_button");
  });

  document.querySelector(".expand-details").addEventListener("click", () => {
    const details = document.querySelector(".additional-details");
    if (details.classList.contains("hidden")) {
      details.classList.remove("hidden");
      details.classList.add("show");
    } else {
      details.classList.remove("show");
      details.classList.add("hidden");
    }
  });
  document.querySelector(".contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name_input").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("text_area").value;
    alert(`${message} By:${name} email address ${email} `);
  });
});
