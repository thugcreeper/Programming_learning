let amount; // current amount of money
let principal = parseFloat(window.prompt("please enter principal(ex:1000.0)")); // principal amount
let rate = parseFloat(window.prompt("please enter rate(ex:0.05)")); // interest rate
let total=0;

document.writeln("<table>"); // begin the table
document.writeln(
    "<caption>Calculating Compound Interest</caption>");
document.writeln(
        "<h1>if you store $"+principal+" for 10 years</h1>");
document.writeln(
    "<thead><tr><th>Year</th>"); // year column heading
document.writeln(
    "<th>Amount on deposit</th>"); // amount column heading
document.writeln("</tr></thead><tbody>");

// output a table row for each year
for ( let year = 1; year <= 10; ++year )
{
    amount = principal * Math.pow( 1.0 + rate, year );

    if ( year % 2 !== 0 )
        document.writeln( "<tr class='oddrow'><td>" + year +
        "</td><td>" + amount.toFixed(2) + "</td></tr>" );
    else
        document.writeln( "<tr><td>" + year +
        "</td><td>" + amount.toFixed(2) + "</td></tr>" );
} //end for

document.writeln( "</tbody></table>" );

document.writeln("<table>"); // begin the table
document.writeln(
    "<caption>Calculating Compound Interest</caption>");
document.writeln(
    "<h1>if you store $"+principal+" every year for 10 years</h1>");
document.writeln(
    "<thead><tr><th>Year</th>"); // year column heading
document.writeln(
    "<th>Amount on deposit</th>"); // amount column heading
document.writeln("</tr></thead><tbody>");

for ( let year = 1; year <= 10; ++year )
    {
        amount = principal * Math.pow( 1.0 + rate, year );
        total+=amount;
        if ( year % 2 !== 0 )
            document.writeln( "<tr class='oddrow'><td>" + year +
            "</td><td>" + total.toFixed(2) + "</td></tr>" );
        else
            document.writeln( "<tr><td>" + year +
            "</td><td>" + total.toFixed(2) + "</td></tr>" );
    } //end for