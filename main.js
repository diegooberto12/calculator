const Buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

// variables
FirstValue=null;
SecondValue=null;
operand=null;
Result=null;


// functions
Buttons.forEach((element) => {
   
    element.addEventListener("click",() => {
            
        if (element.id === "number"){
            if(display.innerText.startsWith("0.")){
                display.innerText += element.innerText;
                updateDisplay();
            }
            else{
               display.innerText += element.innerText;
            // console.log(`este es numero ${element.innerText}`) 
            updateDisplay(); 
            }
            }
        else if (element.id === "operators"){
            operate(element);
            
        }           
        else if (element.id == "Equal"){
            // operate(element);
            if (FirstValue != null && operand != null){
                if (element.id == "Equal"){
                    SecondValue= Number(display.innerText);
                    Result= DoOperation(FirstValue,operand,SecondValue).toFixed(2);
                    display.innerText=Result;
                    FirstValue = null;
                    SecondValue = null;
                    operand=null
                    }}}
        else if (element.id == "Clear"){
            FirstValue = null;
            operand= null;
            SecondValue = null;
            Result=null;
            display.innerText="";
        }
        else if (element.id == "dot"){
            if (display.innerText.includes(".")){
                
                if (display.innerText.endsWith(".")){
                    display.innerText= display.innerText.slice(0, -1);
                }
                else{display.innerText = display.innerText;}
            }
            else {display.innerText += "."};
            }
        else if (element.id == "minusPlus"){
            if(display.innerText.includes("-")){
                display.innerText = display.innerText.slice(1, display.innerText.length);
            }
            else {if (display.innerText == 0)
                {display.innerText=`${display.innerText}`}
                else {display.innerText=`-${display.innerText}`}
            }
        }
            }) 
            });
// this function only work with number buttons
function updateDisplay(){
if (display.innerText.length > 7){
    display.innerText=display.innerText.slice(0,7);
}
else if (display.innerText.includes(".")){
    display.innerText=display.innerText.slice(0,9);
}
else if(display.innerHTML.startsWith("-")){
    display.innerText=display.innerText.slice(0,9);
}
else if (display.innerText.includes(".") && display.innerHTML.startsWith("-")) {
    display.innerText=display.innerText.slice(0,9);
}
};

// this function only works with buttons with the id class of operand and with the button with the id class equal
function operate(element){
    // on the first time it takes the first input and assings it to FirstValue
    if (FirstValue  === null && SecondValue === null){
            FirstValue=Number(display.innerText);
            if (element.id == "operators"){
                // GiveValueToOperand(element);
                operand = `${element.innerText}`
                display.innerText="";
            }}

    // else if(FirstValue != null && operand != null){
    //     if (element.id == "equal"){
    //     SecondValue= Number(display.innerText);
    //     Result= DoOperation(FirstValue,operand,SecondValue);
    //     display.innerText=Result;
    //     FirstValue = null;
    //     SecondValue = null;
    //     operand=null
    //     }
    // }
        
    
}

function GiveValueToOperand(element){
    switch (element){
        case element.innerText == "+":
            return operand = "+";
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