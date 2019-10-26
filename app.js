function setup() {
    createCanvas(640, 480);
}

function draw() {
    noStroke();
    fill(0,255,0);
    rect(320, 240, 20, 20);

    fill(255,0,0);
    circle(500, 100, 20);

    stroke(0,0,255);
    strokeWeight(3);
    line(0, 40, 640, 40);
}

function day1AM() {
    // console.log("Hello World");
    var fullName = "Marc Hauschildt";
    var age = 38;
    var weight = 192.5;
    var heightInInches = 68;
    var address = "123 Main St.";
    var middleName;
    // console.log(middleName);
    // console.log(typeof(weight));
    var likesPizza = true;
    var hasTattoos = false;
    // console.log(typeof(likesPizza));
    console.log(age);
    age = 39;
    console.log(age);
    age = age + 1;
    console.log(age);
    age++;
    age += 1;
    age *= 5;
    age = age * 5;
    age /= 10;
    console.log(age);

    console.log(fullName + " is " + age + " years old.");
    console.log("Do you like pizza? " + likesPizza);
    var feet = Math.floor(heightInInches / 12);
    var inches = heightInInches % 12;
    console.log(fullName + " is " + feet + " foot " + inches +" inches tall");

    print("Hello World");
    var convertedTemp = f2c(32);
    print(convertedTemp);
}

day1AM();  

function print(input) {
    console.log(input);
}

// Converts Fahrenheit to Celsius
// Input: temperature in fahrenheit
function f2c(t) {
    return((t - 32) * 5 / 9);
}