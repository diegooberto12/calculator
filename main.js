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
        else if (element.id === "operator"){
            
            
            
        }           
            }) 
            });

function updateDisplay(){
if (display.innerText.length > 7){
    display.innerText=display.innerText.slice(0,7);
}
else if (display.innerText.includes(".")){
    display.innerText=display.innerText.slice(0,8);
}
else if(display.innerHTML.startsWith("-")){
    display.innerText=display.innerText.slice(0,8);
}
else if (display.innerText.includes(".") && display.innerHTML.startsWith("-")) {
    display.innerText=display.innerText.slice(0,9);
}
};


function operate(element){
    if (FirstValue  == null && SecondValue == null){
            FirstValue=Number(display.innerText);
            if (element.id == "operator"){
                GiveValueToOperand(element);
                display.innerText="";
            }
    else if(FirstValue != null && SecondValue == null && operand !=null){

    }
        
    }
    // else if (display.textContent == 0 || display.textContent == "0"){
    //     FirstValue = 0
    // }
    // else {return false};
}

function GiveValueToOperand(element){
    switch (element){
        case element.innerText == "+":
            return operand =  "+";
            break;
        case element.innerText == "-":
            return operand = "-";
            break;
        case element.innerText == "*":
            return  operand = "*";
            break;
        case element.innerText == "/":
            return  operand = "/";
            break;
    }
};
 function Showresult(){
    
 }

function DoOperation(A , B , C){
 switch (B){
    case "+" :
        return A + C;
        break;
    case "-":
        return A - C;
        break;
    case "*":
        return A * C;
    case "/":
        if (C == 0){
            console.log("don't do that");     
        }
        else{
            return A / C;
        }
        break;
 }

}