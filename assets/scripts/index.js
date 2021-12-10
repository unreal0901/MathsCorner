const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav_links");
const navLinks = document.querySelectorAll(".nav_links li");
burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = ``;
    } else {
      link.style.animation = `navLinks_fade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });
});

window.addEventListener("resize", () => {
  // handle drop down on responsive;
  let dropdown = document.querySelector(".dropdown");
  let dropdownContent = document.querySelector(".dropdown-content");

  if (document.documentElement.clientWidth <= 768) {
    dropdown.classList.remove("dropdownHover");
    dropdown.addEventListener("click", () => {
      dropdownContent.classList.toggle("showContentOnClick");
    });
  } else if (document.documentElement.clientWidth > 768) {
    dropdown.classList.add("dropdownHover");
    dropdownContent.classList.remove("showContentOnClick");
  }
});

let mathQuotes = [
  " There should be no such thing as boring mathematics.— Edsger W. Dijkstra, Dutch systems scientist",
  "Pure mathematics is, in its way, the poetry of logical ideas.— Albert Einstein, German theoretical physicist",
  "Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers.— Shakuntala Devi, Indian writer and mental calculator",
  " Mathematics is the most beautiful and most powerful creation of the human spirit.— Stefan Banach, Polish mathematician",
  "  What is mathematics? It is only a systematic effort of solving puzzles posed by nature.— Shakuntala Devi",
];

let quoteHolder = document.querySelector(".quoteHolder");

quoteHolder.textContent =
  `"` + mathQuotes[Math.floor(Math.random() * mathQuotes.length)] + `"`;
