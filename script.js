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

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
