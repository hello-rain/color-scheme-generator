// Future functions can go here
function init() {
  // Remove # from the color code to format it for the API request
  const seedColor = document.querySelector("#seed-color").value.slice(1);
  const schemeMode = document.querySelector("#scheme-mode").value;

  console.log(seedColor, schemeMode);
  fetchColorScheme(seedColor, schemeMode);
}

function fetchColorScheme(seedColor, schemeMode) {
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${schemeMode}`
  )
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

    // Add event listener to copy color code to clipboard
    [colorBlock, colorCode].forEach((element) => {
      element.addEventListener("click", () => {
        navigator.clipboard.writeText(colorCode.textContent).then(() => {
          // Temporarily change the content to "Copied!"
          const originalText = colorCode.textContent;
          const originalColor = colorCode.style.color;

          colorCode.textContent = "Copied!";
          colorCode.classList.add("copied");

          setTimeout(() => {
            colorCode.textContent = originalText; // Revert text
            colorCode.classList.remove("copied"); // Revert color
          }, 500);
        });
      });
    });

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
