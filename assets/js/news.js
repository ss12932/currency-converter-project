const form = document.getElementById("currency-form");
const currency1 = document.getElementById("currency1");
const currency2 = document.getElementById("currency2");

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
  return currencyText;
}

// Call news API for articles
async function getNews(currency, i) {
  await fetch(
    `https://gnews.io/api/v4/search?q=${currency}&token=bd6c99e57cde29f3b05d86b65ebe86f8`
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      renderArticle(data, i);
    });
}

// Render articles from API data
function renderArticle(rawData, i) {
  const newsDescr = document.getElementById(`news${i + 1}`);
  const newsLink = document.getElementById(`link${i + 1}`);
  const newsImage = document.getElementById(`newsImage${i + 1}`);
  const newsImageLink = document.getElementById(`newsImageLink${i + 1}`);
  let article = rawData.articles[Math.floor(Math.random() * 10)];
  newsLink.innerHTML = article.title;
  newsLink.setAttribute("href", article.url);
  newsImage.setAttribute("src", article.image);
  newsImageLink.setAttribute("href", article.url);
  newsDescr.innerHTML = article.description;
}

// Execute all of above on click of Confirm button
function renderNews() {
  // returns an array
  const currencies = getNewsCurrencies();
  currencies.forEach((el, i) => getNews(el, i));
}
