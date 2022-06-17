
const S1 = "abcabc";
const S2= "ahkh";
const S3 = "abcddb";
const S4 = "kghg";
const S5 = "jjfgdhdssurg";
const S6 = "klmnek";


function rearrangeLetters(S){
    temp = "";

    //make new string with only double characters
    //iterates character by character over entire string length
    for (let i = 0; i < S.length; i++){
        let match = false;

        //compares the character at place i against every character looking for a match
        for (let j = 0; j < S.length; j++){
            if (S[i] === S[j] && i != j){
                match = true;
            }
        }
        //if a match was found, the character at index i is added to the temp string. 
        if (match === true){
            temp += S[i];       
        }
    }
    //assign new string to old string 
    S = temp;


    //bubble sort algorithm. look it up
    //Sorts from lowest to highest value. Works on characters with same case (have to all be upper or lower case) 
    for (let i = 0; i < S.length; i++){
        for (let j = 0; j < S.length; j++){
            if (S[j] > S[j + 1]){
                //string manipulation to swap positions of characters at place j and j + 1 
                temp = S.substring(0, j);
                temp += S[j + 1];
                temp += S[j];
                temp += S.slice(j + 2);
                S = temp;        
            }
        }
    }

    return S;
}

console.log(rearrangeLetters(S1));
console.log(rearrangeLetters(S2));
console.log(rearrangeLetters(S3));
console.log(rearrangeLetters(S4));
console.log(rearrangeLetters(S5));
console.log(rearrangeLetters(S6));