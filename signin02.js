function login() {
  
    let z =localStorage.getItem("users");
    let p =JSON.parse(z);
    var email=document.getElementById('email').value;
    var pw=document.getElementById('pw').value;
    let  login  =p.find(x => x.email==email && x.pw==pw);
    // console.log(login);
    
  
    if (login != null) {
      
      localStorage.setItem("UserConnecté",JSON.stringify(login))
      // window.location.replace("dashboard.html")
      alert("you are signed in ");
    }

    
}