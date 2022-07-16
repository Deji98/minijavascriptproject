// object to store details
let userDetailsDatabase = {}


function getUserDetails(){
    // Username
    let userName = prompt("Enter your username")

    if ((userName) == null){
        return
    }

    function validateUserName(userName){
        if(userName.length < 10 && userName.length > 0){
            return true
        }else{
            return false
        }
    }
    
    while(validateUserName(userName) == false){
        userName = prompt("Username must be less than 10 and greater than 0")
    }

    userDetailsDatabase["UserName"] = userName

    // Email address
    
    let email = prompt("Enter your email address")

    if ((email) == null){
        return
    }
    
    function validateEmail(email){
        const emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        emailCheckResult = emailCheck.test(email);
        if (emailCheckResult == true){
            return true
        }else {
            return false
        }
    }
    
    while (validateEmail(email) == false){
        email = prompt("Enter a valid Email")
    }

    userDetailsDatabase["Email"] = email

    // phone number
    
    let phoneNumber = prompt("Enter your phone number")

    if ((phoneNumber) == null){
        return
    }
    
    function validatePhoneNumber(phoneNumber){
        if(phoneNumber.length == 11 ){
            return true
        }else{
            return false
        }
    }
    while (validatePhoneNumber(phoneNumber) == false){
        phoneNumber = prompt("Phone number must be 11 digits, try again!")
    }

    userDetailsDatabase["Phone Number"] = phoneNumber

    //password
    
    let password = prompt("Enter your password")

    if (password == null){
        return
    }
    
    function validatePassword(password){
        if(password.length < 6 ){
            return false
        }else{
            return true
        }
    }
    
   while (validatePassword(password) == false){
    password = prompt("password must not be less than 6 digits")
   }

   userDetailsDatabase["Password"] = password


    // confirm password
    
    let confirmPassword = prompt("confirm your password")

    if (confirmPassword == null){
        return
    }
    
    function validateConfirmPassword(confirmPassword){
        if(confirmPassword != password ){
            return false
        }else{
            return true
        }
    }
    while (validateConfirmPassword(confirmPassword) == false){
        confirmPassword = prompt("confirm password does not match password, try again")
    }

    userDetailsDatabase["Confirm Password"] = confirmPassword

    

    }

    function displayUserDetails(){
        alert(`Your Details\n\nUsername: ${userDetailsDatabase.UserName}\nphoneNumber: ${userDetailsDatabase.phoneNumber}\nEmail: ${userDetailsDatabase.Email}\nPassword: ${userDetailsDatabase.Password}`)
    }


