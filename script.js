"use strict";

const currencies = {
  CHF: "Swiss Franc",
  CAD: "Canadian Dollar",
  EUR: "Euro",
  GBP: "British Pound",
  JPN: "Japanese Yen",
  USD: "United States Dollar",
};

const select = document.querySelectorAll(".currency");
const number = document.getElementById("text");
const output = document.getElementById("output-amt");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exchangerate-api.p.rapidapi.com",
    "X-RapidAPI-Key": "077f3a113fmsh70b5629f45bcfa2p114632jsnec97fbc6b6a9",
  },
};

fetch("https://exchangerate-api.p.rapidapi.com/rapid/latest/USD", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
