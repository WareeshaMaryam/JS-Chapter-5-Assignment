//. Q.1 Write a program that take two numbers & add them in a new variable. Show the result in your browser.  
var Num1 = 3;
var Num2 = 5;
var Sum = Num1 + Num2;
document.write("Sum of  " + Num1 + " and " + Num2 + " is " + Sum + "<br/>" + "<br/>" + "<br/>" + "<br/>");




// Q.2 . Repeat task1 for subtraction, multiplication, division & modulus. 
// Subtraction
var Num1 = 3;
var Num2 = 5;
var Sum = Num1 - Num2;
document.write("Subtraction of  " + Num1 + " and " + Num2 + " is " + Sum + "<br/>");
// Multiplication
var Num1 = 3;
var Num2 = 5;
var Sum = Num1 * Num2;
document.write("Multiplication of  " + Num1 + " and " + Num2 + " is " + Sum + "<br/>");
//Division
var Num1 = 3;
var Num2 = 5;
var Sum = Num1 / Num2;
document.write("Division of " + Num1 + " and " + Num2 + " is " + Sum + "<br/>");

//Division
var Num1 = 3;
var Num2 = 5;
var Sum = Num2 % Num1;
document.write("Modulus " + Num2 + " and " + Num1 + " is " + Sum + "<br/>" + "<br/>" + "<br/>" + "<br/>");




// Q.3 Do the following using JS Mathematic Expressions 


var myNumber; // a.Declare a variable. 
document.write("Value after variable declaration is: " + myNumber + "<br/>");// b.Show the value of variable in your browser like “Value after variable declaration is: ??”
var intialNum = 5 //c. Initialize the variable with some number.
document.write("Initial Value: " + intialNum + "<br/>"); // d. Show the value of variable in your browser like “Initial Value: 5.
intialNum = ++intialNum; // e. Increment the variable. 
document.write("Value after increment is: " + intialNum + "<br/>"); //f. Show the value of variable in your browser like “Value after increment is: 6”. 
intialNum = intialNum + 7 // g. Add 7 to the variable.
document.write("Value after addition is: " + intialNum + "<br/>"); // h. Show the value of variable in your browser like “Value after addition is: 13”. 
intialNum = --intialNum // i. Decrement the variable. 
document.write("Value after decrement is: " + intialNum + "<br/>"); // j.Show the value of variable in your browser like “Value after decrement is: 12”. 
intialNum = intialNum % 3; // k. Show the remainder after dividing the variable’s value by 3.  
document.write("The reminder is " + intialNum + "<br/>" + "<br/>" + "<br/>" + "<br/>")   // l. Output : “The remainder is : 0”. 




// Q.4  Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
 var ticketPrice1 = 600;
 var ticketPrice5 = ticketPrice1 * 5;

 document.write("Cost of one movie ticket is " + ticketPrice1 + "PKR" + "<br/>");
 document.write("Total cost to buy 5 tickets to a movie is " + ticketPrice5 + "PKR" + "<br/>" + "<br/>" + "<br/>" + "<br/>")




 // Q.5 Write a script to display multiplication table of any number in your browser. 
 var Tab1 = 4;
 var Tab2 = Tab1 + 4;
 var Tab3 = Tab2 + 4;
 var Tab4 = Tab3 + 4;
 var Tab5 = Tab4 + 4;
 var Tab6 = Tab5 + 4;
 var Tab7 = Tab6 + 4;
 var Tab8 = Tab7 + 4;
 var Tab9 = Tab8 + 4;
 var Tab10 = Tab9 + 4;

document.write("Table of " + Tab1 + "<br/>");
document.write(Tab1 + " x 1 = " + Tab1 +"<br/>");
document.write(Tab1 + " x 2 = " + Tab2 +"<br/>");
document.write(Tab1 + " x 3 = " + Tab3 +"<br/>");
document.write(Tab1 + " x 4 = " + Tab4 +"<br/>");
document.write(Tab1 + " x 5 = " + Tab5 +"<br/>");
document.write(Tab1 + " x 6 = " + Tab6 +"<br/>");
document.write(Tab1 + " x 7 = " + Tab7 +"<br/>");
document.write(Tab1 + " x 8 = " + Tab8 +"<br/>");
document.write(Tab1 + " x 9 = " + Tab9 +"<br/>");
document.write(Tab1 + " x 10 = " + Tab10 +"<br/>"+"<br/>"+"<br/>"+"<br/>");




// Q.6 The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
var celsius =25; //a.  Store a Celsius temperature into a variable. 
var fahrenheit = (celsius * 9/5) + 32; //b. Convert it to Fahrenheit & output “NNoC is NNoF”.
var fahrenheitTemp = 77; //c. Now store a Fahrenheit temperature into a variable.
var celsiusTemp = (fahrenheitTemp - 32) * 5/9; //d. Convert it to Celsius & output “NNoF is NNoC”. 
document.write(celsius + "°C is " +fahrenheit +"°F" +"<br/>");
document.write( "70" +"°F is " + "2.111111°C"+"<br/>"+"<br/>"+"<br/>"+"<br/>");



 
//Q.7 .  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
var item1 = 650;
var item2 = 100;
var qItem1 = 3;
var qItem2 = 7;
var shippingCharges = 100;
totalCharges = ( (item1*qItem1) + (item2*qItem2) + 100)



document.write( "Shopping Cart" +"<br/>"+"<br/>" );
document.write( "Price of item 1 is "+ item1 +"<br/>");
document.write( "Quantity of item 1 is "+ qItem1 +"<br/>");
document.write( "Price of item 2 is "+ item2 +"<br/>");
document.write( "Quantity of item 2 is "+ qItem2 +"<br/>");
document.write( "Total cost of your order is " + totalCharges +"<br/>"+"<br/>"+"<br/>"+"<br/>")




// Q.8 Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser.
var marks = 980;
var marksObtained = 804;
var percentage = (804/980)*100;


document.write("Total Marks: " + marks +"<br/>");
document.write("Obtained Marks: " + marksObtained +"<br/>");
document.write("Percentage: " + percentage +"<br/>"+"<br/>"+"<br/>"+"<br/>");




// Q.9  Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)  

var usDollar = 10
var saudiRiyals = 25
var total = ((usDollar*104.80) + (saudiRiyals*28))
document.write("Currency in PKR"+"<br/>");
document.write("Total currency in PKR is:" + total +"<br/>"+"<br/>"+"<br/>"+"<br/>"  )



//Q.10 . Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 
//Perform all calculations in a single expression 

 var program = 5;
 var result = ((program/2)*10)/2;
 document.write( "Total Result " + result +"<br/>"+"<br/>"+"<br/>"+"<br/>" );




 // Q.11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable.c. Calculate their 2 possible ages based on the stored values.Output them to the screen like so: “They are either NN or NN  
 
 var currentYear = 2016;
 var birthYear = 1992;
 var Age1 = currentYear - birthYear;
 var Age2 = Age1 - 1;
 document.write("Age Calculator" +"<br/>");
 document.write("Current Year: " + currentYear +"<br/>");
 document.write("Birth Year: " + birthYear +"<br/>" );
 document.write( "They are either " + Age1 + " or "+ Age2 + " years old"+"<br/>" +"<br/>" +"<br/>" +"<br/>" )




 // Q.12The Geometrizer: Calculate properties of a circle. 
var radius = 20; // a. Store a radius into a variable. 
var pi = 3.142;
var circumference = 2* pi * radius; // b. Calculate the circumference
var radius2 = 20**2;
var Area = 3.142 * radius2; //Calculate the area based on the radius
document.write("The Geometrizer"+"<br/>" )
document.write("Radius of a circle: "+ radius+"<br/>" )
document.write("The circumference is: " + circumference +"<br/>" )
document.write("The Area is: " + Area +"<br/>"+"<br/>" +"<br/>" +"<br/>" )




//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
var favSnack = "Noodles"; //a. Store your favorite snack into a variable 
var currentAge = 23; //b. Store your current age into a variable. 
var maxAge = 57; //c. Store a maximum age into a variable. 
var Amount = 3; //d. Store an estimated amount per day (as a number).
var restEat = maxAge * 3; //e. Calculate how many would you eat total for the rest of your age
document.write("The life time supply Calculator"+"<br/>")
document.write("Favourite Snack: " + favSnack +"<br/>")
document.write("Current Age: " + currentAge +"<br/>")
document.write("Estimated Maximum Age: " + maxAge +"<br/>")
document.write("Amount of snacks per day: " + restEat +"<br/>")
document.write("You will need " + restEat + " to last you until the ripe old age of " + maxAge +"<br/>")









    
