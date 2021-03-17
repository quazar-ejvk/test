
let num = 50;

if (num < 49) {
    console.log("Неверно");
} else if (num ==100) {
    console.log("Много");
} else {
    console.log("Верно");
}

// тернарный оператор

(num ==50) ? console.log("Верно") : console.log("Неверно");

switch (num) {
    case num < 49:
        console.log("nope");
        break;
    case num > 100:
        console.log("not yet");
        break;
    case 50:
        console.log("yes");
        break;
    default:
        console.log("no");
        break;
}