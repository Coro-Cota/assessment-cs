let makeUnique = (str) => {
    let uniqueStr = "";
    let countChar = {}
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (countChar[char]){
            countChar[char]++;
        } else {
            countChar[char] = 1
            uniqueStr = uniqueStr+char;
        }
    }
    return uniqueStr
}
console.log(makeUnique('helloworld')); 

// runtime of this is O(n) because it uses a forloop, space is O(1)