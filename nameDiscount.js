/*
W4D1 QC Programming Challenge 
Problem 3
June 20, 2022
*/

function customerDiscount(N,Name,A) {
    //write your Logic here:
    let result = 0;
    for (let i = 0; i < A.length; i++){
        let S = A[i];
        //if the string in array A at index i includes name increase result by 1 
        if (S.includes(Name)){ 
            result += 1;
        }
    }
    return result;
}

// INPUT [uncomment & modify if required]
//let input = gets(); //gets input from rev pro, commented out to test on VSC
input =`3
        tom
        tomato
        milk`;
A = input.split("\n"); //splits input string into array of strings using new line as breaking point
N = parseInt(A[0]);
Name = A[1];
A = A.slice(2); //removes first two elements from array so it's just an array of items sold 

// OUTPUT [uncomment & modify if required]
console.log(customerDiscount(N,Name,A));

/*
String: Discount

Rick runs a supermarket store and wants to increase the sales of his store. He keeps an offer to attract customers.
The offer is that a customer will get a discount on an item if the name of the customer is present in the name of the item.
In other words, the name of the customer should exist as a substring in the name of the item purchased. 

Given the name of the customer and the items purchased, determine the number of items on which the customer will get a discount.

Function Description
In the provided code snippet, implement the provided customerDiscount(...) method using the variables to print the number of items eligible for discount. You can write your code in the space below the phrase “WRITE YOUR LOGIC HERE”.

There will be multiple test cases running so the Input and Output should match exactly as provided.
The base Output variable result is set to a default value of -404 which can be modified. Additionally, you can add or remove these output variables.

Input Format
The first line contains an integer N denoting the number of total strings. 
The second line contains the name of the customer in lowercase English letters. 
The next N-1 lines contain the names of the item purchased by the customer in lowercase English letters. 

Sample Input

3
tom
tomato
milk

Constraints
2 <= N <= 100 
1 <= A[i].length() <= 100 

Output Format
The output contains a single integer denoting the number of items eligible for discount. 

Sample Output

1 

Explanation
"tom" exists as a substring in "tomato", so tomato is eligible for a discount.
There is no substring "tom" in "milk".
Hence, only 1 item is eligible for a discount. 

Skill: Coding - Easy

INPUT	                                                                            ACTUAL OUTPUT	EXPECTED OUTPUT
3 tom tomato milk	                                                                    1	            1
5 mosh apple orange carrot peanut	                                                    0	            0
5 lo flo gnlom tlop ynu	                                                                3	            3
5 r tear orange nectar yogurt	                                                        4	            4
5 a f g h a	                                                                            1	            1
6 queyqjf bvn tabzvkqueyqjfqpfzoqx xsd jpggvrqueyqjflchinjmt jjpqueyqjfggvrbytnyonocb	3	            3
*/