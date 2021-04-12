function calculate(){

    var waterVel = parseFloat(document.getElementById("waterVel").value);
    var hydrLoad = parseFloat(document.getElementById("hydrLoad").value);

    var pipeSize;

    if (waterVel <= 1.5){
        if (hydrLoad <= 4) {
            pipeSize = "1/2";
        }
        if (hydrLoad > 4 && hydrLoad <= 9) {
            pipeSize = "3/4";
        }
        if (hydrLoad > 9 && hydrLoad <= 18) {
            pipeSize = "1";
        }
        if (hydrLoad > 19 && hydrLoad <= 30) {
            pipeSize = "1 1/4";
        }
        if (hydrLoad > 30) {
            pipeSize = "N/A"
        }
    }

    if (waterVel > 1.5 && waterVel <= 2.4){
        if (hydrLoad <= 7) {
            pipeSize = "1/2";
        }
        if (hydrLoad > 7 && hydrLoad <= 16) {
            pipeSize = "3/4";
        }
        if (hydrLoad > 16 && hydrLoad <= 31) {
            pipeSize = "1";
        }
        if (hydrLoad > 31 && hydrLoad <= 57) {
            pipeSize = "1 1/4";
        }
        if (hydrLoad > 57) {
            pipeSize = "N/A"
        }
    }

    if (waterVel > 2.4 && waterVel <= 3.0){
        if (hydrLoad <= 8) {
            pipeSize = "1/2";
        }
        if (hydrLoad > 8 && hydrLoad <= 21) {
            pipeSize = "3/4";
        }
        if (hydrLoad > 21 && hydrLoad <= 43) {
            pipeSize = "1";
        }
        if (hydrLoad > 43 && hydrLoad <= 83) {
            pipeSize = "1 1/4";
        }
        if (hydrLoad > 83) {
            pipeSize = "N/A"
        }
    }

    if (waterVel > 3.0){
        pipeSize = "N/A"
    }

    document.getElementById("functAns").innerHTML = pipeSize;
    
}