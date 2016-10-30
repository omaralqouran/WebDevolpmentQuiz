/**
 *   @author Bates, Howard (hbates@northmen.org)
 *   @version 0.0.2
 *   @summary Project 4 demo code || created: 03.16.2016
 *   @todo
 */ //lines 1-6 are j.s doc multiline comment. This is where the editor puts in essential information.

"use strict"; //use strict is a command so the code doesn't assume what the editor puts in.
const PROMPT = require('readline-sync'); //makes the code understand what the user inputs.

let continueResponse; //let is used to declare variables. lines 11 and 12 are declaring variables
let currentMonth, currentGrade, currentClassroom, upperTuition; //Note that variables must be put in camel-casing
// and the commas separate the variables while  the semi-colon ends the line
const MAX_GRADE = 8, //const is a command to declare constants. lines 14- 17 are all declared constants. Constant must be spelled in all caps.
    MAX_MONTH = 9,//separate each one on a new line
    MAX_CLASSROOM = 3,
    KDG_TUITION = 80;//Please note that constants can not change value, while variables can.

function main() { //function is a command that tells the computer it has to do something
    process.stdout.write('\x1Bc'); //Clears the screen //This will clear the screen. stdout means standard out which would be your monitor
    // is a way for editors to put in comments
    setContinueResponse();//calls for the first function to be done
    while (continueResponse === 1) {//this is a while loop.
        setCurrentMonth();//lines 24-28 are mutate methods. They are all called in the main.
        setCurrentGrade();//the open and close parentheses and semi- colon finish the line
        setCurrentClassroom();//
        processPaymentCoupons();
        setContinueResponse();
        for (let i = 0; i < MAX_CLASSROOM; i++) {//for loop under the condition that i is assigned a value of 1.
            //i must be less than MAX_CLASSROOM and each time i will increase by +1.
            printGoodbye();//if condition is met then the print goodbye method will run
        }
    }//brackets are used to close loops or methods.

}

main();//runs function main. it works sequentially

function setContinueResponse() {//this is a mutator method. function sets up all of the methods. mush have a bracket and open/close parenthesis
    if (continueResponse != null) {//if loop. The parameter says continueResponse cant equal null
        continueResponse = -1;//continueResponse is assigned a value of -1
        while (continueResponse !== 0 && continueResponse !== 1) { //while loop. if continueResponse meets this condition then it will do what is inside of the brackets.
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `)); //user will be asked to put in a value of 1 or 0
        }
    } else {//if the code doesn't meet whats above, and there are no other possible options, an else statement is used
        continueResponse = 1;// continueResponse will equal 1
    }
}

function setCurrentMonth() {//this is a mutator method
    if (currentMonth != null && currentMonth <= MAX_MONTH) {//condition states that currentMonth cant equal null and has to be less than MAX_MONTH
        currentMonth++;//this is a counter that adds +1 if the the condition is true
    } else {//if the condition is false then do this
        currentMonth = 1;//sets the current equal to 1
    }
}

function setCurrentGrade() {//this is a mutator methods
    if (typeof currentGrade !=='undefined' && currentGrade <= MAX_GRADE) {  //http://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript
        //line 59: if loop. data type cant equal undefined and must be less than MAX_GRADE and there is a single line comment which includes a URL
        currentGrade++; //++; will make current grade get added by +1
    } else {//else statement
        currentGrade = 0;//current grade will equal 0
    }
}

function setCurrentClassroom() {//this is a mutator method
    if (typeof currentClassroom !=='undefined' && currentClassroom <= MAX_CLASSROOM) {
        //line 68: if loop. currentClassroom must be a number and has to be less than MAX_CLASSROOM
        currentClassroom++; //currentClassroom is increased tby +1
    } else {//else statement. If condition above isn't met than do the below.
        currentClassroom = 1;//currentClassroom is assigned a value of 0.
    }
}

function setUpperTuition() {//mutator method.
    const BASE_TUITION = 60;//declared constant Base Tuition is equal to 60.
    upperTuition = BASE_TUITION * currentGrade;//upperTuition is equal to 60 times the CurrentGrade.
}

function processPaymentCoupons() {//worker method
    while (currentGrade <= MAX_GRADE) {//while loop. currentGrade must be less than MAX_GRADE
        while (currentClassroom <= MAX_CLASSROOM) {//while loop. current grade must be less than MAX-CLASSROOM
            while (currentMonth <= MAX_MONTH) {//wile loop. current month must be less than MAX_MONTH
                if (currentGrade == 0) {//if this is statement then line 86 will be printed onto the screen
                    console.log(`\n\tThe tuition for month: ${currentMonth}, for classroom: ${currentClassroom}, of grade: ${currentGrade} is: \$${KDG_TUITION}.`);
                } else {//if it meets all of the conditions except current grade doesn't equal 0 then setUpperTuition
                    setUpperTuition();//program will then setUpperTuition. then line 89 will be printed onto the screen
                    console.log(`\n\tThe tuition for month: ${currentMonth}, for classroom: ${currentClassroom}, of grade: ${currentGrade} is: \$${upperTuition}.`);
                }
                setCurrentMonth();//runs this mutator method
            }
            setCurrentClassroom();//runs this mutator method
            setCurrentMonth();//runs this mutator method
        }
        setCurrentGrade();//runs this mutator method
        setCurrentClassroom();//runs this mutator method
    }
}

function printGoodbye() {//this is a worker method.
    console.log(`\tGoodbye.`); //tells the program to print whatever is inside the parenthesis.
}