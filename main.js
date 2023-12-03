
// var content="";

// for(var i=0;i<100;i++){

//     content+="<li> Haidy </li>";
// }

// document.getElementById("demo").innerHTML=content;
// console.log(content);


// Q1

// var number=window.prompt("Enter a Number");
// console.log("the number you entered is "+number);

// q2

// var number=+window.prompt("Enter a Number");
// if(number%3==0 && number%4==0){
//     console.log("yes");
// }else{
// console.log("NO");
// }

// q3
// var text=window.prompt("Enter two numbers");
// var num=text.split(" ");
// if (+num[0]>+num[1]) {
//     console.log(num[0]);
// }else{
//     console.log(num[1]);
// }

// q4

// var number =window.prompt("Entert a Number ");
// if(+number>=0){
//     console.log("+ve positive");
// }
// else{
//     console.log("-ve negative");
// }

// q5
// var num1=+window.prompt("Enter num1");
// var num2=+window.prompt("Enter num2");
// var num3 =+window.prompt("Enter num3");
// console.log("Entered numbers" +num1+"  " +num2+"   " +num3);
// var max;
// var min;
// if(num1 >num2 && num1>=num3){
// max=num1;
// if(num2>=num3){
// min=num3;
// }else{
// min=num2;    
// }

// }
// else if(num2>=num1&& num2>=num3){
//     max=num2;
// if(num1>=num3){
// min=num3;
// }else{
// min=num1;
// }
// }
// else{
//     max=num3;
// if(num2>=num1){
// min=num1;
// }else{
//     min=num2;
// }
// }
// console.log("max is "+ max);
// console.log("min is "+min);

// q6

//  var number =+window.prompt("Enter a number");
// //  number=parseInt(number);
//  if(number%2==0){
//     console.log("even");
//  }
//  else{
//     console.log("odd");
//  }


// q8
// var char =window.prompt("Enter a character ");
// if(char=='a' || char=='A' || char=='e' || char=='E' || char=='o' ||char=='O' || char=='i' || char=='I' || char=='u'||char=='U'){
//     console.log("vowel");
// }else{
//     console.log("constant");
// }


// Q9
// var number =+window.prompt("Enter a number ");
// for(var i=1;i<=number;i++){
//     console.log(i);
// }


//q10

// var number =+window.prompt("Enter a number ");
//  for(var i=1;i<=12;i++){
//     console.log(number*i);

// }


// q11
//  var number =+window.prompt("Enter a number ");
//   for(var i=1;i<=number;i++){
//      if(i%2==0){
//         console.log(i);
//      }

//  }

// q12
// var number1 =+window.prompt("Enter a number");
// var number2 =+window.prompt("Enter a number");

// console.log(number1**number2);


// q13
// var subject1 =+window.prompt("Enter subject1");
// var subject2 =+window.prompt("Enter subject2");
// var subject3 =+window.prompt("Enter subject3");
// var subject4 =+window.prompt("Enter subject4");
// var subject5 =+window.prompt("Enter subject5");

// var totalGrads=subject1+subject2+subject3+subject4+subject5;
// var avg=totalGrads/5;
// var percentage =totalGrads/500*100;
// console.log("total marks = "+totalGrads);
// console.log("Average marks = "+avg);
// console.log("percentage =  " +percentage);


// q14
// var month = window.prompt("Enter month number ");

// if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
//     console.log("Days in month : 31");
// }else if(month==2){
//     console.log("Days in month : 28");
// }
// else{
//     console.log("Days in month : 30");  
// }


// q15
// var subjects=[];
// var x=0;
// for(var i=0;i<5;i++){
//      subjects[i] = +window.prompt("Enter grade subject "+ ++x);

// }
// for(var i=0;i<5;i++){
//    if(subjects[i]>=90){
//     console.log("percentage is " +subjects[i]/100*100 +" % " +"==>A");
//    }
//    else if(subjects[i]>=80){
//     console.log("percentage is " +subjects[i]/100*100 +" % " +"==>B");
//    }
//    else if(subjects[i]>=70){
//     console.log("percentage is " +subjects[i]/100*100 +" % " +"==>C");
//    }
//    else if(subjects[i]>=60){
//     console.log("percentage is " +subjects[i]/100*100 +" % " +"==>D");
//    }
//    else if(subjects[i]>=40){
//     console.log("percentage is " +subjects[i]/100*100 +" % " +"==>E");
//    }
//    else{
//     console.log("percentage is " +subjects[i]/100*100 +" % " +"==>F");

//    }
// }


// q15

// var month =window.prompt("enter month number ");

// switch (month) {
//  case "1"  :
//     console.log(31);

//    break;

// case "3"  :
//     console.log(31);

//    break;

// case "5"  :
//     console.log(31);

// break;

// case "7"  :
//     console.log(31);

// break;

// case "8"  :
//     console.log(31);

// break;

// case "10"  :
//     console.log(31);

// break;
// case "12"  :
//     console.log(31);

// break;

// case "2" :
//     console.log(28);

//  default:
//     console.log(30);
// }



//16
// var char ="";
// char =window.prompt("please enter a character ");

//  switch(char ){
//   case 'a' :
//     console.log("vowel");
//     break;

// case 'e' :
//     console.log("vowel");
//     break;
// case 'E' :
//     console.log("vowel");
//     break;

// case 'A' :
//     console.log("vowel");
//     break;

// case 'o' :
//     console.log("vowel");
//     break;

// case 'O' :
//     console.log("vowel");
//     break;

// case 'i' :
//     console.log("vowel");
//     break;

// case 'I' :
//     console.log("vowel");
//     break;
// case 'U' :
//     console.log("vowel");
//     break;
// case 'u' :
//   console.log("vowel");
//     break;
// default:
//     console.log("contstant");

// }

// q17
// var num1;
// var num2;
// var max =0;
//  num1 =+window.prompt("enter a number ");
//  num2=+window.prompt("enter a number ");
// switch (true) {
    
// case num1>num2:
//      max=num1;
//     console.log(max);
//     // console.log("case1 ");
//     break;
// case num1<num2:
//     max=num2;
//     console.log(max);
//     // console.log("case2 ")
//     break;
    
// default:
//    console.log("they are equal !");
// }


// q18

// var number =+window.prompt("Enter a number");

// switch(true){
// case number%2==0 :
//     console.log("even");
//     break;

// default :
//   console.log("odd");
// }


// q19


// var number =+window.prompt("Enter a number :");

// switch (true){
//     case number>0 :
//     console.log("+ve");
//     break;

//     case number<0 :
//     console.log("-ve");
//     break;

//    default:
//     console.log(0);
// }


// q20

// var char ="";
// var num1 =+window.prompt("enter num1 ");
// var num2 =+window.prompt("enter num2 ");
// char =window.prompt("enter a character  + or - or  /  or*");

// switch (char) {
//     case '+':
    
//     console.log(num1 +" + " +num2 +" = " +(num1+num2))  ;
//     break;
//     case '-':
//         console.log(num1 +" - " +num2 +" = " +(num1-num2))  ;     
//     break;
    
//     case '*':
//         console.log(num1 +" * " +num2 +" = " +(num1*num2))  ;
//     break;
    
//     case '/':
//         console.log(num1 +" / " +num2 +" = " +(num1/num2))  ;
//     break;
      
       

//     default:
//         console.log("enter proper character ");
//         break;
// }





















