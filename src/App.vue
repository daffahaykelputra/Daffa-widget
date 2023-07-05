<template>
  <nav>
    <router-link to="/">Cuaca</router-link> |
    <router-link to="/lokasi">Lokasi</router-link> |
    <router-link to="/stopwatch">StopWatch</router-link> |
    <router-link to="/foto">Foto</router-link> |
    <router-link to="/bgk">Game Batu Gunting Kertas</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: blue; /* Tambahkan warna latar belakang di sini */
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: cyan;
}
</style>

