let arr1=[];
function nameFunc(val){
  //this part inputs individual characters from val into arr1
let input=val;
  for (let i=0; i<input.length;i++){
    arr1.push(input[i]);}
//this part checks the individual characters in arr1 and enters 
//their equivalent values into an arr2
  let input2 = arr1;
  let arr2=[];
  //basic code for each character
  let i=0;
    do {
   arr2.push(1);
    i++;
} while (input2[i]==="a");
do {
   arr2.push(2);
    i++;
} while (input2[i]==="b");
do {
   arr2.push(3);
    i++;
} while (input2[i]==="c");
//this part adds up the numbers in the arr2 and results the answer in total.
//totalling
let total=0;
for(let j=0; j<arr2.length; j++){
  total+=(arr2[j])
}
console.log(total)
}
console.log(nameFunc("abc"));