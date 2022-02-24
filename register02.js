const p =localStorage.getItem("users") || [];
var z=JSON.parse(p)
function register(){
var fname = document.getElementById('fname').value;
var lname=document.getElementById('lname').value;
var email=document.getElementById('email').value;
var pw=document.getElementById('pw').value;
// var loc=document.querySelectorAll("checkbox").checked;
// var mp2=document.getElementById('motdepasse2').value;
let id=Math.floor(Math.random()* 1000);

    //    let users={id:id,fname:"admin",lname:"admin",email:"admin@gmail.com",pw:"Ab1.",role:"admin"}
 
    let users={id:id,fname:fname,lname:lname,email:email,pw:pw};
    if(fname.length == 0){
        alert('Please fill in First name');
        

    }
    else if(lname.length == 0){
        alert('Please fill in Last name');

    }
    else if(email.length == 0){
        alert('Please fill in email');

    }

    else if(pw.length == 0){
        alert('Please fill in password');

    }
    // else if(loc.value == false){
    //     alert('Please fill in Location');

    // }
    // else if(fname.length == 0 && pw.length == 0 && lname.length == 0  ){
    //     alert('Please fill in the blanks');

    // }
    // else if(pw.length > 8){
    //     alert('Max of 8');

    // }else if(!pw.match(numbers)){
    //     alert('please add 1 number');

    // }else if(!pw.match(upperCaseLetters)){
    //     alert('please add 1 uppercase letter');

    // }else if(!pw.match(lowerCaseLetters)){
    //     alert('please add 1 lovercase letter');
    // }
    else{
    z.push(users);
    localStorage.setItem("users",JSON.stringify(z));
    alert('Your account has been created');
    }
}





// function store(){

//     var name = document.getElementById('name');
//     var pw = document.getElementById('pw');
//     var lowerCaseLetters = /[a-z]/g;
//     var upperCaseLetters = /[A-Z]/g;
//     var numbers = /[0-9]/g;

    // if(fname.value.length == 0){
    //     alert('Please fill in email');

    // }else if(pw.value.length == 0){
    //     alert('Please fill in password');

    // }else if(fname.value.length == 0 && pw.value.length == 0){
    //     alert('Please fill in email and password');

    // }else if(pw.value.length > 8){
    //     alert('Max of 8');

    // }else if(!pw.value.match(numbers)){
    //     alert('please add 1 number');

    // }else if(!pw.value.match(upperCaseLetters)){
    //     alert('please add 1 uppercase letter');

    // }else if(!pw.value.match(lowerCaseLetters)){
    //     alert('please add 1 lovercase letter');

//     }else{
//         localStorage.setItem('name', name.value);
//         localStorage.setItem('pw', pw.value);
//         alert('Your account has been created');
//     }
// }

//checking
function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}