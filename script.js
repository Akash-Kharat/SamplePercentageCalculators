const calculator1 = document.getElementById("calculator1");
const calculator3 = document.getElementById("calculator3");
const calculator7 = document.getElementById("calculator7");
const calculator8 = document.getElementById("calculator8");
calculator1.addEventListener("click", overallPercentage);
calculator3.addEventListener("click", percentCalculator);
calculator7.addEventListener("click", percentDifferenceCalculator);
calculator8.addEventListener("click", percentChangeCalculator);

// Exam Marks Percentage Calculator
function overallPercentage(){
    var scoredMarks = document.getElementById("scoredMarks").value;
    var outOfMarks = document.getElementById("outOfMarks").value;
    document.getElementById("output1").value = (scoredMarks / outOfMarks)*100;
}

// CGPA to Percentage Calculator
function cgpaToPercentage(){
    var cgpa = document.getElementById("output22").value;
    if(cgpa>10){
        document.getElementById("output22").value="";
    }
    document.getElementById("output21").value = Math.round(cgpa * 9.5);
}

// Percentage to CGPA Calculator
function percentageToCgpa(){
    var percent = document.getElementById("output21").value;
    if(percent >100){
        document.getElementById("output21").value="";
    }
    var resultcgpa =(percent / 9.5).toFixed(1);
    if(resultcgpa>10){
        document.getElementById("output22").value = 10;
    }
    
    else{
        document.getElementById("output22").value = resultcgpa;
    }
    
}

// Percentage Calculator
function percentCalculator(){
    var percent = document.getElementById("per").value;
    var amount = document.getElementById("amt").value;
    document.getElementById("output3").value = (percent/100)*amount;
}

// Percentage Calculator in common phrases
function percentcalculatorInCommonPhrases_1(){
    var percent1 = document.getElementById("per1").value;
    var amount1 = document.getElementById("amt1").value;
    var result1 = (percent1/100)*amount1;
    if(result1===0 || result1===NaN){
        document.getElementById("output4").value = "";
    }
    else{
      document.getElementById("output4").value = result1; 
    }
     
}

function percentcalculatorInCommonPhrases_2(){
    var val1 = document.getElementById("val1").value;
    var val2 = document.getElementById("val2").value;
    var result2 = (val1/val2)*100;
    if(result2===0 || result1===NaN){
        document.getElementById("output4").value = "";
    }
    else{
      document.getElementById("output4").value = result2; 
    }
}

function percentcalculatorInCommonPhrases_3(){
    var val3 = document.getElementById("val3").value;
    var val4 = document.getElementById("val4").value;
    var result3 = val3 / (val4/100);
    if(result3===0 || result1===NaN){
        document.getElementById("output4").value = "";
    }
    else{
      document.getElementById("output4").value = result3; 
    }
}

//Percentage Difference Calculator
function percentDifferenceCalculator(){
    var Value_1 = Number(document.getElementById("Value_1").value);
    var Value_2 = Number(document.getElementById("Value_2").value);
    // const calculateValue = (Value_1+Value_2);
    // var absoluteValue = Math.abs(Value_1 - Value_2);
    
    document.getElementById("output7").value = ((Math.abs(Value_1 - Value_2)/((Value_1+Value_2)/2))*100).toFixed(2);
}

//Percentage Change Calculator
function percentChangeCalculator(){
    var Val_1 = document.getElementById("Val_1").value;
    var Val_2 = document.getElementById("Val_2").value;
    const action=document.getElementById("action").value;
    if(action==="inc"){
        document.getElementById("output8").value = Val_1 * (1+(Val_2/100));
    }
    else{
        document.getElementById("output8").value = Val_1 * (1-(Val_2/100));
    }
    
}

function clearInput(){
     var inputs = document.querySelectorAll("input");
    
     inputs.forEach(myfun);

     function myfun(item){
        item.value="";
     }
}
