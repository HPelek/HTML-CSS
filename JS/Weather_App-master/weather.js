const form = document.querySelector("form");
const input = document.querySelector("form input");
const msgSpan = form.querySelector(".msg");
const list = document.querySelector(".container .cities");

// localStorage.setItem(
//   "apiKey",
//   EncryptStringAES("ba54894207cbfd6c90b6c379d2590633")
// );

//* HTML inline assign, addEventListener, onclick, setAttirube("submit", submit)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeatherDataFromApi();
  //   alert("Form was submitted!");
  form.reset();
  //   input.value = " ";
  //* target vs currentTarget
  //   e.currentTarget.reset();
});

const getWeatherDataFromApi = async () => {
  const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
  console.log("apiKey");
  const cityName = input.value;
  const units = "metric";
  const lang = "tr";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`;

  try {
    const response = await fetch(url).then((response) => response.json());
    console.log(response);

    const { main, name, sys, weather } = response;
    const iconUrl = `https://openweathermap.org/img//wn/${weather[0].icon}@2x.png`;
    const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;
    console.log(iconUrlAWS);

    const cityNameSpans = list.querySelectorAll("span");
    if (cityNameSpans > 0) {
      const filteredArray = [...cityNameSpans].filter(
        (span) => span.innerText == name
      );
      if (filteredArray > 0) {
        msgSpan.innerText = `You already know the weather for ${name}, Please search for another city 😉`;
        setTimeout(() => {
          msgSpan.innerText = "";
        }, 5000);
        return;
      }
    }

    const createdLi = document.createElement("li");
    createdLi.classList.add("city");
    createdLi.innerHTML = ` <h2 class="city-name" data-name="${name},${
      sys.country
    }">
                <span>${sys.country}</span>
                <sup>TR</sup>
          </h2>
          <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
          <figure>
                <img class="city-icon" src="${iconUrlAWS}"
                <figcaption>${weather[0].description}</figcaption>
          </figure>`;

    list.append(createdLi);
  } catch (error) {
    msgSpan.innerText = "City not found!";
  }
};
