function guess() {
    const readline = require("readline-sync");

    console.log("Welcome to the Number Guessing Game!");
    console.log("I'm thinking of a number between 1 and 100.");

    // Define difficulty levels
    let numbers = {
        1: { name: "Easy", chance: 10 },
        2: { name: "Medium", chance: 5 },
        3: { name: "Hard", chance: 3 }  
    };

    console.log("\nPlease select the difficulty level:");
    console.log("1. Easy (10 chances)");
    console.log("2. Medium (5 chances)");
    console.log("3. Hard (3 chances)");

    let choice;

    while (true) {
        choice = parseInt(readline.question("Enter your choice (1/2/3): "), 10);
        if (numbers[choice]) break;
        console.log("Invalid choice! Please select 1, 2, or 3.");
    }

    let maxAttempts = numbers[choice].chance; 
    console.log(`\nGreat! You have selected the ${numbers[choice].name} difficulty level.`);
    console.log(`You have ${maxAttempts} chances. Let's start the game!\n`);

    // Generate random number
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    while (attempts < maxAttempts) {
        let guess = parseInt(readline.question("Enter your guess: "), 10);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            console.log("Invalid input! Please enter a number between 1 and 100.");
            continue;
        }

        attempts++;

        if (guess === randomNumber) {
            console.log(`🎉 Congratulations! You guessed the correct number in ${attempts} attempts.`);
            return;
        } else if (guess > randomNumber) {
            console.log("❌ Incorrect! The number is less than " + guess + ".");
        } else {
            console.log("❌ Incorrect! The number is greater than " + guess + ".");
        }

        console.log(`Attempts left: ${maxAttempts - attempts}\n`);
    }

    console.log(`💀 Game Over! The correct number was ${randomNumber}. Better luck next time!`);
}

guess();
