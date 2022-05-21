const currency1 = document.getElementById("currency1");
const currency2 = document.getElementById("currency2");
const form = document.getElementById("currency-form");

// Translation object
const dictionary = {
    "USD": "American Dollar",
    "EUR": "European Euro",
    "JPY": "Japanese Yen", 
    "GBP": "British Pound",
    "CHF": "Swiss Franc",
    "CAD": "Canadian Dollar"
}

// Add event listener to Confirm button
form.addEventListener("submit", function(e) {
    e.preventDefault();
    renderNews();
});

// Get selected currencies
function getCurrencies() {
    let inputA = currency1.options[currency1.selectedIndex].text;
    let inputB = currency2.options[currency2.selectedIndex].text;
    console.log(inputA + inputB);
}

// Call news API


// Display news article based on what has been selected on left

// Display news article based on what has been selected on right

// Execute all of above on click of Confirm button
function renderNews() {
    getCurrencies();
};



