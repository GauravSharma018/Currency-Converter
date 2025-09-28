const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const exchangeIcon = document.querySelector("#exchange i");

for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        }
        else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

    element.parentElement.querySelector("img").src = newSrc;
}

btn.addEventListener("click", async(evt) => {
    evt.preventDefault();

    let amount = evt.target.parentElement.querySelector(".amount input");
    if ((amount === "") || amount.value <= 0) {
        amount.value = 1;
    }

    let url = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let res = await fetch(url);

    let data = await res.json();

    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

    let result = evt.target.parentElement.querySelector(".amount .msg p");
    result.innerText = rate*amount.value;
});

exchangeIcon.addEventListener("click", () => {
    let temp = fromCurr.value;
    fromCurr.value = toCurr.value;
    toCurr.value = temp;

    updateFlag(fromCurr);
    updateFlag(toCurr);
});