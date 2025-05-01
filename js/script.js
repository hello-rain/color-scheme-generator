// Future functions can go here
function init() {
  const color = document.querySelector("#color").value;
  const schemeMode = document.querySelector("#scheme-mode").value;

  console.log(color, schemeMode);
  fetchColorScheme(color, schemeMode);
}

document.addEventListener("DOMContentLoaded", () => {
  // Trigger the color scheme generation on page load
  init();

  // Add event listener for form submission
  document
    .querySelector("#color-scheme-generator")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      init();
    });
});

// 0. When get color scheme button is clicked, generate color scheme.
// 1. Prevent default form submission
// 2. Select color and color scheme values
// 3. Make an API call to Colors API
// 4. Render UI with generated color scheme and their hex values
// 5. Stretch goal: click hex values to copy to clipboard

// 1. Choose "seed color" with an ‹input
// type="color" />
// 2. Choose color scheme mode in a
// < select> box
// 3. Clicking button makes request to the
// Color API to get a color scheme
// 4. Display the scheme colors and hex
// values on the page
// 5. Stretch goal: click hex values to copy
// to clipboard
