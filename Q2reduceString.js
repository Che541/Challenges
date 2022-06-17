
//provided by site. 
let sampleInput = 
`5 
abbac`;

let sampleInput2 = 
`1 
a`;

let sampleInput3 = 
`5 
aaaaa`;

let sampleInput4 = 
`13 
nwlrbbmqbhcda`;

let sampleInput5 = 
`61 
ebgnhamdhnuxbvzlufpkksnbvdsssjdwkkjumxxtntsooraiyrsllimgnhafq`;

let sampleInput6 = 
`12 
gvwqtyskrgse`;


function reduceString(sampleInput){
    //pulling integer and string from multiline string provided. 
    let input = sampleInput.split("\n"); //split breaks a string apart and put it into an array. 
                                        //The function's parameters are where the break points will be.
                                        //In this case we us \n or newline since the values are on different lines. 
    let N = input[0]; //length of string
    let S = input[1]; //the string we're working on.


    let result = "";

    //iterates over every character in the string 
    for (let i = 0; i < N; i++){

        //initialize and reset each iteration
        let match = false;

        //iterates over every character in the result string
        //checking the current character against each character in the result string. 
        for (let j = 0; j < result.length; j++){

            //if there is a match
            if (result[j] === S[i]){

                match = true;

            }
        }

        //if no match is detected add the character to the result string
        if(match === false){

            result += S[i]; 

        }
    }

    return result;
}
    //OUTPUT [uncomment & modify if required]
   console.log(reduceString(sampleInput));
   console.log(reduceString(sampleInput2));
   console.log(reduceString(sampleInput3));
   console.log(reduceString(sampleInput4));
   console.log(reduceString(sampleInput5));
   console.log(reduceString(sampleInput6));