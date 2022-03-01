let p = localStorage.getItem("users");
let z = JSON.parse(p);

document.querySelector("main").addEventListener("load",f1());
function f1(){
    var wo1=``;
        let  worke  =z.filter(x => x.work == "worker " );
        console.log(worke);
        
        worke.forEach(element => {



        //     wo1 +=`<div class="card" style="width: 18rem;">
        //     <div class="card-header">
        //     ${element.fname+" "+element.lname}
        //     </div>
        //     <ul class="list-group list-group-flush">
        //       <li class="list-group-item">${element.email}</li>
        //       <li class="list-group-item">${element.mobile}</li>
        //       <li class="list-group-item">${element.work}</li>
        //     </ul>
        //   </div>`



        wo1 += `<div class="card-body pt-4 p-3">
              <ul class="list-group">
                <li class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                  <div class="d-flex flex-column">
                    <h6 class="mb-3 text-sm">${element.fname+" "+element.lname}</h6><br>
                    <span class="mb-2 text-xs">Email Address: <span class="text-dark font-weight-bold ms-sm-2">${element.email}</span></span><br>
                    <span class="mb-2 text-xs">Mobile Number: <span class="text-dark ms-sm-2 font-weight-bold">${element.mobile}</span></span><br>
                    <span class="text-xs">Function : <span class="text-dark ms-sm-2 font-weight-bold">${element.work}</span></span><br>
                  </div>
                  
                </li>
                </ul>
         </div>`
            
            document.getElementById("workers").innerHTML= wo1

        });
            

    var wo2=``
    let  wor  =z.filter(x => x.work == "technicien " );
        console.log(wor);
        
        wor.forEach(elm => {
            wo2 += `<div class="card-body pt-4 p-3">
            <ul class="list-group">
              <li class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                <div class="d-flex flex-column">
                  <h6 class="mb-3 text-sm">${elm.fname+" "+elm.lname}</h6><br>
                  <span class="mb-2 text-xs">Email Address: <span class="text-dark font-weight-bold ms-sm-2">${elm.email}</span></span><br>
                  <span class="mb-2 text-xs">Mobile Number: <span class="text-dark ms-sm-2 font-weight-bold">${elm.mobile}</span></span><br>
                  <span class="text-xs">Function : <span class="text-dark ms-sm-2 font-weight-bold">${elm.work}</span></span><br>
                </div>
                
              </li>
              </ul>
       </div>`
          
          document.getElementById("tech").innerHTML= wo2

      });

      var wo3=``
      let  wore  =z.filter(x => x.work == "engineer" );
          console.log(wore);
          
          wore.forEach(elem => {
            wo3 += `<div class="card-body pt-4 p-3">
            <ul class="list-group">
              <li class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                <div class="d-flex flex-column">
                  <h6 class="mb-3 text-sm">${elem.fname+" "+elem.lname}</h6><br>
                  <span class="mb-2 text-xs">Email Address: <span class="text-dark font-weight-bold ms-sm-2">${elem.email}</span></span><br>
                  <span class="mb-2 text-xs">Mobile Number: <span class="text-dark ms-sm-2 font-weight-bold">${elem.mobile}</span></span><br>
                  <span class="text-xs">Function : <span class="text-dark ms-sm-2 font-weight-bold">${elem.work}</span></span><br>
                </div>
                
              </li>
              </ul>
       </div>`
          
          document.getElementById("engin").innerHTML= wo3

      });



}




