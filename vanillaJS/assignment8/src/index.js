const clockTitle = document.querySelector(".js-clock");

const countingClockHandler = {
  getDday: () => {
    const todayDate = new Date();
    // month starts 0 end 11
    const christmasDate = new Date(
      `${todayDate.getFullYear()}`,
      11,
      25,
      0,
      0,
      0
    );
    // milliseconds
    const rest = christmasDate - todayDate;

    const restDays = Math.floor(rest / (1000 * 60 * 60 * 24));
    const restHours = String(
      Math.floor((rest / (1000 * 60 * 60)) % 24)
    ).padStart(2, "0");
    const restMinutes = String(Math.floor((rest / (1000 * 60)) % 60)).padStart(
      2,
      "0"
    );
    const restSeconds = String(Math.floor((rest / 1000) % 60)).padStart(2, "0");

    clockTitle.innerText = `${restDays}d ${restHours}h ${restMinutes}m ${restSeconds}s`;
  },
};

countingClockHandler.getDday();
setInterval(countingClockHandler.getDday, 1000);
