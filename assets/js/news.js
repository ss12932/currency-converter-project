const form = document.getElementById("currency-form");
const currency1 = document.getElementById("currency1");
const currency2 = document.getElementById("currency2");
// const newsDescr1 = document.getElementById("news1");
// const newsDescr2 = document.getElementById("news2");
// const newsLink1 = document.getElementById("link1");
// const newsLink2 = document.getElementById("link2");
// const newsImage1 = document.getElementById("newsImage1");
// const newsImage2 = document.getElementById("newsImage2");
// const newsImageLink1 = document.getElementById("newsImageLink1");
// const newsImageLink2 = document.getElementById("newsImageLink2");

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

// // Call news API for article 1
// async function getNews1(currency) {
//   fetch(
//     `https://gnews.io/api/v4/search?q=${currency}&token=f08b6baa59c218cbab3e1f9ff05e4091`
//   )
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((data) => {
//       renderArticle1(data);
//     });
// }

// // Call news API for article 2
// async function getNews2(currency) {
//   fetch(
//     `https://gnews.io/api/v4/search?q=${currency}&token=f08b6baa59c218cbab3e1f9ff05e4091`
//   )
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((data) => {
//       renderArticle2(data);
//     });
// }

// Call news API for articles
async function getNews(currency, i) {
  fetch(
    `https://gnews.io/api/v4/search?q=${currency}&token=f08b6baa59c218cbab3e1f9ff05e4091`
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      renderArticle(data, i);
    });
}

// // Render article 1 from API data
// function renderArticle1(rawData) {
//   let article = rawData.articles[Math.floor(Math.random() * 10)];
//   newsLink1.innerHTML = article["title"];
//   newsLink1.setAttribute("href", article["url"]);
//   newsImage1.setAttribute("src", article["image"]);
//   newsImageLink1.setAttribute("href", article["url"]);
//   newsDescr1.innerHTML = article["description"];
// }

// // Render article 2 from API data
// function renderArticle2(rawData) {
//   let article = rawData.articles[Math.floor(Math.random() * 10)];
//   newsLink2.innerHTML = article["title"];
//   newsLink2.setAttribute("href", article["url"]);
//   newsImage2.setAttribute("src", article["image"]);
//   newsImageLink2.setAttribute("href", article["url"]);
//   newsDescr2.innerHTML = article["description"];
// }

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
  // getNews1(currencies[0]);
  // getNews2(currencies[1]);
  currencies.forEach((el, i) => getNews(el, i));
}
