"use strict";

const dateStart = () => {
  const dateTimer = () => {
    let currDate = moment().format("dddd Do MMMM YYYY, HH:mm:ss");
    $(".date-timer").text(currDate);
  };
  setInterval(dateTimer, 1000);
};
const initialLoad = () => {
  dateStart();
};

// $(document).ready(initialLoad);
$(document).ready(initialLoad);
