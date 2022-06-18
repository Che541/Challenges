/* Problem: N baskets with unit length 1 sit in a line.
*  Each basket contains a certain number of carrots. 
*  The rabbit starts in the first basket, eats all the 
*  carrots their then jumps M unit distances, eats all 
*  the carrots in the basket it lands in, and keep doing 
*  this until it jumps out of the line of baskets. 
*  How many carrots does the rabbit eat? 
*/

N = 5; //Number of baskets or length of the array
M = 2; //jump distance
A = [2,3,1,4,5]; //array of carrots in each basket

function carrotsEaten(N, M, A){
    let result = 0;

    //Each iteration i increases by M, the jump distance. Hence i += M
    for (let i = 0; i < N; i += M){
        result += A[i];
    }
    return result;
}

console.log(carrotsEaten(N,M,A));