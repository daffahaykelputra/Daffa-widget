<template>
  <div class="weather-widget">
    <h2 class="widget-title">Weather Widget</h2>
    <div class="widget-content">
      <label for="location">Enter Location:</label>
      <input type="text" id="location" v-model="location" />
      <button @click="fetchWeatherData">Get Weather</button>
    </div>
    <div v-if="weatherData" class="weather-data">
      <p class="location">Location: {{ weatherData.name }}</p>
      <p v-if="weatherData.main" class="temperature">
        Temperature: {{ weatherData.main.temp }}°C
      </p>
      <p v-if="weatherData.weather" class="description">
        Description: {{ weatherData.weather[0].description }}
      </p>
    </div>
    <p v-else>Loading weather data...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: "",
      weatherData: null,
    };
  },
  methods: {
    async fetchWeatherData() {
      try {
        const apiKey = "b7bfca7b27a3485144fea086c50d09dc";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        this.weatherData = data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    },
  },
};
</script>

<style scoped>
.weather-widget {
  border: 2px solid black;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  background-color: cyan;
}

.widget-title {
  margin-top: 0;
  color: blue;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
}

.widget-content {
  margin-bottom: 20px;
}

.widget-content label {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.widget-content input[type="text"] {
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.widget-content button {
  padding: 10px 20px;
  background-color: blue;
  color: b;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.weather-data {
  margin-top: 20px;
}

.location {
  font-size: 20px;
  font-weight: bold;
  color: #4caf50;
}

.temperature {
  font-size: 32px;
  color: #ff5722;
  margin: 10px 0;
}

.description {
  font-size: 18px;
}
</style>
