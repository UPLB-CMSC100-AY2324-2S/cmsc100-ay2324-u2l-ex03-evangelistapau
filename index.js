//global variables that will be used on validatePassword and storePassword functions
var insufficient = false;
var invalidPass = false;

function validatePassword(pass1,pass2){ //function for validating the password
    var num_chars =  0;
    var num = 0;                      //variables that counts the number of characters, uppercase/lowercase letters and numbers
    var upperCase = 0;
    var lowerCase = 0;

    for (let i = 0; i < pass1.length; i++) {    //for loop for accessing every characters in the password
        num_chars++;                            //counts the number of characters
        const char = pass1.charAt(i);           //stores the character of a specific index to a variable
        if (isNaN(char) == true) {              // Check if character is a digit, returns true if its a letter
            if (char == char.toUpperCase()){
                upperCase++; 
            }
            if (char == char.toLowerCase()){
                lowerCase++;
            }
        }
        else {
            num++; //increments 1 if there is a number on the password
        }
    }

    if (pass1 != pass2){ //if the two passwords are not equal
        return false;
    }
    else if (num_chars < 8 ){  //if characters is not at least 8
        insufficient = true;
        return false;  
    }
    else if (upperCase == 0 || lowerCase == 0 || num == 0){ // the password has no at least 1 number, 1 uppercase character, and 1 lowercase character
        invalidPass = true;
        return false; 
    }
    else {
        return true; //it is a valid password
    }
}

function reversePassword(pass){ //function for reversing the password
    let reversed_str = '';
    for (let a = pass.length; a != 0; a--) { //for loop for accessing every character of the password and reversing it
        if (pass[a] != undefined){ //removes the undefined
            reversed_str += pass[a]
        }    
    }
    reversed_str += pass[0]  //concatenating the first letter of the password to the reversed str
    return reversed_str;
}

function storePassword(name,pass1,pass2){ //function for storing the password with the user's name

    if (validatePassword(pass1,pass2) == true) {
        const data =  {
            name: name,                                 //assigns the name that is passed to the function
            newpassword:  reversePassword(pass1)        //assigns the returned value of the reversePassword function as the newpassword
        }
        console.log(data)       //prints the object data
        return data;
    }
    else {   //prompts the specific errors of the password
        if (pass1 != pass2){
            console.log("Wrong Password!");
        }
        else if (insufficient == true){
            console.log("Insufficient Number of Strings!");
        }
        else if (invalidPass == true){
            console.log("Invalid Password!");
        }
        return;
    }
}

storePassword("John", "Pass1234", "Pass1234") // returns {name: "John", newpassword:"4321ssaP"}
storePassword("John", "pass1234", "pass1234") // prompts “Invalid Password!”
storePassword("John", "pass1234", "pass1234567") //prompts “Wrong Password!”
storePassword("John", "pass1", "pass1") //prompts “Insufficient Number of Strings!
