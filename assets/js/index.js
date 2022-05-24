"use strict";
const input = document.getElementById("input-amt");
const baseCurrency = document.getElementById("currency1");
const targetCurrency = document.getElementById("currency2");
const output = document.getElementById("output-amt");
const convSpan = document.getElementById("conv-span");
const historyList = document.getElementById("historyList");
let convHist = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  fetchCurrencies(currency1.value, currency2.value, input.value);
  console.log(input.value + " " + currency1.value + " = " + currency2.value);
});

// Render search history
function getHistory() {
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage[i] !== null) {
      let listItem = document.createElement("li");
      historyList.appendChild(listItem);
      listItem.appendChild(
        document.createTextNode(localStorage.getItem(`Search ${i + 1}`))
      );
    }
  }
  convHist = localStorage.getItem("Number of Searches");
}

getHistory();

async function fetchCurrencies(baseCurrency, targetCurrency, amount) {
  await fetch(
    `https://v6.exchangerate-api.com/v6/d14eeee6a4f935aab34c335e/pair/${baseCurrency}/${targetCurrency}/${amount}`
  )
    .then((response) => {
      console.log(response);
      if (response.ok) {
        console.log(response);
        return response.json();
      } else {
        throw new Error("Failed to retrieve Data");
      }
    })
    .then((data) => {
      const { conversion_result, conversion_rate } = data;
      updateOutput(conversion_result, conversion_rate);
    })
    .catch((err) => console.error(err));
}

function updateOutput(finalAmount, rate) {
  output.value = finalAmount.toFixed(2);
  let convInfo = `1 ${baseCurrency.value} = ${rate.toFixed(2)} ${
    targetCurrency.value
  }`;
  convSpan.textContent = convInfo;
  //Add to search history
  let histText =
    input.value +
    " " +
    currency1.value +
    " = " +
    finalAmount.toFixed(2) +
    " " +
    currency2.value;
  localStorage.setItem(
    `Search ${convHist + 1}`,
    moment().format("DD/MM/YYYY, h:mm:ssa") + ":   " + histText
  );
  convHist++;
  localStorage.setItem("Number of Searches", convHist);
  let listItem = document.createElement("li");
  historyList.appendChild(listItem);
  listItem.appendChild(
    document.createTextNode(localStorage.getItem(`Search ${convHist}`))
  );
}
