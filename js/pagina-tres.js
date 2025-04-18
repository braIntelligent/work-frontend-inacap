const form = document.getElementById("form");
const divError = document.getElementById("error");
const sendButton = document.getElementById("send");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  divError.innerHTML = "";

  const unordedList = document.createElement("ol");
  unordedList.classList = "ul";

  const value_name = document.getElementById("name").value;
  const value_email = document.getElementById("email").value;
  const value_number = document.getElementById("number").value;

  const errors = [];

  if (value_name.length < 3) {
    errors.push("Nombre inválido.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    !emailRegex.test(value_email) ||
    (!value_email.includes("gmail.com") && !value_email.includes("hotmail.com"))
  ) {
    errors.push("Email inválido.");
  }

  if (value_number.length !== 9 || isNaN(value_number)) {
    errors.push("Número inválido.");
  }

  if (errors.length > 0) {
    errors.forEach((error) => {
      const listItem = document.createElement("li");
      listItem.classList = "ul";
      listItem.textContent = error;
      unordedList.appendChild(listItem);
      divError.appendChild(unordedList);
    });
  } else {
    window.location.href = "./pagina-cuatro.html<"
  }
});
