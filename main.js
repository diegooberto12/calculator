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
                display.innerText = element.innerText;
                updateDisplay();
            }
            else{
               display.innerText += element.innerText
            console.log(`este es numero ${element.innerText}`) 
            updateDisplay(); 
            }
            }
        else if (element.id === "plus"){
            
            
        }           
            }) 
            });

function updateDisplay(){
if (display.innerText.length > 7){
    display.innerText=display.innerText.slice(0,7)
}
};

function checkSteps(){
    if (FirstValue  != null && SecondValue == null){
        return true
    }
    else {return false};
}



