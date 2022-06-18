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
    let result = "";
    let A = [];
    let tempA = [];

    //split string apart character by character and 
    //put each character into the array.
    A = S.split("")

    //make new array with only letters that appear twice
    for (let i = 0; i < A.length; i++){
        let match = false;
        //marks any matches
        for (let j = 0; j < A.length; j++){
            if (A[i] === A[j] && i != j){
                match = true;
            }
        }
        //if theres a match, push it to the temp array
        if (match === true){
            tempA.push(A[i]);
        }
    }
    A = tempA;

    //sort array in alphabetical order
    A.sort();

    //convert back to string
    for (let i = 0; i < A.length; i++){
        result += A[i];
    }

    return result;
}

console.log(rearrangeLetters(S1));
console.log(rearrangeLetters(S2));
console.log(rearrangeLetters(S3));
console.log(rearrangeLetters(S4));
console.log(rearrangeLetters(S5));
console.log(rearrangeLetters(S6));