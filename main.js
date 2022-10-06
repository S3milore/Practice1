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
  for (let j=0; j<input2.length; j++){
  if(input2[j]=="a"){
   arr2.push(1);}
   else if (input2[j]=="b"){
   arr2.push(2);
   }else if (input2[j]=="c"){
   arr2.push(3);
   }else if (input2[j]=="d"){
   arr2.push(4);
   }else if (input2[j]=="e"){
   arr2.push(5);
   }else if (input2[j]=="f"){
   arr2.push(6);
   }else if (input2[j]=="g"){
   arr2.push(7);
   }else if (input2[j]=="h"){
   arr2.push(8);
   }else if (input2[j]=="i"){
   arr2.push(9);
   }else if (input2[j]=="j"){
   arr2.push(10);
   }else if (input2[j]=="k"){
   arr2.push(11);
   }else if (input2[j]=="l"){
   arr2.push(12);
   }else if (input2[j]=="m"){
   arr2.push(13);
   }else if (input2[j]=="n"){
   arr2.push(14);
   }else if (input2[j]=="o"){
   arr2.push(15);
   }else if (input2[j]=="p"){
   arr2.push(16);
   }else if (input2[j]=="q"){
   arr2.push(17);
   }else if (input2[j]=="r"){
   arr2.push(18);
   }else if (input2[j]=="s"){
   arr2.push(19);
   }else if (input2[j]=="t"){
   arr2.push(20);
   }else if (input2[j]=="u"){
   arr2.push(21);
   }else if (input2[j]=="v"){
   arr2.push(22);
   }else if (input2[j]=="w"){
   arr2.push(23);
   }else if (input2[j]=="x"){
   arr2.push(24);
   }else if (input2[j]=="y"){
   arr2.push(25);
   }else if (input2[j]=="z"){
   arr2.push(26);}
  }
//this part adds up the numbers in the arr2 and results the answer in total.
//totalling
let total=0;
for(let j=0; j<arr2.length; j++){
  total+=(arr2[j])}
return total;
}
console.log(nameFunc("paul"));