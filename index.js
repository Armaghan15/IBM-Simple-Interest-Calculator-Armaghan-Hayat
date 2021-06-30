document.getElementById("rate").addEventListener("change", updateRate);


// Function for updating the value of the the interest rate when the slider is moved
function updateRate() {
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
    rate = rateval;
}



// Selecting the button element from the HTML and adding a method on it once clicked
document.getElementById("submitButton").addEventListener("click", function() {

    // Grabing all the form input values from the user
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let result = document.getElementById("result");

    // Changing the year number to a definte year
    let year = new Date().getFullYear()+parseInt(years);

    
    // Checking if the Principal amount entered is equal to or less than 0
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } else {
        // Calculating the interest based on the user inputs
        let interest = principal * years * rate/100;
        console.log(interest)

        // Editing the result from the HTML dynamically with dynamic string literalls
        result.innerHTML = `
        <div class="output-text">
            <span>If you deposit <span class="yellow-highlight">${principal}</span>,</span><br>
            <span>at an interest rate of <span class="yellow-highlight">${rate}</span>.</span><br>
            <span>You will receive an amount of <span class="yellow-highlight">${interest}<span>,</span><br>
            <span>in the year <span class="yellow-highlight">${year}</span></span>
        </div>
        `
    }
});
