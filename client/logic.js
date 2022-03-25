const submit = document.getElementById('sub');
var Signinemail = document.querySelector('#floatingInput');
var Signinpass = document.querySelector('#floatingPassword');
var Signinform = document.querySelector('.Logform');
var Signupform = document.querySelector('.Signupform');
var Email = document.querySelector('.email');
var Name = document.querySelector('.name');
var Username = document.querySelector('.uname');
var password = document.querySelector('.password');


// Signinform.addEventListener("submit",async(e)=>{
//     e.preventDefault();
//     const email = Signinemail.value;
//     const pass = Signinpass.value;
//     console.log(`email:${email} password:${pass}`);   
    
// })

Signupform.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const user = {
            name:Name.value,
            Email:Email.value,
            Username:Username.value,
            password:password.value
    }
    const response = await fetch('/api/v1/user',{
        method:"POST",
        headers:{
           "Content-Type":"application/json"
        },
        body:JSON.stringify(user),
        // mode:'no-cors'
    });
    if(response){

    } 
    console.log(response);   
    window.location.replace('http://localhost:5500/signin.html');
})

