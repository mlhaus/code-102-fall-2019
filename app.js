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

// day2AM();

function day2PM() {

    var firstName = "Gary";

    var marc = {
        firstName: "Marc",
        middleName: "Leo",
        lastName: "Hauschildt",
        dob: [12,1,2001], //month, day, year
        likesPizza: true,
        heightInInches: 75,
        fullName: function () {
            return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
        },
        age: function () {
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth() + 1;
            var day = today.getDate();
            var myAge = year - this.dob[2];
            if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
                myAge--;
            }
            return (myAge);
        },
    };
    var matt = {
        firstName: "Matt",
        middleName: "Charles",
        lastName: "Barnhart",
        dob: [2, 5, 1987], //month, day, year
        likesPizza: true,
        heightInInches: 70,
        fullName: function () {
            return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
        },
        age: function () {
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth() + 1;
            var day = today.getDate();
            var myAge = year - this.dob[2];
            if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
                myAge--;
            }
            return (myAge);
        },
    };
    var marie = {
        firstName: "Marie",
        middleName: "Ann",
        lastName: "Antons",
        dob: [12, 27, 1991], // month, day, year
        likesPizza: true,
        heightInInches: 69,
        fullName: function () {
            return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
        },
        age: function () {
            var today = new Date();
            var year = today.getFullYear();
            //getMonth will result in 0 for Jan, 1 for Feb, etc...
            var month = today.getMonth() + 1;
            var day = today.getDate();
            var age = year - this.dob[2];
            if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
                age--;
            }
            return (age);
        },
    };
    var mike = {
        firstName: "Mike",
        middleName: "Danger",
        lastName: "Rusnak",
        dob: [7, 1, 1985], //M, D, Y. This is added as an array so we can utlize this later.
        likesPizza: true,
        heightInInches: 73,
        fullName: function () {
            return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
        },
        age: function () {
            var today = new Date();
            var year = today.getFullYear();
            // getMonth will result in 0 for Jan.
            var month = today.getMonth() + 1;
            var day = today.getDate();
            var myAge = year - this.dob[2];
            if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
                myAge--;
            }
            return (myAge);
        },
    };
    var zach = {
        firstName: "Zachary",
        lastName: "Murrell",
        middleName: "Allyn",
        dob: [3, 22, 1994], //month, day, year of birth
        heightInInches: 75,
        likesPizza: true,
        fullName: function () {

            return this.firstName + " " + this.middleName + " " + this.lastName;
        },
        age: function () {
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth() + 1;
            var day = today.getDate();
            var myAge = year - this.dob[2];
            if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
                myAge--;
            }
            return myAge;
        },
    };
    var kristine = {            //object exclusive to Kristine's details
        firstName: "Kristine",  //comma not semi-colon
        middleName: "Marie",
        lastName: "Bullock",
        dob: [10, 23, 1986],  //create array for birthday mm/dd/yyyy
        heightInches: 69,
        fullName: function() {    //function stored as a key is known as a method
            return this.firstName + ' ' + this.middleName + ' ' + this.lastName;  //the word 'this' refers to the property of the current object and tries to find firstName
          },
          age: function() {
            var today = new Date(); //built in JS object that gets today's date
            var year = today.getFullYear(); //gets year for today's date
            
            // getMonth will result in 0 for January, 1 for February, etc.    
            var month = today.getMonth() +1; //list of months starts at 0 in the array so you have to add 1 to get 1-12
            var day = today.getDate();
            
            // The birth year is at index position 2 of the DOB array
            var myAge = year - this.dob[2];
            
            if(month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {  //dob[0] pulls the month position from my dob array
              // Subtract one from the age if you haven't had your birthday this year.
              myAge--;
            }
            return(myAge);
          }

    };  
    var courtney = {
        firstName: "Courtney",
        middleName: "Beth",
        lastName: "Magner",
        dob: [11, 1, 1994], // month, day, year
        likesPizza: true,
        heightInInches: 63,
        fullName: function () {
            return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
        },
        age: function () {
            var today = new Date(); // new Date is built in function that pulls in the date
            var year = today.getFullYear();
            var month = today.getMonth() + 1; // getMonth will result in 0 for Jan, 1 for Feb, ect. Adding 1 add the end to match numbers we know
            var day = today.getDate();
            var myAge = year - this.dob[2];
            if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
                myAge--;
            }
            return (myAge);
        },
    }; 
    var dusty = {
        firstName: "Dusty",
        middleName: "Wyatt",
        lastName: "Juhl",
        dob: [1, 3, 1977], //month, day, year
        likesPizza: true,
        heightInInches: 69,
        fullName: function () {
            return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
        },
        age: function () {
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth() + 1;
            var day = today.getDate();
            var myAge = year - this.dob[2];
            if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
                myAge--;
            };
            return (myAge);
        },
    };
    var kyle = {
        firstName: "Kyle",
        middleName: "Lynn",
        lastName: "Kuhlers",
        dob: [4, 3, 1970],
        likesPizza: false,
        heightInInches: 65,
        fullName: function () {
            return this.firstName + ' ' + this.middleName + ' ' +
                this.lastName;
        },
        age: function () {
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth() + 1;
            var day = today.getDate();
            var myAge = year - this.dob[2];
            if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
                myAge--;
            }
            return (myAge);
        },
    };
    var lexie = {
        firstName: "Lexie",  // key followed byvalue, astring
        middleName: "Elaine",
        lastName: "Hawkins",
        dob: [2, 14, 1968], //month, day, year
        likesPizza: true,
        heightInInches: 66,
        fullName: function () {
            return this.firstName + ' ' + this.middleName + ' ' +
                this.lastName;
        },
        age: function () {
            var today = new Date();
            var year = today.getFullYear();

            var month = today.getMonth();
            var day = today.getDate();

            var myAge = year - this.dob[2];

            if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
                myAge--;
            }
            return (myAge);
        },
    };
    var bryan = {
        firstName: "Bryan",
        middleName: "Christopher",
        lastName: "Dietzler",
        dob: [8, 24, 1973], //month, day, year
        likesPizza: "true",
        heightInInches: "68",
        fullName: function () {
            return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
        },
        age: function () {
            var today = new Date();
            var year = today.getFullYear();
            //getMonth will result in 0 for January, 1 for February, etc.
            var month = today.getMonth() + 1;
            var day = today.getDate();
            //The birth year is at index position 2 of the group
            var myAge = year - this.dob[2];
            if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
                myage--;
            }
            return (myAge);
        }
    };
    var lilly =
    {
        firstName: "Lilly",
        middleName: "Violet",
        lastName: "McBride",
        dob: [9, 14, 1991],
        likesPizza: true,
        fullName: function () {
            return this.firstName + " " + this.middleName + " " + this.lastName;
        },
        age: function () {
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth() + 1;
            var day = today.getDate();
            var myAge = year - this.dob[2];
            if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
                myAge--;
            }
            return myAge;
        }
    };
    var danny = {
        firstName: "Daniel",
        middleName: "A",
        lastName: "Torregroza",
        dob: [6, 17, 1971],//month, day, year
        likesPizza: true,
        heightInInches: 75,
        fullName: function() {
            return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
        },
        age: function () {
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth() + 1;
            var day = today.getDate();
            var myAge = year - this.dob[2];
            if (month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {
                myAge--;
            }
            return (myAge);
        }, 
    };

    var friends = [];
    friends.push(marc);
    friends.push(matt);
    friends.push(marie);
    friends.push(mike);
    friends.push(zach);
    friends.push(kristine);
    friends.push(courtney);
    friends.push(dusty);
    friends.push(kyle);
    friends.push(lexie);
    friends.push(bryan);
    friends.push(lilly);
    friends.push(danny);
    friends.forEach(function(person) {
        var result = "";
        result += person.fullName() + " is " + person.age() + " years young and ";
        result += person.likesPizza ? "does" : "doesn't";
        result += " like pizza.";
        print(result);
    });
}

day2PM();