<template>
    <div class="photo-widget">
      <h2>{{ title }}</h2>
      <div class="photo-container">
        <img :src="photoUrl" :alt="title" />
      </div>
      <button @click="getRandomPhoto" class="load-button">Load New Photo</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        photoUrl: '',
      };
    },
    mounted() {
      this.getRandomPhoto();
    },
    methods: {
      async getRandomPhoto() {
        try {
          const apiKey = '38037020-2c48722c03be8437a05b588e6';
          const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=nature&image_type=photo&orientation=horizontal`;
  
          const response = await fetch(apiUrl);
          const data = await response.json();
  
          const randomIndex = Math.floor(Math.random() * data.hits.length);
          const randomPhoto = data.hits[randomIndex];
  
          this.title = randomPhoto.tags;
          this.photoUrl = randomPhoto.webformatURL;
        } catch (error) {
          console.error('Error fetching random photo:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .photo-widget {
    border: 2px solid black;
    padding: 20px;
    margin-bottom: 20px;
    background-color: lightgray;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .photo-widget h2 {
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .photo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 500px;
    margin-top: 10px;
  }
  
  .photo-container img {
    max-width: 100%;
    max-height: 100%;
  }
  
  .photo-widget .load-button {
    padding: 10px 20px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 10px;
  }
  
  .photo-widget .load-button:hover {
    background-color: darkblue;
  }
  
  </style>
  