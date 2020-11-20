function getLetter()
{
    var letterSelect = document.getElementById("letterSelect").value;
    if (letterSelect == "c")
    {
        document.getElementById("valMessage1").innerHTML = "Enter the value of side a";  
        document.getElementById("valMessage2").innerHTML = "Enter the value of side b";
    }
    else if (letterSelect == "a")
    {
        document.getElementById("valMessage1").innerHTML = "Enter the value of side c";  
        document.getElementById("valMessage2").innerHTML = "Enter the value of side b";
    }
    else if (letterSelect == "b")
    {
        document.getElementById("valMessage1").innerHTML = "Enter the value of side c";  
        document.getElementById("valMessage2").innerHTML = "Enter the value of side a";
    }
}

function pythagCalc()
{
    var letterSelect = document.getElementById("letterSelect").value;
    var valOne = document.getElementById("side1Val").value;
    var valTwo = document.getElementById("side2Val").value;
    var valThree;
    var answer;
    
    if (letterSelect == "c")
    {
        valOne = document.getElementById("side1Val").value;
        valTwo = document.getElementById("side2Val").value;
        valThree = (valOne ** 2) + (valTwo ** 2);
        answer = Math.sqrt(valThree);
    }
    else if (letterSelect == "a" || letterSelect == "b")
    {  
        valOne = document.getElementById("side1Val").value;
        valTwo = document.getElementById("side2Val").value;
        valThree = (valOne ** 2) - (valTwo ** 2);
        answer = Math.sqrt(valThree);
    }
    document.getElementById("answer").innerHTML = answer;
}