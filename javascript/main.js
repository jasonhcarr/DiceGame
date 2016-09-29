var diceGame = {
    regions: {
        resultMessage: null,
        lastWinMessage: null,
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
        this.regions.rollDiceBtn = document.getElementById('roll-dice').addEventListener('click', this.diceRoll.bind(this));
        this.printStartTime();
    },

    values: {
        currentTime: null,
        timeSinceWin: null,
        turnsSinceWin: null,
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
      this.message(diceTotal);
    },

    getTimeInfo: function () {
      var currentTime = new Date();
      this.values.currentTime = currentTime;
      console.log(this.values.currentTime);
    },

    printStartTime: function() {
      this.getTimeInfo();
      var time = this.values.currentTime;
      var year = time.getFullYear(),
          mo = time.getMonth(),
          day = time.getDate();
          hour = time.getHours();
          min = (time.getMinutes()<10?'0':'') + time.getMinutes();
      this.regions.startMessage.innerHTML = "Game Started " + year + "-" + mo + "-" + day + " at " + hour + ":" + min;
    },

    getTimeSince: function() {
      var startTime = this.values.currentTime;
      this.getTimeInfo();
      var winTime = this.values.currentTime;
      var timeSinceWin = Math.ceil((winTime - startTime)/1000);
      this.values.timeSinceWin = timeSinceWin;
    },

    getTurnsSince: function() {
      var turnsSinceWin = parseInt(this.values.turnsSinceWin) + 1;
      if (isNaN(turnsSinceWin)) {
        turnsSinceWin = 1;
      } else {
        turnsSinceWin = turnsSinceWin;
      }
      this.values.turnsSinceWin = turnsSinceWin;
    },

    message: function(diceTotal) {
      if (diceTotal === 7 || diceTotal === 11) {
        this.getTurnsSince();
        var turnsSinceWin = this.values.turnsSinceWin;
        this.getTimeSince();
        var timeSinceWin = this.values.timeSinceWin;
        this.regions.lastWinMessage.innerHTML = "It took you " + turnsSinceWin + " tries and " + timeSinceWin + " seconds";
        this.regions.resultMessage.innerHTML = "Winner!";
        this.values.turnsSinceWin = null;
      } else {
        this.regions.lastWinMessage.innerHTML = " ";
        this.regions.resultMessage.innerHTML = "Try Again";
        this.values.turnsSinceWin ++;
      }
    }
};

diceGame.init();
