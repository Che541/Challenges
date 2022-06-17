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