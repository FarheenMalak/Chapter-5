// Q # 1
var numSum = 10 + 5; 
document.write( "The Sum of 5 and 10 is: " + numSum + "<br>" );

// Q # 2
var minusNum = 10 - 5; 
document.write( "The Subtracted Answer of 5 and 10 is: " + minusNum + "<br>");

var numProduct = 10 * 5; 
document.write( "The Multiplied Answer of 5 and 10 is: " + numProduct + "<br>" );

var numDivision = 10 / 5; 
document.write( "The Divided Answer of 5 and 10 is: " + numDivision + "<br>" );

var modNum = 10 % 5; 
document.write( "The Modulus Answer of 5 and 10 is: " + modNum + "<br>" );

// Q # 3
var myNum; 
document.write( "Value after variable declaration is: " + myNum + "<br>");

myNum = 2;
document.write( "Initial Value : " + myNum + "<br>" );

myNum++; 
document.write( "Value after increment : " + myNum + "<br>" );

myNum = myNum + 7;
document.write( "Value after addition : " + myNum + "<br>" );

myNum--;
document.write( "Value after decrement : " + myNum + "<br>" );

myNum = myNum % 3;
document.write( "Output : " + myNum + "<br>" );

// Q # 4
var ticketPrice = 600;
var totalTickets = ticketPrice * 5;
document.write( "Total Cost to buy 5 tickets to a movie is " + totalTickets + "<br>" );

// Q # 5
document.write( " <h2> Table Of 5: </h2>" );
var tablenum = 5*1;
document.write( "5 x 1 = " + tablenum + "<br>" );
tablenum = 5*2;
document.write( "5 x 2 = " + tablenum + "<br>" );
tablenum = 5*3;
document.write( "5 x 3 = " + tablenum + "<br>" );
tablenum = 5*4;
document.write( "5 x 4 = " + tablenum + "<br>" );
tablenum = 5*5;
document.write( "5 x 5 = " + tablenum + "<br>" );
tablenum = 5*6;
document.write( "5 x 6 = " + tablenum + "<br>" );
tablenum = 5*7;
document.write( "5 x 7 = " + tablenum + "<br>" );
tablenum = 5*8;
document.write( "5 x 8 = " + tablenum + "<br>" );
tablenum = 5*9;
document.write( "5 x 9 = " + tablenum + "<br>" );
tablenum = 5*10;
document.write( "5 x 10 = " + tablenum + "<br>" );

// Q # 6
document.write( " <h2> Temperature Converter: </h2>" );
var celsiusTemp = 30;
var convertedTempF = (celsiusTemp * 9/5) + 32;
document.write("30°C is " + convertedTempF + "°F" + "<br>");

var fahrenheitTemp = 15;
var convertedTempC = (fahrenheitTemp - 32) * 5/9;
document.write("15°F is " + convertedTempC + "°C" + "<br>");

// Q # 7
document.write( " <h2> Shopping Cart: </h2>" );
var price1 = 650;
document.write("Price of item 1 is " + price1 + "<br>" );

var quantity1 = 3;
document.write("Quantity Of Item 1 is " + quantity1 + "<br>");

var price2 = 100;
document.write("Price of item 2 is " + price2 + "<br>" );

var quantity2 = 7;
document.write("Quantity Of item 2 is " + quantity2 + "<br>" );

var charges = 100 ;
document.write("Shipping charges : " + charges + "<br>");

var totalCost = (price1 * quantity1) + (price2 * quantity2) + charges;
document.write("<h3>Total cost of your order is " + totalCost + "</h3><br>" );

// Q # 8
document.write( " <h2> Marksheet: </h2>" );
var totalMarks = 700;
document.write("Total Marks : " + totalMarks + "<br>" );

var marksObt = 523;
document.write("Marks Obtained : " + marksObt + "<br>" );

var percentage = (marksObt / totalMarks) * 100;
document.write("Percentage: " + percentage + "%" + "<br>" );

// Q # 9
document.write( " <h2> Currency in PKR : </h2>" );
var pkrCurrency = (10 * 104.80) + (25 * 28);
document.write("Total Currency In PKR: " + pkrCurrency + "<br>" );

// Q # 10
var numQ10 = 6;
var answer = numQ10 + (5 * 10) / 2;
document.write("Answer after added by 5, multiplied by 10, and divided by 2 is " + answer + "<br>");

// Q # 11
document.write( " <h2> Age Calculator: </h2>" );
var currentYear = 2024;
document.write("Current Year: " + currentYear + "<br>" );

var birthYear = 1992;
document.write("Birth Year: " + birthYear + "<br>" );

var age = currentYear - birthYear;
var age2 = age + 1;
document.write("Their age is either " + age + " or " + age2 + "<br>" );

// Q # 12
document.write( " <h2> The Geometrizer: </h2>" );
var radius = 20;
document.write("Radius of circle is: " + radius + "<br>" );

var circumference = 2 * 3.142 * radius;
document.write("Circumference of circle is: " + circumference + "<br>" );

var area = 3.142 * radius * radius; 
document.write("Area of the circle is: " + area + "<br>" );

// Q # 13
document.write( " <h2> The Lifetime Supply Calculator: </h2>" );

var favSnacks = "lays";
document.write("Favorite Snack: " + favSnacks + "<br>" );

var currentAge = 18;
document.write("Current Age: " + currentAge + "<br>");

var maxAge = 55;
document.write("Estimated Maximum Age: " + maxAge + "<br>");

var perDay = 2;
document.write("Amount of Snacks per day: " + perDay + "<br>");

var lifetime = (maxAge - currentAge) * perDay * 365;
document.write("You will need " + lifetime + " lays to last you until the ripe old age of " + maxAge + "<br>" );
