document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".dog-profiles");
  // use foreach, for loop, while loop, map
  fetch("../data/dogProfiles.json")
    .then((response) => response.json())
    .then((dogProfiles) => {
      console.log("profiles>>", dogProfiles);
      dogProfiles.map((profile) => {
        console.log("unique", profile);
        const dogCard = document.createElement("article");
        dogCard.className = "dog-card";
        dogCard.innerHTML = `
       <img src="${profile.image}">
       <h3>${profile.name}</h3>
       <p>${profile.breed}, ${profile.age} years old</p>
    `;
        dogCard.onclick = () => {
          window.location = `./HTML/profile.html?id=${profile.id}`;
        };
        container.appendChild(dogCard);
      });
    })
    .catch((error) => {
      console.log("Error fetching data", error);
      container.innerHTML = `<p>Failed to load data</p>`;
    });
});
