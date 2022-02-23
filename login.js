(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  function login() {
  
    let z =localStorage.getItem("users");
    let p =JSON.parse(z);
    let email=document.getElementById("e-mail").value
    let password=document.getElementById("motdepasse").value
    let  login  =p.find(x => x.email==email && x.mdp==password);
    console.log(login);
    
  
    if (login != null) {
      
      localStorage.setItem("UserConnecté",JSON.stringify(login))
      // window.location.replace("dashboard.html")
    }

    
}