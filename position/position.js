var sx = document.getElementById('sx');//element to hold screenX
var sy = document.getElementById('sy');//element to hold screenY
var px = document.getElementById('px');//element to hold pageX
var py = document.getElementById('py');//element to hold pageY
var cx = document.getElementById('cx');//element to hold clientX
var cy = document.getElementById('cy');//element to hold clientY


function showPosition(event) {       //declare function
    sx.value = event.screenX;    //update element with screenX
    sy.value = event.screenY;    //update element with screenY
    px.value = event.pageX;    //update element with  pageX
    py.value = event.pageY;    //update element with pageY
    cx.value = event.clientX;    //update element with clientX
    cy.value = event.clientY;    //update element with clientY
}


var el = document.getElementById('body');            //get body element
el.addEventListener('mousemove', showPosition, false);//move updates position
//remember to open the inspect tools to see in elements how it works ok