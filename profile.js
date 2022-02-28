
// let z = localStorage.getItem("UserConnecté");

// var x = p.email;
// console.log(x);
// var mail = document.getElementById("mail");
// mail.innerHTML=p.email;
// fullname.innerHTML=p.fname +" "+ p.lname;
// console.log(z);
// console.log(p);
document.querySelector("body").addEventListener("load",affichage());
function affichage() {
    // let l = localStorage.getItem("UserConnecté");
    // let h = JSON.parse(l);
    let userc = JSON.parse(localStorage.getItem("UserConnecté"));
    // console.log("rfghjkl");
    // console.log(userc);
    //inner
    document.getElementById("profinf").innerHTML = userc.profile;

    var fullname = document.getElementById("fullname");
    fullname.innerHTML = userc.fname + " " + userc.lname;
    var mobile = document.getElementById("mobile");
    mobile.innerHTML = userc.mobile;
var mail = document.getElementById("mail");
mail.innerHTML=userc.email;
    var loca = document.getElementById("loca");
    loca.innerHTML = userc.location;
    var work = document.getElementById("work");
    work.innerHTML = userc.work;
    var expe = document.getElementById("expe");
    expe.innerHTML = userc.experience;
}

// function editUser(){
//     let z = localStorage.getItem("UserConnecté");
//     let y = localStorage.getItem("users");
//     let p = JSON.parse(z);
//     let user = JSON.parse(y);
//     console.log(p);
//      document.getElementById('fnam').innerHTML= p.fname;
//     document.getElementById('lnam').innerHTML= p.lname;

//     document.getElementById('mobi').innerHTML=p.mobile;
//     document.getElementById('locati').innerHTML=p.location;
//     // var wo = document.getElementById('wo').value;
//     // var exp = document.getElementById('exp').value;
//     // var profdis = document.getElementById('profdis').value;
    
    
    
// }

function saveinn() {

    //new data

    var fname = document.getElementById('fnam').value;
    var lname = document.getElementById('lnam').value;

    var mobi = document.getElementById('mobi').value;
    var locati = document.getElementById('locati').value;
    var wo = document.getElementById('wo').value;
    var exp = document.getElementById('exp').value;
    var profdis = document.getElementById('profdis').value;
    let z = localStorage.getItem("UserConnecté");
    let y = localStorage.getItem("users");
    let p = JSON.parse(z);
    let user = JSON.parse(y);

    let savein = { id: p.id, fname: fname, lname: lname, email: p.email, mobile: mobi, location: locati, work: wo, experience: exp, profile: profdis, pw: p.pw };
    // console.log(savein);
    let pos = user.find(x => x.id == savein.id);
    // console.log(pos);
    // console.log(user.indexOf(pos));
    user.splice(user.indexOf(pos), 1, savein);

    console.log(user);


    localStorage.setItem("UserConnecté", JSON.stringify(savein))
    localStorage.setItem("users", JSON.stringify(user))



    window.location.replace("/pages/profile.html");




}

function signout(){

    localStorage.removeItem("UserConnecté");
    window.location.replace("../index.html");
}

