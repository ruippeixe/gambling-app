// toggle the 'active' class for the buttons on click

const betBtns = document.querySelectorAll(".bet-btn");

betBtns.forEach((betBtn) => {
  betBtn.addEventListener("click", () => {
    userBetAmount.classList.remove("active"); 
    betBtns.forEach((btn) => btn.classList.remove("active"));
    betBtn.classList.add("active");
  });
});

const betOptionsBtns = document.querySelectorAll(".option");

betOptionsBtns.forEach((optionBtn) => {
  optionBtn.addEventListener("click", () => {
    betOptionsBtns.forEach((btn) => btn.classList.remove("active"));
    optionBtn.classList.add("active");
  });
});

userBetAmount.addEventListener("click", () => {
  betBtns.forEach((btn) => btn.classList.remove("active"));
  userBetAmount.classList.add("active");
});

// wallet info screen

const wallet = document.querySelector(".wallet-info .total");

function updateWalletInfo() {
  wallet.textContent = formatNumberWithSpaces(totalMoney);
}

function formatNumberWithSpaces(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
