// UI

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cfmpassword = document.getElementById('cfmpassword');

// Event Listener (Method 1)
// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     if(username.value === ''){
//         showerror(username, "Username is required!")
//     }else {
//         showsuccess(username);
//     }

//     if(email.value === ''){
//         showerror(email, "Email is required!")
//     }else if(!validateEmail(email.value)){
//         showerror(email, "Email is not valid!")
//     }else {
//         showsuccess(email);
//     }

//     if(password.value === ''){
//         showerror(password, "Password is required!")
//     }else{
//         showsuccess(password);
//     }

//     if(cfmpassword.value === ''){
//         showerror(cfmpassword, "Comfirm is required");
//     }else if(password.value !== cfmpassword.value){
//         showerror(cfmpassword, "Password do not match!")
//     }
//     else {
//         showsuccess(cfmpassword)
//     }
// });


function showerror(input,message){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control error";

    const small = formcontrol.querySelector('small');
    small.textContent = message;
}

function showsuccess(input){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control success";

    // formcontrol.classList.remove('error');
    // formcontrol.classList.add('success');
}

// For checking email format (Regular Expresion)
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



function checkrequired(inputarrs){
    // console.log(inputarrs);

    inputarrs.forEach(function(inputarr){
        // console.log(inputarr);
        // console.log(inputarr.value);
        // console.log(inputarr.id);

        if(inputarr.value === ''){
            showerror(inputarr, `${getfieldname(inputarr)} is required!`);
        }else{
            showsuccess(inputarr);
        }
    });
};

// Get Field Name
function getfieldname(inputarr){
    return inputarr.id.charAt(0).toUpperCase() + inputarr.id.slice(1);
}

// Check Length

function checklength(input,min,max){

    if(input.value.length < min){
        showerror(input, `${getfieldname(input)} must be at least ${min} characters!`);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    }else if(input.value.length > max){
        showerror(input, `${getfieldname(input)} must be lass than ${max} characters!`);
    }

    // if(input.value !=='' && input.value.length < min){
    //     showerror(input, `${getfieldname(input)} must be at least ${min} characters!`);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    // }else if(input.value.length > max){
    //     showerror(input, `${getfieldname(input)} must be lass than ${max} characters!`);
    // }
}

// Check Email is VAlid

function checkemail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());

    if(re.test(input.value)) {
        showsuccess(input);
    }else{
        showerror(input, "Email is not Valid");
    }

    // if(input.value !== ''){
    //     if(!re.test(input.value)) {
    //         showerror(input, "Email is not Valid")
    //     }
    // }
}

function checkpasswordsmatch(input1, input2){
    if(input1.value !== input2.value){
        showerror(input2, "Password do not match!");
    }

    // if(input1.value.length > 3 && input1.value.length < 15){
    //     if(input1.value !== input2.value){
    //         showerror(input2, "Password do not match!");
    //     }else {
    //         showsuccess(input2);
    //     }
    // }else if(input2.value === ''){
    //     showerror(input2, "Comfirm password is required!")
    // }else{
    //     input2.parentElement.className = "form-control";
    // }
}


// Event Listener (Method2)
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkrequired([username, email, password, cfmpassword]);

    checklength(username,3,15);
    checklength(password,6,25);
    checkemail(email);
    checkpasswordsmatch(password,cfmpassword);
});

