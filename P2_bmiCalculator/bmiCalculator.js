const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const status = document.querySelector("#status");

  if (height === "" || height < 0 || isNaN(height)) {
    status.textContent = "Please enter a valid height.";
    status.style.color = "red";
    result.innerHTML = 0;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    status.textContent = "Please enter a valid weight.";
    status.style.color = "red";
    result.innerHTML = 0;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = bmi;

    if (bmi < 18.6) {
      status.textContent = "You are underweight.";
      status.style.color = "red";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      status.textContent = "Your weight is normal.";
      status.style.color = "green";
    } else if (bmi > 24.9) {
      status.textContent = "You are overweight.";
      status.style.color = "red";
    }
  }
});
