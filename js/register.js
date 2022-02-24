// const p =localStorage.getItem("users") || [];
// var z=JSON.parse(p)
// function register(){
//     let fname = document.getElementById("fname").value;
//     let lname = document.getElementById("lname").value;
//     let mail = document.getElementById("email").value;
//     let team = document.getElementById("inputState").value;
//     let mdp = document.getElementById("mdp").value;
//     let cmdp = document.getElementById("cmdp").value;
//     let id=Math.floor(Math.random()* 100);
//     // let users={id:id,fname:"admin",lname:"admin",email:"admin@gmail.com",mdp:"admin",cmdp:"admin",role:"admin"}
//     let users={id:id,fname:fname,lname:lname,email:mail,team:team,mdp:mdp,cmdp:cmdp,role:"user"};

//     if(mdp!== cmdp){
//         document.getElementById("check").innerHTML= ('check your password');
//     }
//     else{
//     z.push(users);
//     localStorage.setItem("users",JSON.stringify(z));
//     window.location.replace("login.html")
// }
// }
//7atem
// const p =localStorage.getItem("users") || [];
// var z=JSON.parse(p)
// function register(event){
  
//   var form = document.querySelectorAll('.needs-validation')[0]
//   if (!form.checkValidity()) {
//     event.preventDefault();
//     event.stopPropagation()
//   }
// else{
//   form.classList.add('was-validated');
// var nom = document.getElementById('nom').value;
// var prenom=document.getElementById('prenom').value;
// var email=document.getElementById('e-mail').value;
// var mp1=document.getElementById('motdepasse').value;
// var mp2=document.getElementById('motdepasse2').value;
// let id=Math.floor(Math.random()* 100);
    
//     let user={id:id,nom:nom,prenom:prenom,email:email,mdp:mp1,cmdp:mp2};

//     if(mp1!== mp2){
//         document.getElementById("check").innerHTML= ('check your password');
//     }
//     else{
//     z.push(user);
//     localStorage.setItem("users",JSON.stringify(z));
//     window.location.replace("login.html");
//     }
//   }
// }
//7amza
const p =localStorage.getItem("users") || [];
var z=JSON.parse(p)
function register(){
var nom = document.getElementById('nom').value;
var prenom=document.getElementById('prenom').value;
var email=document.getElementById('e-mail').value;
var mp1=document.getElementById('motdepasse').value;
var mp2=document.getElementById('motdepasse2').value;
let id=Math.floor(Math.random()* 100);
    
    let user={id:id,nom:nom,prenom:prenom,email:email,mdp:mp1,cmdp:mp2};

    if(mp1!== mp2){
        document.getElementById("check").innerHTML= ('check your password');
    }
    else{
    z.push(user);
    localStorage.setItem("users",JSON.stringify(z));
    window.location.replace("login.html")
    }
  }

// var sub=document.getElementById('sub');
// sub.addEventListener('click',f1);
// function f1() {
    
//     nom.className='is-valid';
// }
 // Example starter JavaScript for disabling form submissions if there are invalid fields
//  (function () {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation')
  
//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//       .forEach(function (form) {
//         form.addEventListener('submit', function (event) {
//           if (!form.checkValidity()) {
//             event.preventDefault()
//             event.stopPropagation()
//           }
  
//           form.classList.add('was-validated')
//         }, false)
//       })
//   })()

// function submit(){
//     alert('hello');
// }

    // if( nom.length<0){
    //     nom.className+="is-invalid";
    // }
    // else{ nom.className+="is-valid";};

    



// function sub () {
//   if(nom.value==""){
//       alert("nom vide")
//   }

//       return false;
//   }

  