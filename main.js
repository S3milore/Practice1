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
  let j=0;
    do {
   arr2.push(1);
    j++;
} while (input2[j]==="a");
do {
   arr2.push(2);
    j++;
} while (input2[j]==="b");
do {
   arr2.push(3);
    j++;
} while (input2[j]==="c");
do {
  arr2.push(4);
   j++;
} while (input2[j]==="d");do {
  arr2.push(5);
   j++;
} while (input2[j]==="e");do {
  arr2.push(6);
   j++;
} while (input2[j]==="f");do {
  arr2.push(7);
   j++;
} while (input2[j]==="g");do {
  arr2.push(8);
   j++;
} while (input2[j]==="h");do {
  arr2.push(9);
   j++;
} while (input2[j]==="i");do {
  arr2.push(10);
   j++;
} while (input2[j]==="j");do {
  arr2.push(11);
   j++;
} while (input2[j]==="k");do {
  arr2.push(12);
   j++;
} while (input2[j]==="l");do {
  arr2.push(13);
   j++;
} while (input2[j]==="m");do {
  arr2.push(14);
   j++;
} while (input2[j]==="n");do {
  arr2.push(15);
   j++;
} while (input2[j]==="o");do {
  arr2.push(16);
   j++;
} while (input2[j]==="p");do {
  arr2.push(17);
   j++;
} while (input2[j]==="q");do {
  arr2.push(18);
   j++;
} while (input2[j]==="r");do {
  arr2.push(19);
   j++;
} while (input2[j]==="s");do {
  arr2.push(20);
   j++;
} while (input2[j]==="t");do {
  arr2.push(21);
   j++;
} while (input2[j]==="u");do {
  arr2.push(22);
   j++;
} while (input2[j]==="v");do {
  arr2.push(23);
   j++;
} while (input2[j]==="w");do {
  arr2.push(24);
   j++;
} while (input2[j]==="x");do {
  arr2.push(25);
   j++;
} while (input2[j]==="y");do {
  arr2.push(26);
   j++;
} while (input2[j]==="z");
//this part adds up the numbers in the arr2 and results the answer in total.
//totalling
let total=0;
for(let j=0; j<arr2.length; j++){
  total+=(arr2[j])
}
console.log(total)
}
console.log(nameFunc("abc"));