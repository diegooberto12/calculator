const Buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

// variables
FirstValue=null;
SecondValue=null;
operand=null;
Result=0;


// functions
Buttons.forEach((element) => {
   
    element.addEventListener("click",() => {
            
        if (element.id === "number"){
            if(display.innerText == 0){
                display.innerText = element.innerText
            }
            else{
               display.innerText += element.innerText
            console.log(`este es numero ${element.innerText}`)  
            }
            }           
            }) 
            });



