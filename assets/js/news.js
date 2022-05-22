const form = document.getElementById("currency-form");
const currency1 = document.getElementById("currency1");
const currency2 = document.getElementById("currency2");
const newsTitle1 = document.getElementById("news-title-1");
const newsTitle2 = document.getElementById("news-title-2");
const newsDescr1 = document.getElementById("news1");
const newsDescr2 = document.getElementById("news2");

// Translation object
const dictionary = {
  USD: "american dollar",
  EUR: "european euro",
  JPY: "japanese yen",
  GBP: "sterling pound",
  CHF: "swiss franc",
  CAD: "canadian dollar",
};

// Add event listener to Confirm button
form.addEventListener("submit", function (e) {
  e.preventDefault();
  renderNews();
});

// Get selected currencies and output dictionary text
function getNewsCurrencies() {
  let currencyA = currency1.value;
  let currencyB = currency2.value;
  let currencyText = [dictionary[currencyA], dictionary[currencyB]];
  console.log(currencyText);
  return currencyText;
}

// Call news API for article 1
async function getNews1(currency) {
  fetch(
    `https://gnews.io/api/v4/search?q=${currency}&token=f08b6baa59c218cbab3e1f9ff05e4091`
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      renderArticle1(data);
    });
}

// Call news API for article 2
async function getNews2(currency) {
  fetch(
    `https://gnews.io/api/v4/search?q=${currency}&token=f08b6baa59c218cbab3e1f9ff05e4091`
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      renderArticle2(data);
    });
}

// Render article 1 from API data
function renderArticle1(rawData) {
  let article = rawData.articles[Math.floor(Math.random() * 10)];
  newsTitle1.innerHTML = article["title"];
  newsDescr1.innerHTML = article["description"];
}

// Render article 2 from API data
function renderArticle2(rawData) {
  let article = rawData.articles[Math.floor(Math.random() * 10)];
  newsTitle2.innerHTML = article["title"];
  newsDescr2.innerHTML = article["description"];
}

// Execute all of above on click of Confirm button
function renderNews() {
  const currencies = getNewsCurrencies();
  getNews1(currencies[0]);
  getNews2(currencies[1]);
}
