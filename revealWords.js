function solve(string, text) {
    words = string.split(', ');
        
    for (let word of words) {
        let searchedWord = "*".repeat(word.length);
        text = text.replace(searchedWord, word);
    }
    
    console.log(text);
}
