 function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var result = document.getElementById("result");

    if (!weight || !height || height <= 0) {
        result.innerHTML = "<div class='error'>Please enter valid values</div>";
        return;
    }

    var bmi = weight / (height * height);
    var category = "";
    var className = "";

    if (bmi < 18.5) {
        category = "Underweight";
        className = "under";
    } 
    else if (bmi < 25) {
        category = "Normal weight";
        className = "normal";
    } 
    else if (bmi < 30) {
        category = "Overweight";
        className = "over";
    } 
    else {
        category = "Obese";
        className = "obese";
    }

    result.innerHTML = `
        Your BMI: ${bmi.toFixed(1)}
        <div class="status ${className}">${category}</div>
    `
}