import promptSync from 'prompt-sync';

const prompt = promptSync({ sigint: true });

let input;

do {
    input = prompt("Enter any number. Enter 0 to exit: ");
    console.log("You entered: " + input);

    if (!Number(input)) {
        console.log("Your entry is not a number. Exiting...");
        input = 0;
    }
} while (input > 0);

console.log("Bye!");