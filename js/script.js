// Future functions can go here
function init() {
  const color = document.querySelector("#color").value.slice(1);
  const schemeMode = document.querySelector("#scheme-mode").value;

  console.log(color, schemeMode);
  fetchColorScheme(color, schemeMode);
}

function fetchColorScheme(color, schemeMode) {
  fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${schemeMode}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
      renderColorScheme(data.colors);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function renderColorScheme(colors) {
  const outputContainer = document.querySelector("#color-scheme-output");
  outputContainer.innerHTML = "";

  colors.forEach((color) => {
    const colorWrapper = document.createElement("div");
    colorWrapper.classList.add("color-wrapper");

    const colorBlock = document.createElement("div");
    colorBlock.classList.add("color-block");
    colorBlock.style.backgroundColor = color.hex.value;

    const colorCode = document.createElement("span");
    colorCode.classList.add("color-code");
    colorCode.textContent = color.hex.value;

    colorWrapper.append(colorBlock, colorCode);
    outputContainer.appendChild(colorWrapper);
  });
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
