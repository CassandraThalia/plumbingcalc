function findFittingAllowance() {
    var pipeMaterial = document.getElementById("matSelect").value;
    
    var pipeSize = document.getElementById("sizeSelect").value;

    var pipeAngle = document.getElementById("angSelect").value;

    var fittingAllowance;

    if (pipeMaterial == "copper")
    {
        if (pipeSize == "3/8")
        {
            if (pipeAngle == "90")
            {
                fittingAllowance = "5/16";
            }
            else if (pipeAngle == "45")
            {
                fittingAllowance = "3/16";
            }
            else if (pipeAngle == "60")
            {
                fittingAllowance = "N/A";
            }
            else if (pipeAngle == "22 1/2")
            {
                fittingAllowance = "N/A" ;
            }
        }
        if (pipeSize == "1/2")
        {
            if (pipeAngle == "90")
            {
                fittingAllowance = "3/8";
            }
            else if (pipeAngle == "45")
            {
                fittingAllowance = "3/16";
            }
            else if (pipeAngle == "60")
            {
                fittingAllowance = "N/A";
            }
            else if (pipeAngle == "22 1/2")
            {
                fittingAllowance = "N/A" ;
            }
        }
        if (pipeSize == "3/4") 
        {
            if (pipeAngle == "90")
            {
                fittingAllowance = "1/2";
            }
            else if (pipeAngle == "45")
            {
                fittingAllowance = "1/4";
            }
            else if (pipeAngle == "60")
            {
                fittingAllowance = "N/A";
            }
            else if (pipeAngle == "22 1/2")
            {
                fittingAllowance = "N/A" ;
            }
        }
        if (pipeSize == "1")
        {
            if (pipeAngle == "90")
            {
                fittingAllowance = "3/4";
            }
            else if (pipeAngle == "45")
            {
                fittingAllowance = "5/16";
            }
            else if (pipeAngle == "60")
            {
                fittingAllowance = "N/A";
            }
            else if (pipeAngle == "22 1/2")
            {
                fittingAllowance = "N/A" ;
            }
        }
        if (pipeSize == "1 1/4")
        {
            if (pipeAngle == "90")
            {
                fittingAllowance = "1 1/8";
            }
            else if (pipeAngle == "45")
            {
                fittingAllowance = "7/16";
            }
            else if (pipeAngle == "60")
            {
                fittingAllowance = "5/8";
            }
            else if (pipeAngle == "22 1/2")
            {
                fittingAllowance = "3/16";
            }
        }
        if (pipeSize == "1 1/2")
        {
            if (pipeAngle == "90")
            {
                fittingAllowance = "1 5/16";
            }
            else if (pipeAngle == "45")
            {
                fittingAllowance = "9/16";
            }
            else if (pipeAngle == "60")
            {
                fittingAllowance = "13/16";
            }
            else if (pipeAngle == "22 1/2")
            {
                fittingAllowance = "1/4";
            }
        }
        if (pipeSize == "2")
        {
            if (pipeAngle == "90")
            {
                fittingAllowance = "1 7/8";
            }
            else if (pipeAngle == "45")
            {
                fittingAllowance = "3/4";
            }
            else if (pipeAngle == "60")
            {
                fittingAllowance = "1 1/16";
            }
            else if (pipeAngle == "22 1/2")
            {
                fittingAllowance = "5/16";
            }
        }
        if (pipeSize == "3")
        {
            if (pipeAngle == "90")
            {
                fittingAllowance = "2 7/8";
            }
            else if (pipeAngle == "45")
            {
                fittingAllowance = "1 1/8";
            }
            else if (pipeAngle == "60")
            {
                fittingAllowance = "1 5/16";
            }
            else if (pipeAngle == "22 1/2")
            {
                fittingAllowance = "1/2";
            }
        }
        if (pipeSize == "4")
        {
            if (pipeAngle == "90")
            {
                fittingAllowance = "3 3/4";
            }
            else if (pipeAngle == "45")
            {
                fittingAllowance = "1 1/2";
            }
            else if (pipeAngle == "60")
            {
                fittingAllowance = "2 3/16";
            }
            else if (pipeAngle == "22 1/2")
            {
                fittingAllowance = "11/16";
            }
        }
    }
    
    if (pipeMaterial == "PVC")
    {
        if (pipeSize == "3/8")
        {
            if (pipeAngle == "90")
            {
                fittingAllowance = "3/8";
            }
            else if (pipeAngle == "45")
            {
                fittingAllowance = "1/4";
            }
            else if (pipeAngle == "60")
            {
                fittingAllowance = "N/A";
            }
            else if (pipeAngle == "22 1/2")
            {
                fittingAllowance = "N/A" ;
            }
        }
        if (pipeSize == "1/2")
        {
            if (pipeAngle == "90")
            {
                fittingAllowance = "1/2";
            }
            else if (pipeAngle == "45")
            {
                fittingAllowance = "1/4";
            }
            else if (pipeAngle == "60")
            {
                fittingAllowance = "N/A";
            }
            else if (pipeAngle == "22 1/2")
            {
                fittingAllowance = "N/A" ;
            }
        }
        if (pipeSize == "3/4")
        {
            if (pipeAngle == "90")
            {
                fittingAllowance = "9/16";
            }
            else if (pipeAngle == "45")
            {
                fittingAllowance = "5/16";
            }
            else if (pipeAngle == "60")
            {
                fittingAllowance = "N/A";
            }
            else if (pipeAngle == "22 1/2")
            {
                fittingAllowance = "N/A" ;
            }
        }
        if (pipeSize == "1")
        {
            if (pipeAngle == "90")
            {
                fittingAllowance = "11/16";
            }
            else if (pipeAngle == "45")
            {
                 fittingAllowance = "5/16";
            }
            else if (pipeAngle == "60")
            {
                fittingAllowance = "N/A";
            }
            else if (pipeAngle == "22 1/2")
            {
                fittingAllowance = "N/A" ;
            }
        }
        if (pipeSize == "1 1/4")
        {
            if (pipeAngle == "90")
            {
                fittingAllowance = "1 9/16";
            }
            else if (pipeAngle == "45")
            {
                fittingAllowance = "1";
            }
            else if (pipeAngle == "60")
            {
                fittingAllowance = "N/A";
            }
            else if (pipeAngle == "22 1/2")
            {
                fittingAllowance = "N/A" ;
            }
        }
        if (pipeSize == "1 1/2")
        {
            if (pipeAngle == "90")
            {
                fittingAllowance = "1 3/4";
            }
            else if (pipeAngle == "45")
            {
                fittingAllowance = "1 1/8";
            }
            else if (pipeAngle == "60")
            {
                fittingAllowance = "1";
            }
            else if (pipeAngle == "22 1/2")
            {
                fittingAllowance = "1/2";
            }
        }
        if (pipeSize == "2")
        {
            if (pipeAngle == "90")
            {
                fittingAllowance = "2 5/16";
            }
            else if (pipeAngle == "45")
            {
                fittingAllowance = "1 1/2";
            }
            else if (pipeAngle == "60")
            {
                fittingAllowance = "1 5/16";
            }
            else if (pipeAngle == "22 1/2")
            {
                fittingAllowance = "11/16";
            }
        }
        if (pipeSize == "3")
        {
            if (pipeAngle == "90")
            {
                fittingAllowance = "3 1/16";
            }
            else if (pipeAngle == "45")
            {
                fittingAllowance = "1 3/4";
            }
            else if (pipeAngle == "60")
            {
                fittingAllowance = "1 11/16";
            }
            else if (pipeAngle == "22 1/2")
            {
                fittingAllowance = "13/16";
            }
        }
        if (pipeSize == "4")
        {
            if (pipeAngle == "90")
            {
                fittingAllowance = "3 7/8";
            }
            else if (pipeAngle == "45")
            {
                fittingAllowance = "2 3/16";
            }
            else if (pipeAngle == "60")
            {
                fittingAllowance = "2 1/16";
            }
            else if (pipeAngle == "22 1/2")
            {
                fittingAllowance = "1"; 
            }
        }
    }
        
    document.getElementById("functAns").innerHTML = fittingAllowance;
}