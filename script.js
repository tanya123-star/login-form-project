const form = document.querySelector("form");
const fields = [
  { input: document.getElementById("username"), message: "Username is required" },
  { input: document.getElementById("password"), message: "Password is required" },
];

function getErrorElement(input) {
  return document.getElementById(`${input.id}-error`);
}

function clearSuccess() {
  const success = document.getElementById("form-success");
  if (success) {
    success.remove();
  }
}

function showError(input, message) {
  let error = getErrorElement(input);
  if (!error) {
    error = document.createElement("p");
    error.id = `${input.id}-error`;
    error.className = "error";
    error.setAttribute("role", "alert");
    input.insertAdjacentElement("afterend", error);
  }
  error.textContent = message;
  input.setAttribute("aria-invalid", "true");
  input.setAttribute("aria-describedby", error.id);
}

function clearError(input) {
  const error = getErrorElement(input);
  if (error) {
    error.remove();
  }
  input.removeAttribute("aria-invalid");
  input.removeAttribute("aria-describedby");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearSuccess();
  let isValid = true;

  for (const { input, message } of fields) {
    if (input.value.trim() === "") {
      showError(input, message);
      isValid = false;
    } else {
      clearError(input);
    }
  }

  if (isValid) {
    const success = document.createElement("p");
    success.id = "form-success";
    success.className = "success";
    success.setAttribute("role", "status");
    success.textContent = "Logging in…";
    form.appendChild(success);
  }
});

for (const { input } of fields) {
  input.addEventListener("input", () => {
    clearSuccess();
    if (input.value.trim() !== "") {
      clearError(input);
    }
  });
}
