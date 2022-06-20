/*
W4D1 QC Programming Challenge 
Problem 1
June 20, 2022
*/

function message(S) {
    //write your Logic here:
    let total = 0;
    for ( let i = 0; i < S.length; i++){
        let char = S.charAt(i); //pulls character out of string at index i 
        let charL = char.toLowerCase(); //converts character to lowercase if able
        let charU = char.toUpperCase(); //converts character to uppercase is able
    
        //if the character converted to lowercase isn't the same as the original character
        //that means the character is an uppercase letter so score is 2 for that letter 
        if (charL !== char){ 
            total += 2;
        //similarly if the uppercase form of the character isn't the same as the original character
        //that means the character is a lowercase letter so score is 1 for that letter
        } else if (charU !== char) {
            total += 1;
        }
        //NOTE: The third case is that the character is not a letter so score is 0 for that character.
        //However, there is no need to code for that case. 
    }
    return total;
}

// INPUT [uncomment & modify if required]
//var temp = gets().trim('\n').split('\n'); //gets string from rev pro, commented out to test on VSC 
const providedInputs = ["ad7A7a9", "fdkBSAA", "913849", "9148ac", "955AK1", "Ajfninibfd"];
const expectedResults = [5, 11, 0, 2, 4, 11];
var temp = [providedInputs[0]];
var S = temp[0];
// OUTPUT [uncomment & modify if required]
console.log(message(S));

/*
Strings: Value of the Message

A message in the form of a string is given and the value of the message is the sum of points.
Lowercase letters are given 1 point (a-z).
Uppercase letters are given 2 points (A-Z).
Other characters/letters have 0 points.
Find the value of the message.

Function Description
In the provided code snippet, implement the provided message(...) method using the variables to print the value of the message. You can write your code in the space below the phrase “WRITE YOUR LOGIC HERE”.

There will be multiple test cases running so the Input and Output should match exactly as provided.
The base Output variable result is set to a default value of -404 which can be modified. Additionally, you can add or remove these output variables.

Input Format
A single line of input contains string S.

Sample Input
Abfd@3#c   -- denotes the string

Constraints
1<=S.length<=106.

Output Format
The output contains a single integer denoting the value of the message.

Output
 6

Explanation 
In the string:
There is 1 upper case letter: A (2 points)
There are 4 lower case letters: b,f,d,c (4 points)
All other characters/letters have 0 points.
Hence, the output is 6.
Skill: Coding - Easy

INPUT	    ACTUAL OUTPUT	EXPECTED OUTPUT
ad7A7a9	    5	            5
fdkBSAA	    11	            11
913849	    0	            0
9148ac	    2	            2
955AK1	    4	            4
Ajfninibfd	11	            11
*/