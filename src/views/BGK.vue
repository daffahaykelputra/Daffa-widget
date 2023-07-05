<template>
  <div id="app">
    <h1>Batu Gunting Kertas</h1>
    <div class="game">
      <div class="player">
        <h2>Player</h2>
        <button @click="choosePlayer('rock')">Batu</button>
        <button @click="choosePlayer('paper')">Kertas</button>
        <button @click="choosePlayer('scissors')">Gunting</button>
      </div>
      <div class="computer">
        <h2>Komputer</h2>
        <p v-if="isGameOver">Komputer memilih: {{ computerChoice }}</p>
        <p v-if="isGameOver">Hasil: {{ gameResult }}</p>
      </div>
    </div>
    <div class="result" v-if="isGameOver">
      <button @click="resetGame">Main Lagi</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choices: ['rock', 'paper', 'scissors'],
      playerChoice: null,
      computerChoice: null,
      isGameOver: false,
      gameResult: ''
    };
  },
  methods: {
    choosePlayer(choice) {
      this.playerChoice = choice;
      this.computerChoice = this.choices[Math.floor(Math.random() * this.choices.length)];
      this.calculateResult();
      this.isGameOver = true;
    },
    calculateResult() {
      if (this.playerChoice === this.computerChoice) {
        this.gameResult = "Seri";
      } else if (
        (this.playerChoice === "rock" && this.computerChoice === "scissors") ||
        (this.playerChoice === "paper" && this.computerChoice === "rock") ||
        (this.playerChoice === "scissors" && this.computerChoice === "paper")
      ) {
        this.gameResult = "Anda Menang!";
      } else {
        this.gameResult = "Anda Kalah!";
      }
    },
    resetGame() {
      this.playerChoice = null;
      this.computerChoice = null;
      this.isGameOver = false;
      this.gameResult = '';
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  background-color: cyan;
}

.game {
  display: flex;
  justify-content: space-around;
  margin: 50px 0;
}

.player,
.computer {
  flex-basis: 30%;
}

button {
  margin: 5px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

.player button {
  background-color: #2196f3;
}

.computer p {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
}

.result {
  margin-top: 30px;
}

.result button {
  background-color: #f44336;
}
</style>
