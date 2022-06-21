
let text = document.getElementById('text');
// this will take the text bar id

let button = document.getElementById('button');
// this will take the (print) button  id

let output = document.getElementById('printHere');
// this will take the id of the paragraph <p> tag that we want to print the input user text into it

function print () {
    output.innerHTML = text.value ;
    //change the paragraph inner value to the text value that we wrote it inside the text box
}

button.addEventListener('click' , print );
// when we click (Print Me) button it calls the print function 
 