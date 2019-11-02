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
var age = 38;
function day1AM() {
    // console.log("Hello World");
    var fullName = "Marc Hauschildt";
    
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
}

function day1PM() {
    print("Hello World");
    var convertedTemp = f2c(32);
    print(convertedTemp);
    print(canIGoToTheCasino(age, "IA"));
    age = 19;
    print(canIGoToTheCasino(age, "IA"));
    print(canIGoToTheCasino(age, "MN"));

    print(whatShouldIWear(90));
    print(whatShouldIWear(60));
}

// day1AM();
// day1PM();

function print(input) {
    console.log(input);
}

// Converts Fahrenheit to Celsius
// Input: temperature in fahrenheit
function f2c(t) {
    return((t - 32) * 5 / 9);
}

function bmiConverter(weight, height) {
    return 0;
}

function canIGoToTheCasino(age, location) {
    return age >= 21 && location == "IA" || age >= 18 && location == "MN";
}

function whatShouldIWear(temp) {
    if(temp >= 75) {
        return "swim wear";
    } else if (temp >= 45) {
        return "Light jacket";
    } else if(temp >= 10) {
        return "Winter jacket";
    } else {
        return 'Don\'t go outside';
    }
}


function day2AM() {
    console.log(1);
    print(2);
    print(3);

    var count = 10;
    while(count >= 0) {
        print(count);
        count--;
    }


    // var sum = 0;
    // var count = 0;
    // while(true) {
    //     var input = parseInt(prompt('Enter a number. Type 0 to end. '));
    //     if(input === 0) {
    //         break;
    //     } else {
    //         sum += input;
    //         count++;
    //     }
    // }
    // console.log('The average of your numbers is ' + sum/count);

    for(var count = 1; count <= 100; count++) {
        print(count);
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    print(months[0]);
    print(months[1]);
    print(months[2]);
    print(months[3]);
    print(months[4]);
    // i stands for iteration
    for(var i = 0; i < months.length; i++) {
        print(months[i]);
    }

    var states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

    states.forEach(function(state) {
        print(state);
    });

    states.forEach(function (state){
        if(state === "Iowa" || state == "Hawaii"){
            print(state + " is cool");
        } else {
            print(state + " sucks!");
        }
    });


}

day2AM();