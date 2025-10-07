/*
    This is a game where the player have to make some choices 
    that are going to choose the path of the journey
*/

// printing text of welcome
console.log("MATRIX GAME ");
console.log("¡¡¡ Prepare to see the truth !!! \n") ;

const readline = require("readline-sync"); // wee initialize the keyboard input 

// Players Variables 
let playerName = ""; // variable for the input 
let playerHealt = 100;
let playerGold = 20;
let playerCurrentLocation = "village";
let gameRunning= true; 
let inventory = [];

// GAME STARTS
playerName = readline.question("What is your name ? --  "); // Ask name and save it
//console.log("\n")
console.log("Welcome to Matrix "+ playerName);
console.log("You have "+playerGold+ " gold. \n")

