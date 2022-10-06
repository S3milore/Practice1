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
do {
  arr2.push(4);
   i++;
} while (input2[i]==="d");do {
  arr2.push(5);
   i++;
} while (input2[i]==="e");do {
  arr2.push(6);
   i++;
} while (input2[i]==="f");do {
  arr2.push(7);
   i++;
} while (input2[i]==="g");do {
  arr2.push(8);
   i++;
} while (input2[i]==="h");do {
  arr2.push(9);
   i++;
} while (input2[i]==="i");do {
  arr2.push(10);
   i++;
} while (input2[i]==="j");do {
  arr2.push(11);
   i++;
} while (input2[i]==="k");do {
  arr2.push(12);
   i++;
} while (input2[i]==="l");do {
  arr2.push(13);
   i++;
} while (input2[i]==="m");do {
  arr2.push(14);
   i++;
} while (input2[i]==="n");do {
  arr2.push(15);
   i++;
} while (input2[i]==="o");do {
  arr2.push(16);
   i++;
} while (input2[i]==="p");do {
  arr2.push(17);
   i++;
} while (input2[i]==="q");do {
  arr2.push(18);
   i++;
} while (input2[i]==="r");do {
  arr2.push(19);
   i++;
} while (input2[i]==="s");do {
  arr2.push(20);
   i++;
} while (input2[i]==="t");do {
  arr2.push(21);
   i++;
} while (input2[i]==="u");do {
  arr2.push(22);
   i++;
} while (input2[i]==="v");do {
  arr2.push(23);
   i++;
} while (input2[i]==="w");do {
  arr2.push(24);
   i++;
} while (input2[i]==="x");do {
  arr2.push(25);
   i++;
} while (input2[i]==="y");do {
  arr2.push(26);
   i++;
} while (input2[i]==="z");
//this part adds up the numbers in the arr2 and results the answer in total.
//totalling
let total=0;
for(let j=0; j<arr2.length; j++){
  total+=(arr2[j])
}
console.log(total)
}
console.log(nameFunc("paul"));