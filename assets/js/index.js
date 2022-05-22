"use strict";
const input = document.getElementById("input-amt");
const baseCurrency = document.getElementById("currency1");
const targetCurrency = document.getElementById("currency2");
const output = document.getElementById("output-amt");

const inputCurrency = document.getElementById("input-currency");
const outputValue = document.getElementById("output-value");
const outputCurrency = document.getElementById("output-currency");

function getCurrencies() {
  var currencyInputs = [currency1.value, currency2.value];
  console.log(currencyInputs);
  return currencyInputs;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  fetchCurrencies(currency1.value, currency2.value, input.value);
});

async function fetchCurrencies(baseCurrency, targetCurrency, amount) {
  await fetch(
    `https://v6.exchangerate-api.com/v6/d14eeee6a4f935aab34c335e/pair/${baseCurrency}/${targetCurrency}/${amount}`
  )
    .then((response) => response.json())
    .then((data) => {
      const { conversion_result, conversion_rate } = data;
      updateOutput(conversion_result, conversion_rate);
    })
    .catch((err) => console.error(err));
}

function updateOutput(finalAmount, rate) {
  output.value = finalAmount;

  inputCurrency.innerHTML = baseCurrency.value;
  outputValue.innerHTML = rate;
  outputCurrency.innerHTML = targetCurrency.value;
}
