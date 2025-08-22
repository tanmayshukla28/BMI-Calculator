window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
    let height = document.querySelector("#height").value.trim();
    let weight = document.querySelector("#weight").value.trim();
    let result = document.querySelector("#result");

    if (height === "" || isNaN(height) || height <= 0) {
        result.innerHTML = "⚠️ Provide a valid Height in cm!";
        return;
    }

    if (weight === "" || isNaN(weight) || weight <= 0) {
        result.innerHTML = "⚠️ Provide a valid Weight in kg!";
        return;
    }

    height = Number(height);
    weight = Number(weight);

    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
        result.innerHTML = `Underweight: <span style="color:orange;">${bmi}</span>`;
    } 
    else if (bmi >= 18.6 && bmi < 24.9) {
        result.innerHTML = `Normal: <span style="color:green;">${bmi}</span>`;
    } 
    else {
        result.innerHTML = `Overweight: <span style="color:red;">${bmi}</span>`;
    }
}
