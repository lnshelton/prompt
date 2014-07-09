var prompt= require('sync-prompt').prompt;
var first = prompt ('what is your fist name?');
var last  = prompt ('what is your last name?');
var full = first + ' ' + last;
console.log ('your full name is', full);

var color = prompt ('What is your fav color?');
console.log('your fav color is '+ color +'.');


var age = prompt ("What is your dog's age? ");
console.log (typeof age);
age = parseInt  (age);
console.log(typeof age) 

var humanAge = age + 7;
console.log ('your dog is ' + age + ' years old');
console.log ('your dog is ' + humanAge +' human years old');
age = prompt ("What is your age?");
age = parseInt (age);
  if (age >=21) {
    console.log ('you can drink');
  } else{
    console.log ('no drink for you');
 }
 

var scale = prompt ('what scale are you using (f/C)?');
var temp = prompt ('what is the temperature?');


temp= parseInt (temp);
var converted;
if(scale=== 'f'){
    converted = (temp -32) * 5/9;
    alt = 'c';
}else{
  converted = (temp * 9/5) + 32;
  alt= 'f';
}
console.log(temp + scale + '->' + converted + alt);

var weight= prompt ("What is your weight?");
var height= prompt ("What is your height?");
weight=parseInt (weight)
  height=parseInt (height)
var bmi=weight/ (height*height)*703
console.log("Your bmi is " + bmi)

