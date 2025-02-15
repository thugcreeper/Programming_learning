// Fig. 10.21: InitArray3.js
// Initializing multidimensional arrays.
function start()
{
    var array1 = [ [ 1, 2, 3 ], // row 0
                   [ 4, 5, 6 ] ]; // row 1

    var array2 = [ [ 1, 2 ], // row 0
                   [ 3 ],    // row 1
                   [ 4, 5, 6 ] ]; // row 2

    outputArray( "Values in array1 by row", array1,
        document.getElementById( "output1" ) );
    outputArray( "Values in array2 by row", array2,
        document.getElementById( "output2" ) );
} // end function start
// display array contents

function outputArray( heading, theArray, output )
{
    var results = "";

    // iterates through the set of one-dimensional arrays
    for ( var row in theArray )//equal to for ( let row=0;row<theArray.length;row++)
    {
        results += "<h2>"; // start ordered list

        // iterates through the elements of each one-dimensional array
        for ( var column in theArray[ row ] )//equal to for ( let col=0;col<theArray[row].length;col++ )
        {
            results += " " + theArray[ row ][ column ] + " ";
        } // end inner for
        
        results += "</h2>"; // end ordered list
    } // end outer for

    output.innerHTML = results;
} // end function outputArray

window.addEventListener( "load", start, false );
