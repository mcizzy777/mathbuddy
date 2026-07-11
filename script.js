// -----------------------------
// Standard Calculator
// -----------------------------

function appendValue(value){
    document.getElementById("calcDisplay").value += value;
}

function clearDisplay(){
    document.getElementById("calcDisplay").value = "";
}

function calculate(){
    let display = document.getElementById("calcDisplay");

    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Error";
    }
}

function percentage(){
    let display = document.getElementById("calcDisplay");

    try{
        display.value = eval(display.value) / 100;
    }catch{
        display.value = "Error";
    }
}

function squareRoot(){
    let display = document.getElementById("calcDisplay");

    try{
        display.value = Math.sqrt(eval(display.value));
    }catch{
        display.value = "Error";
    }
}

// -----------------------------
// Diameter Calculators
// -----------------------------

// Diameter = 2 × Radius
function diameterFromRadius(){

    let r = parseFloat(document.getElementById("radius1").value);

    if(isNaN(r)){
        document.getElementById("diameterResult").innerHTML = "Please enter a radius.";
        return;
    }

    let d = 2 * r;

    document.getElementById("diameterResult").innerHTML =
    "<strong>Diameter:</strong> " + d.toFixed(2);

}

// Radius = Diameter / 2
function radiusFromDiameter(){

    let d = parseFloat(document.getElementById("diameter1").value);

    if(isNaN(d)){
        document.getElementById("radiusResult").innerHTML = "Please enter a diameter.";
        return;
    }

    let r = d / 2;

    document.getElementById("radiusResult").innerHTML =
    "<strong>Radius:</strong> " + r.toFixed(2);

}

// Circumference = π × Diameter
function circumferenceFromDiameter(){

    let d = parseFloat(document.getElementById("diameter2").value);

    if(isNaN(d)){
        document.getElementById("circumferenceResult").innerHTML = "Please enter a diameter.";
        return;
    }

    let c = Math.PI * d;

    document.getElementById("circumferenceResult").innerHTML =
    "<strong>Circumference:</strong> " + c.toFixed(2);

}

// Diameter = Circumference / π
function diameterFromCircumference(){

    let c = parseFloat(document.getElementById("circumference1").value);

    if(isNaN(c)){
        document.getElementById("diameterCircResult").innerHTML = "Please enter a circumference.";
        return;
    }

    let d = c / Math.PI;

    document.getElementById("diameterCircResult").innerHTML =
    "<strong>Diameter:</strong> " + d.toFixed(2);

}

// Area = πr²
function areaFromRadius(){

    let r = parseFloat(document.getElementById("radius2").value);

    if(isNaN(r)){
        document.getElementById("circleAreaResult").innerHTML = "Please enter a radius.";
        return;
    }

    let area = Math.PI * r * r;

    document.getElementById("circleAreaResult").innerHTML =
    "<strong>Area:</strong> " + area.toFixed(2);

}

// Radius = √(Area / π)
function radiusFromArea(){

    let area = parseFloat(document.getElementById("circleArea").value);

    if(isNaN(area)){
        document.getElementById("radiusAreaResult").innerHTML = "Please enter an area.";
        return;
    }

    let r = Math.sqrt(area / Math.PI);

    document.getElementById("radiusAreaResult").innerHTML =
    "<strong>Radius:</strong> " + r.toFixed(2);

}

// -----------------------------
// AREA CALCULATORS
// -----------------------------

// Rectangle
function rectangleArea(){

    let l = parseFloat(document.getElementById("rectLength").value);
    let w = parseFloat(document.getElementById("rectWidth").value);

    if(isNaN(l) || isNaN(w)){
        document.getElementById("rectangleAreaResult").innerHTML = "Please enter both values.";
        return;
    }

    let area = l * w;

    document.getElementById("rectangleAreaResult").innerHTML =
    "<strong>Area:</strong> " + area.toFixed(2);

}

// Square
function squareArea(){

    let s = parseFloat(document.getElementById("squareSide").value);

    if(isNaN(s)){
        document.getElementById("squareAreaResult").innerHTML = "Please enter a side length.";
        return;
    }

    let area = s * s;

    document.getElementById("squareAreaResult").innerHTML =
    "<strong>Area:</strong> " + area.toFixed(2);

}

// Triangle
function triangleArea(){

    let b = parseFloat(document.getElementById("triangleBase").value);
    let h = parseFloat(document.getElementById("triangleHeight").value);

    if(isNaN(b) || isNaN(h)){
        document.getElementById("triangleAreaResult").innerHTML = "Please enter both values.";
        return;
    }

    let area = (b * h) / 2;

    document.getElementById("triangleAreaResult").innerHTML =
    "<strong>Area:</strong> " + area.toFixed(2);

}

// Circle
function circleArea(){

    let r = parseFloat(document.getElementById("circleRadius").value);

    if(isNaN(r)){
        document.getElementById("circleAreaOutput").innerHTML = "Please enter a radius.";
        return;
    }

    let area = Math.PI * r * r;

    document.getElementById("circleAreaOutput").innerHTML =
    "<strong>Area:</strong> " + area.toFixed(2);

}

// Parallelogram
function parallelogramArea(){

    let b = parseFloat(document.getElementById("paraBase").value);
    let h = parseFloat(document.getElementById("paraHeight").value);

    if(isNaN(b) || isNaN(h)){
        document.getElementById("parallelogramAreaResult").innerHTML = "Please enter both values.";
        return;
    }

    let area = b * h;

    document.getElementById("parallelogramAreaResult").innerHTML =
    "<strong>Area:</strong> " + area.toFixed(2);

}

// Trapezoid
function trapezoidArea(){

    let b1 = parseFloat(document.getElementById("trapBase1").value);
    let b2 = parseFloat(document.getElementById("trapBase2").value);
    let h = parseFloat(document.getElementById("trapHeight").value);

    if(isNaN(b1) || isNaN(b2) || isNaN(h)){
        document.getElementById("trapezoidAreaResult").innerHTML = "Please complete all fields.";
        return;
    }

    let area = ((b1 + b2) * h) / 2;

    document.getElementById("trapezoidAreaResult").innerHTML =
    "<strong>Area:</strong> " + area.toFixed(2);

}


// -----------------------------
// VOLUME CALCULATORS
// -----------------------------

// Cube
function cubeVolume(){

    let s = parseFloat(document.getElementById("cubeSide").value);

    if(isNaN(s)){
        document.getElementById("cubeResult").innerHTML = "Please enter a side.";
        return;
    }

    let volume = Math.pow(s,3);

    document.getElementById("cubeResult").innerHTML =
    "<strong>Volume:</strong> " + volume.toFixed(2);

}

// Cylinder
function cylinderVolume(){

    let r = parseFloat(document.getElementById("cylinderRadius").value);
    let h = parseFloat(document.getElementById("cylinderHeight").value);

    if(isNaN(r) || isNaN(h)){
        document.getElementById("cylinderResult").innerHTML = "Please enter both values.";
        return;
    }

    let volume = Math.PI * r * r * h;

    document.getElementById("cylinderResult").innerHTML =
    "<strong>Volume:</strong> " + volume.toFixed(2);

}

// Cone
function coneVolume(){

    let r = parseFloat(document.getElementById("coneRadius").value);
    let h = parseFloat(document.getElementById("coneHeight").value);

    if(isNaN(r) || isNaN(h)){
        document.getElementById("coneResult").innerHTML = "Please enter both values.";
        return;
    }

    let volume = (Math.PI * r * r * h) / 3;

    document.getElementById("coneResult").innerHTML =
    "<strong>Volume:</strong> " + volume.toFixed(2);

}

// Sphere
function sphereVolume(){

    let r = parseFloat(document.getElementById("sphereRadius").value);

    if(isNaN(r)){
        document.getElementById("sphereResult").innerHTML = "Please enter a radius.";
        return;
    }

    let volume = (4/3) * Math.PI * Math.pow(r,3);

    document.getElementById("sphereResult").innerHTML =
    "<strong>Volume:</strong> " + volume.toFixed(2);

}

// Rectangular Prism
function prismVolume(){

    let l = parseFloat(document.getElementById("prismLength").value);
    let w = parseFloat(document.getElementById("prismWidth").value);
    let h = parseFloat(document.getElementById("prismHeight").value);

    if(isNaN(l) || isNaN(w) || isNaN(h)){
        document.getElementById("prismResult").innerHTML = "Please complete all fields.";
        return;
    }

    let volume = l * w * h;

    document.getElementById("prismResult").innerHTML =
    "<strong>Volume:</strong> " + volume.toFixed(2);

}


// -----------------------------
// PERIMETER CALCULATORS
// -----------------------------

// Rectangle
function rectanglePerimeter(){

    let l = parseFloat(document.getElementById("rectPerLength").value);
    let w = parseFloat(document.getElementById("rectPerWidth").value);

    if(isNaN(l) || isNaN(w)){
        document.getElementById("rectanglePerimeterResult").innerHTML = "Please enter both values.";
        return;
    }

    let perimeter = 2 * (l + w);

    document.getElementById("rectanglePerimeterResult").innerHTML =
    "<strong>Perimeter:</strong> " + perimeter.toFixed(2);

}

// Square
function squarePerimeter(){

    let s = parseFloat(document.getElementById("squarePerSide").value);

    if(isNaN(s)){
        document.getElementById("squarePerimeterResult").innerHTML = "Please enter a side.";
        return;
    }

    let perimeter = 4 * s;

    document.getElementById("squarePerimeterResult").innerHTML =
    "<strong>Perimeter:</strong> " + perimeter.toFixed(2);

}

// Triangle
function trianglePerimeter(){

    let a = parseFloat(document.getElementById("triSide1").value);
    let b = parseFloat(document.getElementById("triSide2").value);
    let c = parseFloat(document.getElementById("triSide3").value);

    if(isNaN(a) || isNaN(b) || isNaN(c)){
        document.getElementById("trianglePerimeterResult").innerHTML = "Please complete all fields.";
        return;
    }

    let perimeter = a + b + c;

    document.getElementById("trianglePerimeterResult").innerHTML =
    "<strong>Perimeter:</strong> " + perimeter.toFixed(2);

}

// Circle (Circumference)
function circleCircumference(){

    let r = parseFloat(document.getElementById("circlePerRadius").value);

    if(isNaN(r)){
        document.getElementById("circlePerimeterResult").innerHTML = "Please enter a radius.";
        return;
    }

    let circumference = 2 * Math.PI * r;

    document.getElementById("circlePerimeterResult").innerHTML =
    "<strong>Circumference:</strong> " + circumference.toFixed(2);

}

// Parallelogram
function parallelogramPerimeter(){

    let b = parseFloat(document.getElementById("paraBasePer").value);
    let s = parseFloat(document.getElementById("paraSidePer").value);

    if(isNaN(b) || isNaN(s)){
        document.getElementById("parallelogramPerimeterResult").innerHTML = "Please enter both values.";
        return;
    }

    let perimeter = 2 * (b + s);

    document.getElementById("parallelogramPerimeterResult").innerHTML =
    "<strong>Perimeter:</strong> " + perimeter.toFixed(2);

}