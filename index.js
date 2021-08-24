const greeting = "Hello how are you";

    
function revererseString(text){
    let finalReverse = " ";
    for(const letter of text){

        console.log(letter);

        finalReverse = letter + finalReverse

        
    }
    console.log(finalReverse);
}
const reversed =revererseString(greeting);
console.log(reversed);