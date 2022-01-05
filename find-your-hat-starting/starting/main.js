const prompt = require("prompt-sync")({ sigint: true });
// var term = require('terminal-kit').terminal;
class Element {
    constructor() {
        this.hat = "^";
        this.hole = "O";
        this.fieldCharacter = "░";
        this.pathCharacter = "*";
        this.status = true;
    }

}
class Field {
    constructor() {
        this.field = [];
    }
    static generateField(height, width, percentage, character, create) {
        create.field = new Array(height).fill(0).map((x) => new Array(width));
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                percentage > Math.random() ?
                    (create.field[y][x] = character.hole) :
                    (create.field[y][x] = character.fieldCharacter);
            }
        }
        let randomStartPointX = Math.floor(Math.random() * width);
        let randomStartPointY = Math.floor(Math.random() * height);
        create.field[randomStartPointY][randomStartPointX] = character.pathCharacter;
        create.x = randomStartPointX;
        create.y = randomStartPointY;
        let randomFinalPointX = Math.floor(Math.random() * width);
        let randomFinalPointY = Math.floor(Math.random() * height);
        create.field[randomFinalPointY][randomFinalPointX] = character.hat;
        return create.field;
    }


}
class Game {
    constructor(field) {
        this.ele = new Element();
        this.play = field;
    }

    runGame(mode) {
        this.print();
        console.log("let's go! find your hat(^)");
        if (mode === "normal") {
            console.log('is normal mode')
            this.move();
        } else if (mode === "hard") {
            console.log('is hard mode')
            this.hardMove();
        }
    }

    isEndGame() {
        if (this.isHat()) {
            this.print();
            console.log("Congratulations! You find a hat!");
            this.ele.status = false;
        } else if (this.isHole()) {
            this.print();
            console.log("GameOver.You fell into the hole!");
            this.ele.status = false;
        } else {
            this.play.field[this.play.y][this.play.x] = this.ele.pathCharacter;
            this.print();
            console.log('Keep going on.')
        }
    }

    print() {
        for (let i = 0; i < this.play.field.length; i++) {
            console.log(this.play.field[i].join(""));
        }
    }

    getOutField() {
        return this.play.y < 0 || this.play.y >= this.play.field.length || this.play.x < 0 || this.play.x >= this.play.field[1].length;
    }

    isHat() {
        return this.play.field[this.play.y][this.play.x] === this.ele.hat;
    }

    isHole() {
        return this.play.field[this.play.y][this.play.x] === this.ele.hole;
    }

    move() {
        while (this.ele.status === true) {
            const way = prompt("which way: ");
            switch (way) {
                case "w":
                    this.play.y -= 1;
                    break;
                case "a":
                    this.play.x -= 1;
                    break;
                case "s":
                    this.play.y += 1;
                    break;
                case "d":
                    this.play.x += 1;
                    break;
            }
            if (this.getOutField()) {
                console.log("You can't get out of the field");
                this.ele.status = false;
            } else {
                this.ele.status = true;
                this.isEndGame();
            }

        }
    }

    hardMove() {
        let lastWay = null;
        while (this.ele.status === true) {
            const way = prompt("which way:  ");
            console.log('\n')
            switch (way) {
                case "w":
                    this.play.y -= 1;
                    this.makeHole(lastWay, way);
                    lastWay = 'w';
                    break;
                case "a":
                    this.play.x -= 1;
                    this.makeHole(lastWay, way);
                    lastWay = 'a';
                    break;
                case "s":
                    this.play.y += 1;
                    this.makeHole(lastWay, way);
                    lastWay = 's';
                    break;
                case "d":
                    this.play.x += 1;
                    this.makeHole(lastWay, way);
                    lastWay = 'd';
                    break;
            }
            if (this.getOutField()) {
                console.log("You can't get out of the field");
                this.ele.status = false;
            } else {
                this.ele.status = true;
                this.isEndGame();
            }

        }
    }

    makeHole(lastWay, way) {
        /* if (lastWay !== way) {
            this.randomHole()
        } else {
            console.log('~safe~ Keep going on.')
        } */
        lastWay !== way ? this.randomHole() : console.log('~safe~ Keep going on.');
    }

    randomHole() {
        let randomHolePointX = Math.floor(Math.random() * this.play.field[0].length);
        let randomHolePointY = Math.floor(Math.random() * this.play.field.length);
        while (this.play.field[randomHolePointY][randomHolePointX] === this.ele.hole || this.play.field[randomHolePointY][randomHolePointX] === this.ele.hat) {
            randomHolePointX = Math.floor(Math.random() * this.play.field[0].length);
            randomHolePointY = Math.floor(Math.random() * this.play.field.length);
        }
        this.play.field[randomHolePointY][randomHolePointX] = this.ele.hole;
        console.log("!!Increasing Hole!! Please try not to turn a way!");
    }

    start() {
        const ready = prompt("Hello, This is a game 'Find a hat' ! Are You ready?  ");
        if (ready === "yes") {
            this.gameMode();
        } else {
            console.log("if you want to start this game, PLZ typing 'yes'! See you next time");
        }
    }

    gameMode() {
        const mode = prompt("Game mode: normal? , hard?  ");
        if (mode === "normal") {
            this.runGame("normal");
        } else if (mode === "hard") {
            this.runGame("hard");
        }
    }

}

const newCharacter = new Element();
const newField = new Field();
Field.generateField(6, 9, 0.3, newCharacter, newField);
const startGame = new Game(newField);

startGame.start();





/* isWork(){
  while(this.field.[this.y][this.x] === hat){


    if (this.field.[this.y-1][this.x] === fieldCharacter){
      this.y --;
    }else if (this.field.[this.y][this.x+1] === fieldCharacter){
      this.x ++;
    }else if (this.field.[this.y+1][this.x] === fieldCharacter){
      this.y ++;
    }else if (this.field.[this.y][this.x-1] === fieldCharacter){
      this.x --;
    }

    this.field[randomStartPointY][randomStartPointX] this.field[randomFinalPointY][randomFinalPointX]
    endYIsUp(){
      while(randomStartPointY === randomFinalPointY){
        if(randomStartPointY > randomFinalPointY && this.field.[this.y-1][this.x] === fieldCharacter){
          this.y--
        } else()...
      }
      X();
    }
    endYIsDown(){
      while(randomStartPointY === randomFinalPointY){
        if(this.field.[this.y++][this.x] === fieldCharacter){
          this.y++
        } else if()
      }
      X();
    }
    X(){
      while(randomStartPointY === randomFinalPointY){ 
        if(randomStartPointX > randomFinalPointX && this.field.[this.y][this.x-1] === fieldCharacter){
          this.x --
        }
      }
      isWork()
    }

    isWork(){
      if(this.field.[this.y][this.x] === hat){
        runGame();
      } else if(this.field.[this.y][this.x] !== hat){
        Y();
      } 
    }
} */