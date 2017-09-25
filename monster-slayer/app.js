new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true
      this.playerHealth = 100
      this.monsterHealth = 100
    },
    attack: function () {
      let max = 10
      let min = 3
      let damage = this.calculateDamage(3, 10)


      if (this.checkWin()) {
        return
      }

      this.monsterHealth -= this.calculateDamage(3, 10)

      this.playerHealth -= this.calculateDamage(5, 12)

      this.checkWin()

    },
    specialAttack: function () {
      if (this.checkWin()) {
        return
      }

      this.monsterHealth -= this.calculateDamage(10, 20)

      this.monsterAttack()
    },
    heal: function () {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10
      } else {
        this.playerHealth = 100
      }

      this.monsterAttack()
    },
    giveUp: function () {
      this.gameIsRunning = false
    },
    monsterAttack: function () {
      this.playerHealth -= this.calculateDamage(5, 12)
      this.checkWin()
    },
    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min)
    },
    checkWin: function () {
      if ( this.monsterHealth <= 0 ) {
        if (confirm('You won! New game?') ) {
          this.startGame()
        } else {
          this.gameIsRunning = false
        }
        return true
      } else if ( this.playerHealth <= 0 ) {
        alert('You lost')
        this.gameIsRunning = false
      }
    }
  }
})