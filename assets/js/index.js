"use strict";
const input = document.getElementById("input-amt");
const baseCurrency = document.getElementById("currency1");
const targetCurrency = document.getElementById("currency2");
const output = document.getElementById("output-amt");
// const inputCurrency = document.getElementById("input-currency");
// const outputValue = document.getElementById("output-value");
// const outputCurrency = document.getElementById("output-currency");
const convSpan = document.getElementById("conv-span");
let convHist = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  fetchCurrencies(currency1.value, currency2.value, input.value);
  console.log(input.value + " " + currency1.value + " = " + currency2.value);
});

async function fetchCurrencies(baseCurrency, targetCurrency, amount) {
  await fetch(
    `https://v6.exchangerate-api.com/v6/d14eeee6a4f935aab34c335e/pair/${baseCurrency}/${targetCurrency}/${amount}`
  )
    .then((response) => {
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
  // inputCurrency.innerHTML = baseCurrency.value;
  // outputValue.innerHTML = rate;
  // outputCurrency.innerHTML = targetCurrency.value;
  let convInfo = `1 ${baseCurrency.value} = ${rate.toFixed(2)} ${
    targetCurrency.value
  }`;
  convSpan.textContent = convInfo;
  //Add to search history
  localStorage.setItem(
    `Search ${convHist + 1}`,
    input.value +
      " " +
      currency1.value +
      " = " +
      finalAmount.toFixed(2) +
      " " +
      currency2.value
  );
  if (convHist < 9) {
    convHist++;
  } else {
    convHist = 0;
  }
  console.log(convHist);
}

// Store currency search history
function searchHistory(convInfo) {
  console.log(convInfo);
  for (let i = 0; i < 10; i++) {
    localStorage.setItem(`search${i}`, convInfo);
  }
  // localStorage.getItem("lastname");
}
