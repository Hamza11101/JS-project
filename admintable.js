let p = localStorage.getItem("users");
let z = JSON.parse(p);
document.getElementById("tab").addEventListener("load",afficha());
function afficha(){
    // console.log(p);
    // console.log(typeof p);
    // console.log(z);
    // console.log(typeof z);
        let hello=``;
        let i=1;

        // <th scope="row">${i}</th>
        // if(z.email !="admin@gmail.com"){
    z.forEach(x => {
        hello += `<tr>
        
        <td>${x.fname+" "+x.lname}</td>
        <td>${x.email}</td>
        <td>${x.mobile}</td>
        <td>${x.work}</td>
       
        <td><button onclick="deleteitem(${i-1})" class="btn btn-danger btn-lg">Delete</button></td>
        </tr>`
        i++;
    });
    document.getElementById("tab").innerHTML= hello  
}  
// }


function deleteitem(x){
    console.log(x);
    z.splice(x,1);
    console.log(z);
    localStorage.setItem("users",JSON.stringify(z));
    afficha()
}