/*function makeScreenBlack() {
    // Create a canvas element



    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
 
    // Set the canvas size to match the screen size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
 
    // Set the fill color to black
    context.fillStyle = 'black';
 
    // Draw a black rectangle that covers the entire screen
    context.fillRect(0, 0, canvas.width, canvas.height);
 
    // Append the canvas to the document body
    document.body.appendChild(canvas);
    canvas.style.position="absolute";
    canvas.style.zIndex="1000";

}
 
// Call the function to make the screen black
*/


var meta = document.createElement('meta');
meta.setAttribute("http-equiv",'Content-Security-Policy" content="upgrade-insecure-requests');

document.head.appendChild(meta);


    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'http://www.feuerwehr-heinrichsort.de:2880/istalarm', false ); // false for synchronous request
    xmlHttp.send( null );
    alert(xmlHttp.responseText);








