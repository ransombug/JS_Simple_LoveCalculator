//Love Calculator
//
prompt("Your Name !");
prompt("Crush Name !");

var lovPer = Math.random() * 100;
lovPer = Math.floor(lovPer) + 1;

if(lovPer > 75)
 {
     alert("Your Love percentage : " +lovPer+ "% " + "You love each other like Romeo Loved Juliet ❤");
 }

if((lovPer>40) && (lovPer<=75))
 {
     alert("Your Love percentage : " +lovPer+ "%");
 }

if(lovPer<=40)
 {
     alert("Your Love percentage : " +lovPer+ "%" + " You go together like Oil & Water!");
 }

 function myAction() {
   swal('Hey,Just want you to know that : ', 'You are great,Keep Working Hard & You will achieve all the Success!');
 }
