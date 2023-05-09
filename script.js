const SemesterFilter = document.querySelector("#semester-filter");
const courses = document.querySelectorAll(".ChooseTopic");

SemesterFilter.addEventListener("change", () => {
  const selectedOption = SemesterFilter.value;
  courses.forEach((courses) => {
    if (selectedOption === "All") {
      courses.style.display = "flex";
    } else if (selectedOption === "Semester 2") {
      if (courses.querySelector(".Topic").id === "sem2") {
        courses.style.display = "flex";
      } else {
        courses.style.display = "none";
      }
    } else if (selectedOption === "Semester 4") {
      if (courses.querySelector(".Topic").id === "sem4") {
        courses.style.display = "flex";
      } else {
        courses.style.display = "none";
      }
    } else if (selectedOption === "Semester 6") {
      if (courses.querySelector(".Topic").id === "sem6") {
        courses.style.display = "flex";
      } else {
        courses.style.display = "none";
      }
    } else {
      courses.style.display = "none";
    }
  });
});

function websiteVisits(response) {
  document.querySelector("#visits").textContent = response.value;
}

const visitButtons = document.querySelectorAll(".Visit_Button");

// Get the loading container with the class name "loading-container"
const loadingContainer = document.querySelector(".loading-container");
loadingContainer.style.display = "none";
// Add event listener to each button
visitButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Show the loading container
    loadingContainer.style.display = "flex";

    // Set a timeout to hide the loading container after 5 seconds and redirect to the link
    setTimeout(function () {
      loadingContainer.style.display = "none";
      // Open the link in a new window or tab
      window.open(button.parentElement.href, "_blank");
    }, 5000);
  });
});
