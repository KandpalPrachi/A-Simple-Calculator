//THis funtion is for getting the history value

function getHistory(){
    return document.getElementById("history-value").innerText;
}
//console.log(getHistory());

//This function is for printing history value in the parameter
function printHistory(num){
    document.getElementById("history-value").innerText = num;
}
//printHistory("9+9+4")




//using get output funcion for returning the output
function getOutput(){
    return document.getElementById("output-value").innerText;
}


//using print output function for getting output and printing
function printOutput(num){
    if (num==""){// if the value is empty we set output to empty
        document.getElementById("output-value").innerText=num;
    }
    else {   //we put the comman seperated value if.. there is a value 

    
    document.getElementById("output-value").innerText=getFormattedNumber(num);  //for more readablity we use commas in beetween the number.. by the use of getFormattedNumber we got this format...
}
}
function getFormattedNumber(num){       //code for comma seperated number
    //at last we are facing problem with minus sign .... if the value comes in negative... it will shows us NaN
    if(num =="-"){
        return "";
    } //till here the code for minus sign problem
    var n = Number(num);
    var value= n.toLocaleString("en");
    return value;

}
//printOutput("9999");
//for converting comma seperated to back into original value i.e without comma
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g,'')); //this will replace the comma to empty character
}
//alert(reverseNumberFormat(getOutput()));


/*
//Now making clear option into use for claring the data.
//if i want to clear the output i set the empty character inside the printOutput function that would clear the output.
//printOutput("0").     // it will also set the output value clear.
*/


//Now working on the operator part
var operator = document.getElementsByClassName("operator");
//using looping for accesing the operator one by one
for (var i = 0; i<operator.length; i++){
    operator[i].addEventListener('click', function(){
//inside it we need to give what function we need to perform when the users click on the operator
       // alert("The operator clicked:"+this.id);
//NOw putting operator in use:-
//for clear option
        if(this.id =="clear" ){ //for both clear :- we put both history and output to empty character
            printHistory("");
            printOutput("");
        }

        //for backspaces
        else if(this.id == "backspace"){// we first try to convert number into without comma because backspace should not deals with commas
            var output= reverseNumberFormat(getOutput()).toString(); //we convert it into string and then remove the last character
            if(output){// if output has a value
                output = output.substring(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            var output= getOutput();
            var history= getHistory();

                //issue:-at the last time i faced challenge that i am unable to change the operator..i.e if i put the wrong operator i am not able to change it
                if(output== ""&&history!=""){
                    if(isNaN(history[history.length-1])){
                        history = history.substring(0,history.length - 1);
                    }
                }
                    //we need to change condition this also for solving the above listed issue
                    //for this we have to put history also not need to be empty
                    //for this history!== ""




            if(output!="" || history!= ""){ // chechking for other operator we need output to not empty
                //condition is true then the first value is assigned to  the output
                output= output==""? //we changed this for solving the above listed issue
                output: reverseNumberFormat(output);
                //when the operator is first clicked it will added to history value
                history= history + output;
                if (this.id == "="){    //if operator is history then it will give result
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}
var number = document.getElementsByClassName("number");
for (var i = 0; i<number.length; i++){
    number[i].addEventListener('click', function(){
        //alert("The operator clicked:"+this.id);

        //we need to perform operation now..with number and we want this number without commas for doing operation
        var output = reverseNumberFormat(getOutput());     //we discuessed it earlier that it is a built in function to remove the commas
        if (output!= NaN){  //cheking output will be the number or not
          //this above if statement meaning is that if output is number then it is proceeded
          output= output+this.id;
          printOutput(output);  

        }

    })
}


