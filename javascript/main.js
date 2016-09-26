var diceGame = {
    regions: {
        resultMessage: null,
        lastWinMeassage: null,
        leftDie: null,
        rightDie: null,
        rollDiceBtn: null,
        startMessage: null
    },

    init: function() {
        this.regions.resultMessage = document.getElementById('message');
        this.regions.lastWinMessage = document.getElementById('last-win-message');
        this.regions.leftDie = document.getElementById('left-die');
        this.regions.rightDie = document.getElementById('right-die');
        this.regions.rollDiceBtn = document.getElementById('roll-dice');
        this.regions.startMessage = document.getElementById('game-started');
        this.regions.rollDiceBtn = document.addEventListener('click', this.diceRoll.bind(this));
    },

    values: {
        turns: [],
        leftDie: null,
        rightDie: null,
        diceTotal: null
    },

    diceRoll: function() {
      var leftRoll = Math.ceil(Math.random() *6);
      this.values.leftDie = leftRoll;
      var rightRoll = Math.ceil(Math.random() *6);
      this.values.rightDie = rightRoll;
      this.showDiceRoll();
      this.diceRollTotal();
    },

    showDiceRoll: function() {
      this.regions.leftDie.innerHTML = this.values.leftDie;
      this.regions.rightDie.innerHTML = this.values.rightDie;
    },

    diceRollTotal: function() {
      var diceTotal = this.values.leftDie + this.values.rightDie;
      this.values.diceTotal = diceTotal;
      console.log(diceTotal);
    }
    // message: function() {
    //   var dieTotal = parsInt(this.values.leftDie, 10) + parsInt(this.values.rightDie, 10);
    //   if (dieTotal === 7 || 11) {
    //     this.regions.resultMessage.innerHTML = "Winner!";
    //   } else {
    //     this.regions.resultMessage.innerHTML = "Try Again";
    //   }
    // }
};

diceGame.init();
