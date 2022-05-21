const currency1 = document.getElementById("currency1");
const currency2 = document.getElementById("currency2");
const form = document.getElementById("currency-form");
const newsTitle1 = document.getElementById("news-title-1");
const newsTitle2 = document.getElementById("news-title-2");

// Translation object
const dictionary = {
  USD: "american dollar",
  EUR: "european euro",
  JPY: "japanese yen",
  GBP: "british pound",
  CHF: "swiss franc",
  CAD: "canadian dollar",
};

// Add event listener to Confirm button
form.addEventListener("submit", function (e) {
  e.preventDefault();
  renderNews();
});

// Get selected currencies and output dictionary text
function getCurrencies() {
  let currencyA = currency1.value;
  let currencyB = currency2.value;
  let currencyText = [dictionary[currencyA], dictionary[currencyB]];
  console.log(currencyText);
  return currencyText;
}

// Call news API
function getNews(currency) {
  fetch(
    `https://gnews.io/api/v4/search?q=${currency}&token=bd6c99e57cde29f3b05d86b65ebe86f8`
  )
    .then((response) => response.json())
    .then((data) => {
      renderArticles(data);
    });
}

// Render articles from API data
function renderArticles(rawData) {
  // select random article
  console.log(rawData.articles[Math.floor(Math.random() * 10)]);
}

// Display news article based on what has been selected on left

// Display news article based on what has been on right

// Execute all of above on click of Confirm button
function renderNews() {
  const currencies = getCurrencies();
  getNews(currencies[0]);
  getNews(currencies[1]);
}
