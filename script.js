const calculator1 = document.getElementById("calculator1");
const calculator2 = document.getElementById("calculator2");
const calculator3 = document.getElementById("calculator3");
const calculator4 = document.getElementById("calculator4");
const calculator5 = document.getElementById("calculator5");
const calculator6 = document.getElementById("calculator6");
const calculator7 = document.getElementById("calculator7");
const calculator8 = document.getElementById("calculator8");
calculator1.addEventListener("click", overallPercentage);
calculator2.addEventListener("click", cgpaToPercentage);
calculator3.addEventListener("click", percentCalculator);
calculator4.addEventListener("click", percentcalculatorInCommonPhrases_1);
calculator5.addEventListener("click", percentcalculatorInCommonPhrases_2);
calculator6.addEventListener("click", percentcalculatorInCommonPhrases_3);
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
    var cgpa = document.getElementById("cgpa").value;
    document.getElementById("output2").value = cgpa * 9.5;
}

// // Percentage to CGPA Calculator
// function percentageToCgpa(){
//     var cgpa = document.getElementById("cgpa").value;
//     document.getElementById("output2").value = cgpa * 9.5;
// }

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
    document.getElementById("output4").value = (percent1/100)*amount1;
}

function percentcalculatorInCommonPhrases_2(){
    var val1 = document.getElementById("val1").value;
    var val2 = document.getElementById("val2").value;
    document.getElementById("output5").value = (val1/val2)*100;
}

function percentcalculatorInCommonPhrases_3(){
    var val3 = document.getElementById("val3").value;
    var val4 = document.getElementById("val4").value;
    document.getElementById("output6").value = val3 / (val4/100);
}

//Percentage Difference Calculator
function percentDifferenceCalculator(){
    var Value_1 = Number(document.getElementById("Value_1").value);
    var Value_2 = Number(document.getElementById("Value_2").value);
    const calculateValue = (Value_1+Value_2);
    var absoluteValue = Math.abs(Value_1 - Value_2);
    
    document.getElementById("output7").value = (Math.abs(Value_1 - Value_2)/((Value_1+Value_2)/2))*100;
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
