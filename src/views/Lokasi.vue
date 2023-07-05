<template>
    <div class="location-widget">
      <h2>Your Location</h2>
      <div v-if="latitude && longitude">
        <p>Latitude: {{ latitude }}</p>
        <p>Longitude: {{ longitude }}</p>
      </div>
      <div v-else>
        <p>Finding your location...</p>
      </div>
  
      <div class="location-input">
        <label for="latitude">Latitude:</label>
        <input type="text" id="latitude" v-model="inputLatitude" />
      </div>
      <div class="location-input">
        <label for="longitude">Longitude:</label>
        <input type="text" id="longitude" v-model="inputLongitude" />
      </div>
  
      <button @click="fetchLocationDetails" class="find-button">Find Location Details</button>
  
      <div v-if="foundLocation" class="location-details">
        <h3>Location Details</h3>
        <p>{{ foundLocation.components.country }}</p>
        <p>{{ foundLocation.components.city }}</p>
        <p>{{ foundLocation.components.street }}</p>
        <p>Postal Code: {{ foundLocation.components.postcode }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        latitude: null,
        longitude: null,
        inputLatitude: '',
        inputLongitude: '',
        foundLocation: null,
      };
    },
    mounted() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getPosition);
      }
    },
    methods: {
      getPosition(position) {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      },
      async fetchLocationDetails() {
        try {
          const apiKey = '92591005a7b94008909d59a64b6d2a49';
          const latitude = this.inputLatitude || this.latitude;
          const longitude = this.inputLongitude || this.longitude;
          const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
            latitude + ',' + longitude
          )}&key=${apiKey}`;
  
          const response = await fetch(apiUrl);
          const data = await response.json();
  
          if (data.results && data.results.length > 0) {
            const location = data.results[0];
            this.foundLocation = location;
            console.log('Location:', location);
            // Lakukan sesuatu dengan data lokasi yang ditemukan
          }
        } catch (error) {
          console.error('Error fetching location data:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .location-widget {
    border: 2px solid black;
    padding: 20px;
    margin-bottom: 20px;
    background-color: cyan;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  
  .location-widget h2 {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
    grid-column: 1 / -1;
  }
  
  .location-widget p {
    color: #666;
  }
  
  .location-input {
    grid-column: 1 / -1;
  }
  
  .location-input label {
    display: block;
    margin-bottom: 5px;
    color: #333;
    font-size: 16px;
  }
  
  .location-input input {
    width: 100%;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid black;
    border-radius: 4px;
    font-size: 16px;
  }
  
  .location-widget .find-button {
    padding: 10px 20px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .location-widget .find-button:hover {
    background-color: darkblue;
  }
  
  .location-widget .find-button:disabled {
    background-color: #ccc;
    color: #999;
    cursor: not-allowed;
  }
  
  .location-details {
    text-align: left;
    grid-column: span 2;
  }
  
  .location-details h3 {
    margin-bottom: 10px;
    color: #333;
    font-size: 18px;
  }
  
  .location-details p {
    margin: 5px 0;
    color: #666;
  }
  
  .error-message {
    color: red;
    margin-top: 10px;
  }
  
  /* Tambahan untuk penyesuaian tata letak */
  .location-widget > div {
    grid-column: span 1;
  }
  
  </style>
  