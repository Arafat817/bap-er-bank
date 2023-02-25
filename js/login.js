//step 1: add click event with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //step 2: get the email address inside the email input field
    // *** always remember to use .value to text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3: get password
    //3.a = get id on the html element
    //3.b = get the element
    //3.c = get the value from the element
    const passwordField = document.getElementById('user-password');
    const password= passwordField.value;
    
    //**Danger: DO NOT verify email password on the client side
    // step 4: varify email and password nad check whether valid user or not
    
    if (email == 'sontan@bap.com' && password == 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user');
    }
})