/* Problem: Take a string that contains only lower case letters
*  and each letter appears no more than twice. Remove all letters 
*  from the string that only appear once and then sort the characters
*  in alphabetical order. 
*/

//provided by site
const S1 = "abcabc";
const S2= "ahkh";
const S3 = "abcddb";
const S4 = "kghg";
const S5 = "jjfgdhdssurg";
const S6 = "klmnek";

function rearrangeLetters(S){
    let tempS = "";

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
            tempS += S[i];       
        }
    }
    //assign new string to old string 
    S = tempS;


    //bubble sort algorithm. look it up
    //Sorts from lowest to highest value. Works on characters with same case (have to all be upper or lower case) 
    for (let i = 0; i < S.length; i++){
        for (let j = 0; j < S.length; j++){
            if (S[j] > S[j + 1]){
                //string manipulation to swap positions of characters at place j and j + 1 
                tempS = S.substring(0, j);
                tempS += S[j + 1];
                tempS += S[j];
                tempS += S.slice(j + 2);
                S = tempS;        
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