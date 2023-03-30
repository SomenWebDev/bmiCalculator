const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", function () {
  const weight = Number(weightInput.value);
  const height = Number(heightInput.value);

  const bmi = (weight / (height * height)).toFixed(2);

  //   result.innerHTML = "<h3>Your BMI is: " + bmi.toFixed(2) + "</h3>";
  if (isNaN(bmi)) {
    result.innerHTML = "Please enter valid values for weight and height.";
  } else {
    result.innerHTML = `Your BMI is ${bmi}.`;
  }
});
