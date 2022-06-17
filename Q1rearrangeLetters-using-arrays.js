
S1 = "abcabc";
S2= "ahkh";
S3 = "abcddb";
S4 = "kghg";
S5 = "jjfgdhdssurg";
S6 = "klmnek";


function rearrangeLetters(S){
    let result = "";
    let A = [];

    //convert to array
    for (let i = 0; i < S.length; i++){
        A[i] = S[i];
    }

    let B = [];
    //make new array with only doubles
    for (let i = 0; i < A.length; i++){
        let match = false;

        for (let j = 0; j < A.length; j++){
            if (A[i] === A[j] && i != j){
                match = true;
            }
        }

        if (match === true){
            B.push(A[i]);
        }
    }

    //bubble sort. look it up. 
    for (let i = 0; i < B.length; i++){
        for (let j = 0; j < B.length; j++){
            if (B[j] > B[j + 1]){
                let temp = B[j];
                B[j] = B[j + 1];
                B[j + 1] = temp;
            }
        }
    }

    //convert back to string
    for (let i = 0; i < B.length; i++){
        result += B[i];
    }

    return result;
}

console.log(rearrangeLetters(S1));
console.log(rearrangeLetters(S2));
console.log(rearrangeLetters(S3));
console.log(rearrangeLetters(S4));
console.log(rearrangeLetters(S5));
console.log(rearrangeLetters(S6));