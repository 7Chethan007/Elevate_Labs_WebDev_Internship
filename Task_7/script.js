const API_KEY = "YOU'R API"; // Replace with your OpenWeatherMap API key

const defaultCities = ["Bengaluru", "Mumbai", "London", "New York", "Tokyo"];

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");
const loader = document.getElementById("loader");
const errorDiv = document.getElementById("error");
const historyDiv = document.getElementById("history");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (!city) return showError("Please enter a city name.");
  fetchAndDisplay(city, true, true); // ✅ clear = true
  cityInput.value = "";
});


function showError(msg) {
  errorDiv.textContent = msg;
  errorDiv.classList.remove("hidden");
}

// ✅ Display weather for a city
async function fetchAndDisplay(city, saveToHistory = false, clear = false) {
  loader.classList.remove("hidden");
  errorDiv.classList.add("hidden");

  if (clear) weatherResult.innerHTML = ""; // ✅ Clear previous cards

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!res.ok) throw new Error(`City "${city}" not found`);
    const data = await res.json();

    renderWeatherCard(data);

    if (saveToHistory) {
      updateSearchHistory(city);
    }
  } catch (err) {
    showError(err.message);
  } finally {
    loader.classList.add("hidden");
  }
}


// ✅ Create and display a card
function renderWeatherCard(data) {
  const { name, main, weather } = data;
  const description = weather[0].description;
  const icon = weather[0].icon;
  const temp = main.temp;

  const card = document.createElement("div");
  card.className = "weather-card";
  card.innerHTML = `
    <h2>${name}</h2>
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}" />
    <p><strong>${description.toUpperCase()}</strong></p>
    <p>🌡️ ${temp} °C</p>
  `;

  weatherResult.appendChild(card);
}

// ✅ Store & load history
function updateSearchHistory(city) {
  let history = JSON.parse(localStorage.getItem("weatherHistory")) || [];

  if (!history.includes(city)) {
    history.unshift(city);
    if (history.length > 5) history = history.slice(0, 5);
    localStorage.setItem("weatherHistory", JSON.stringify(history));
    renderHistory();
  }
}

function renderHistory() {
  const history = JSON.parse(localStorage.getItem("weatherHistory")) || [];
  historyDiv.innerHTML = "";

  history.forEach(city => {
    const btn = document.createElement("button");
    btn.textContent = city;
    btn.onclick = () => {
        fetchAndDisplay(city, false, true); // ✅ clear = true
    };

    historyDiv.appendChild(btn);
  });
}

// ✅ Load default cities and history
function init() {
  weatherResult.innerHTML = "";
  defaultCities.forEach(city => fetchAndDisplay(city, false));
  renderHistory();
}

init();
