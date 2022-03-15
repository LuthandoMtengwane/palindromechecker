//Palindrome checker

var letters = [];

var word = "aba";

var rword = "";

for(var i = 0; i < word.length; i++) {
        letters.push(word[i])
}

for(var i = 0; i < word.length; i++) {
        rword += letters.pop();
}

if(rword === word) {
        console.log("Word is a palindrome")
}
else {
        console.log("Word is not a palindrome")
}
