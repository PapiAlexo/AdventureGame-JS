/*
    This is a game where the player have to make some choices 
    that are going to choose the path of the journey
*/

const readline = require("readline-sync"); // wee initialize the keyboard input 

// Players Variables 
let playerName = ""; // variable for the input 
let playerHealth = 50;
let playerGold = 20;
let playerCurrentLocation = "village";

let inventory = [false,false,false];
let isFirstTime = true;
let playerDecision = 0;

// Weapon Variables
let weaponDamage = 0;

//Agent Variables
let agentDefense = 5;
let agentLife = 100

//Potions Variables
let healingPotionsValue = 30;

// other variables 
let gameRunning= true; 

//Location 
let arsenalDescription = "You are at the arsenal. You can by what ever gun you want.";
let arsenalFirstTime = true;
let arsenalDecision = 0;

let villageDescription = "You're in a bustling village. The arsenal and market are nearby.";
let villageFirstTime = true;

let raveClubDescription =  "You're in the Code, the rave club, surround by people.";
let reaveFirstTime = true;

let oracleDescription =  "You are at the apartment of the oracle, a old apartment with a smell of cookies.";
let oracleFirstTime = true;

// GAME STARTS

// printing text of welcome

console.log("=================================");
console.log("       MATRIX REVOLUTIONS        ");
console.log("=================================");
console.log("\nYour quest: Defeat the agent SMITH in the metro station!");
console.log("Only the brave will see the truth...");

playerName = readline.question("\nEnter the name, warrior: "); // Ask name and save it
console.log("\nWelcome to Matrix "+ playerName);

console.log("\n=== PLAYER INFORMATION ===");
console.log("--------------------------------------------------");
console.log("- You have "+playerGold+ " gold. ");
console.log("- Your damage at the moment is "+weaponDamage);
console.log("--------------------------------------------------");

console.log("\nMatrix information you need to know:");
console.log("   - When you buy a gun, weapon damage will increase to 10!");
console.log("   - Agent Smith can withstand some damage in combat.");
console.log("   - A portion will restore 30 health.");
console.log("==================================================");

playerCurrentLocation ="Village"
if (villageFirstTime )
{
    console.log("\n"+villageDescription);
    villageFirstTime = false;
}

while (gameRunning|| playerHealth <= 0)
{
    console.log("\n CURRENT LOCATION --> " + playerCurrentLocation.toUpperCase());
    console.log("\n What would you like to do?");
    console.log("==================================================");
    console.log("   1- Chech item slot");
    console.log("   2- Visit the arsenal");
    console.log("   3- Visit the Oracle");
    console.log("   4- Visit the Rave Club");
    console.log("   5- Check status");
    console.log("   6- Quit game");
    console.log("==================================================");

    playerDecision = readline.question("\nType the number of your choice "); 


    switch(playerDecision)
    {
        case "1": 
        for (let i = 0; i<3;i++)
        {
            console.log("\nChecking item slot "+(i+1)+"...");
            
            switch (i)
            {
                case 0:
                    if(inventory[i]=== false)
                    {
                        console.log("Emty Slot")
                    }
                    else {
                        console.log("Found: Gun ")
                    }
                break;
                 case 1:
                    if(inventory[i]=== false)
                    {
                        console.log("Emty Slot")
                    }
                    else {
                        console.log("Found: Health Potion ")
                    }
                break;
                 case 2:
                    if(inventory[i]=== false)
                    {
                        console.log("Emty Slot")
                    }
                    else {
                        console.log("Found: Shield ")
                    }
                break;
            }
            
        }
        console.log("\nSearching for agent Smith in the village");
        break;

        case "2": 
        console.log("\nHeading to the Arsenal...");
        playerCurrentLocation = "arsenal"
        break;

        case "3": 
        console.log("\nWalking to the Oracle’s apartment...");
        playerCurrentLocation = "oracle"
        break;

        case "4": 
        console.log("\nEntering the Rave Club...");
        playerCurrentLocation = "rave"
        break;;

        case "5": 
            console.log("\n=== PLAYER STATUS ===");
            console.log("- Health: " + playerHealth);
            console.log("- Gold: " + playerGold);
            console.log("- Weapon Damage: " + weaponDamage);
            console.log("======================");

        break;

        case "6": 
        console.log("\n*** QUITTING GAME ***");
        quitingGame = true;

        break;

        default:
        console.log("\nThis is not an option of the menu");
    }
        while(playerCurrentLocation === "arsenal" )
        {
            if(arsenalFirstTime)
            {
                console.log("\n"+arsenalDescription);
                arsenalFirstTime = false;
            }
            console.log("\n Welcome to the Arsenal! Choose your action:");
            console.log("==================================================");
            console.log("   1- Buy a mp5 ---- 5$");
            console.log("   2- Buy ar15 ----- 10$");
            console.log("   3- Beretta ----- 15$");
            console.log("   4- Return to Village");
            console.log("   5- Quit game");
            console.log("==================================================");

            arsenalDecision= parseInt(readline.question("Write the number of choice "));

            switch (arsenalDecision)
            {
                case 1:
                    if(playerGold >=5)
                    {
                        console.log("\nYou have purchased the mp5");
                        weaponDamage = weaponDamage +10;
                        console.log("Weapon damage increased to "+weaponDamage);
                        playerGold -= 5;
                    }
                    else
                    {
                        console.log("Not enough gold for mp5 that cost 5$");
                    }
                
                break;

                case 2:
                     if(playerGold >=10)
                    {
                        console.log("\nYou have purchased the ar15");
                        weaponDamage = weaponDamage +10;
                        console.log("Weapon damage increased to "+weaponDamage);
                        playerGold -= 10;
                    }
                    else
                    {
                        console.log("Not enough gold for mp5 that cost 10$");
                    }
                 

                break;
                
                case 3:
                      if(playerGold >=15)
                    {
                        console.log("\nYou have purchased the beretta");
                        weaponDamage = weaponDamage +10;
                        console.log("Weapon damage increased to "+weaponDamage);
                        playerGold -= 15;
                    }
                    else
                    {
                        console.log("Not enough gold for mp5 that cost 15$");
                    }
                 
                break;

                case 4:
                    console.log("\nReturning to the Village...");
                    playerCurrentLocation = "village";
                break;

                case 5:
                    console.log("\n*** QUITTING GAME ***");
                    process.exit();
                break;

                default:
                console.log("\nThis is not an option of the menu");

            }
            if(playerDecision>0 && playerDecision<4)
            {
                inventory[0]=true;
            }
        }
         while (agentLife >=0 && playerCurrentLocation === "rave")
            {
                if(reaveFirstTime)
                {
                    console.log("\n"+raveClubDescription);
                    reaveFirstTime = false;
                }
                if(agentLife <= 0)
                    {
                        console.log("\nAGENT DEFEATED");
                        playerCurrentLocation = "village";
                    }
                    else
                    {
                        console.log("\nThere is Agent Smith, it was waitting for you. GET READY FOR BATTLE")
                        console.log("\n=== AGENT STATUS ===");
                        console.log("- Health: " + agentLife);
                        console.log("- Damage: " + agentDefense);
                        console.log("======================");

                        console.log("\n IN BATTLE !! Choose your action:");
                        console.log("==================================================");
                        console.log("   1- Attack");
                        console.log("   2- Run to Village");
                        console.log("   3- Quit game");
                        console.log("==================================================");

                        playerDecision = parseInt(readline.question("Write the number of choice "))

                        switch (playerDecision)
                        {
                            case 1: 
                            console.log("You attack");
                            agentLife -= weaponDamage;
                            if(agentLife >0)
                            {
                                console.log("Agent health: " + agentLife);
                            }
                            else
                            {
                                console.log("Agent health: " + 0);
                            }
                          
                            break;

                            case 2:
                            console.log("\n*** QUITTING BATTLE ***");
                            console.log("Returning to the village...");
                            playerCurrentLocation = "village"
                            break;

                            case 3:
                                console.log("\n*** QUITTING GAME ***");
                                process.exit();
                            break;

                            default:
                            console.log("\nThis is not an option of the menu");
                        }
                    }
               
                    
            }
}
process.exit();

    
 