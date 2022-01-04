const prompt = require("prompt-sync")({ sigint: true });
var term = require( 'terminal-kit' ).terminal ;


const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

// const field1 = [
//   ['*', '░', 'O'],
//   ['░', 'O', '░'],
//   ['░', '░', '░'],
//   ['░', '^', '░'],
// ];

class Field {
  constructor() /* fieldArray */ {
    this.field = "" /* fieldArray */;
    this.x = 0;
    this.y = 0;
    this.status = true;
    this.height = 0;
    this.width = 0;
    this.percentage = 0;
    // this.field[x][y] = pathCharacter;
  }

  runGame() {
    term.green("GOOD!\n");
    console.log("GOOD!");
    this.print();
    // console.log(this.field.length);
    this.move();
  }
  endGame() {
    
    if (this.isHat()) {
      /* if(this.getOutField()) */ console.log("You find a hat!");
      this.status = false;
    } else if (this.isHole()) {
      console.log("You fell into the hole!");
      this.status = false;
    }
  }

  move() {
    while (this.status === true) {
      const way = prompt("which way: ");
      switch (way) {
        case "w":
          this.y -= 1;
          break;
        case "a":
          this.x -= 1;
          break;
          case "s":
            this.y += 1;
          break;
          case "d":
          this.x += 1;
          break;
      }
      
      // if (this.getOutField()) {
        //   this.endGame();
      // } else if (this.field[this.y][this.x] === "░") {
        if (this.getOutField()) {
          console.log("You can't get out of the field");
          this.status = false;
        } else{
          this.status = true;
          this.endGame();
          this.field[this.y][this.x] = pathCharacter;
          this.print();
        }
        // console.log(this.field[[].length]);
      // } else {
        //   this.endGame();
      // }
    }
  }

  start() {
    // let isPlaying = true;
    const ready = prompt("Hello! Are You ready?");
    if (ready === "yes") {
      this.gameMode()
      // this.runGame();
      // console.log(this.pathCharacter);
      // this.field[this.x][this.y] = this.field;
    } else {
      console.log("see you next time");
    }
  }
  
  gameMode() {
    const mode = prompt("Game mode: normal , hard  ");
    if ( mode === "normal"){
      this.runGame();
      console.log(this.pathCharacter);
      // this.field[this.x][this.y] = this.field;
    } else if ( mode === "hard"){
      // console.log(this.height);
      // console.log(this.width);
      // console.log(this.percentage);
      this.generateField(this.height,this.width,this.percentage*2);
      this.runGame();
    }
  }

  print() {
    for (let i = 0; i < this.field.length; i++) {
      console.log(this.field[i].join(""));
    }
  }

  getOutField() {
    return this.y < 0 || this.y >= this.field.length || this.x < 0 || this.x >= this.field[1].length /* || this.x > this.field */;
  }

  isHat() {
    // if(this.field[this.y][this.x] === hat){
      //   console.log('GOOD JOB');
    //   return this.endGame();
    // } else{
    //   return this.status = 'run';;
    // }
    return this.field[this.y][this.x] === hat;
  }

  isHole() {
    // if(this.field[this.y][this.x] === hole){
      //   return this.endGame();;
    // } else{
      //   return this.status = 'run';;
    // }
    return this.field[this.y][this.x] === hole;
  }

  generateField(height, width, percentage) {
    this.height = height;
    this.width = width;
    this.percentage = percentage;
    // const a = new Array(height).fill(0).map(x => new Array(width));
    this.field = new Array(height).fill(0).map((x) => new Array(width));
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        percentage > Math.random()
        ? (this.field[y][x] = "O")
          : (this.field[y][x] = "░");
      }
    }
    let randomStartPointX = Math.floor(Math.random() * width);
    let randomStartPointY = Math.floor(Math.random() * height);
    this.field[randomStartPointY][randomStartPointX] = '*';
    this.x = randomStartPointX;
    this.y = randomStartPointY;
    // this.field[0][0] = "*";
    let randomFinalPointX = Math.floor(Math.random() * width);
    let randomFinalPointY = Math.floor(Math.random() * height);
    this.field[randomFinalPointY][randomFinalPointX] = "^";
  }
}

const myField = new Field();
//Field.generateField
myField.generateField(15, 25, 0.2);
myField.start();






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



//not me

/* const prompt = require('prompt-sync')({ sigint: true });
class Chara {
    constructor() {
        this.hat = '^';
        this.hole = 'O';
        this.fieldCharacter = '░';
        this.pathCharacter = '*';
    }
}
class Map {
    constructor(field) {
        this.field = field;
        this.y = 0;
        this.x = 0;
    }
    static generateField(h, w, p, symbol, emptyMap) {
        let character = [symbol.hole, symbol.fieldCharacter];
        emptyMap.field = [];
        let correctHoleNumber = 0;
        while (correctHoleNumber < h) {
            let randomArr = [];
            for (let i = 0; i < w; i++) {
                randomArr.push(character[Math.floor(Math.random() * character.length)]);
            }
            let numberOfHoles = randomArr.filter(ele => ele === symbol.hole);
            if (numberOfHoles.length / randomArr.length <= p) {
                emptyMap.field.push(randomArr);
                correctHoleNumber++;
            }
        }
        let pathY = Math.floor(Math.random() * h);
        let pathX = Math.floor(Math.random() * w);
        emptyMap.y = pathY;
        emptyMap.x = pathX;
        let hatY = Math.floor(Math.random() * h);
        let hatX = Math.floor(Math.random() * w);
        if (pathY === hatY && pathX === hatX) {
            hatY = Math.floor(Math.random() * h);
            hatX = Math.floor(Math.random() * w);
        }
        emptyMap.field[pathY][pathX] = symbol.pathCharacter;
        emptyMap.field[hatY][hatX] = symbol.hat;
        return emptyMap.field;
    }
}
class Game {
    constructor(map) {
        this.symbol = new Chara();
        this.coordinate = new Map();
        this.map = map;
    }
    play() {
        let status = true;
        console.log(this.map.y, this.map.x);
        console.log(this.map.field[this.map.y][this.map.x]);
        while (status = true) {
            // this.print();
            console.log(this.map.y, this.map.x)
            this.move();
            if (!this.inBound()) {
                status = false;
                console.log('out of border');
                break;
            } else if (this.hole()) {
                status = false;
                console.log('in the hole');
                break;
            } else if (this.hat()) {
                status = false;
                console.log('You win');
                break;
            }
            this.map[this.map.y][this.map.x] = this.symbol.pathCharacter;
        }
    }
    print() {
        for (let i = 0; i < this.map.field.length; i++) {
            console.log(this.map.field[i].join(''));
        }
    }
    move() {
        const answer = prompt('Which way? ')
        switch (answer) {
            case 'u':
                this.map.y--;
                break;
            case 'd':
                this.map.y++;
                break;
            case 'l':
                this.map.x--;
                break;
            case 'r':
                this.map.x++;
                break;
            default:
                console.log('Please enter');
                this.move();
                break;
        }
    }
    hole() {
        return this.map[this.map.y][this.map.x] === this.symbol.hole;
    }
    inBound() {
        return (
            this.map.y >= 0 &&
            this.map.x >= 0 &&
            this.map.y < this.map.length &&
            this.map.x < this.map[0].length
        );
    }
    hat() {
        return this.map[this.map.y][this.map.x] === this.symbol.hat;
    }
}
const newCharacter = new Chara();
const newMap = new Map();
const map1 = Map.generateField(6, 8, 0.2, newCharacter, newMap);
// console.log(map1);
// console.log(newMap);
const newGame = new Game(newMap);
// console.log(newGame);
newGame.play(); */