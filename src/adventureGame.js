/*
    This is a game where the player have to make some choices 
    that are going to choose the path of the journey
*/

const readline = require("readline-sync"); // wee initialize the keyboard input 

// printing text of welcome
console.log("MATRIX GAME ");
console.log("¡¡¡ Prepare to see the truth !!! \n") ;

// Players Variables 
let playerName = ""; // variable for the input 
let playerHealt = 100;
let playerGold = 20;
let playerCurrentLocation = "village";
let gameRunning= true; 
let inventory = [];

// Weapon Variables
let weaponDamage = 0;

//Agent Variables
let agentDefense = 5;

//Potions Variables
let healingPotionsValue = 30;

// GAME STARTS

console.log("=================================");
console.log("       MATRIX REVOLUTIONS        ");
console.log("=================================");
console.log("\nYour quest: Defeat the agent SMITH in the metro station!");

playerName = readline.question("\nWhat is your name ? "); // Ask name and save it
console.log("\nWelcome to Matrix "+ playerName);
console.log("You have "+playerGold+ " gold. ");
console.log("Your dame at the moment is "+weaponDamage);

console.log("\nMatrix informtation you need to know:");
console.log("   - When you buy a gun, weapon damage will increase to 10!");
console.log("   - Agent Smith can withstand some damage in combat.");
console.log("   - A portion will restore 30 health.");

console.error(""); 
console.warn("");
console.info("");
