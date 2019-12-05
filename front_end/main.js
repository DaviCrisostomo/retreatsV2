//import setTableData from "table.js";
//var card = document.getElementById("retreat").addEventListener("click",getRetreats());
var div = document.getElementById("cardDiv")
div.onload = getRetreats();
var button = document.getElementById("button_holder")


 function getRetreats() {
    fetch('http://localhost:8080/api/v1/retreats/')
        .then((res) => {
            return res.json();
        })
        .then((retreatArray) => {


            for (let i = 0; i < retreatArray.length; i++) {

                div.innerHTML += `
                    <div class="card col-3 m-1 mx-auto" onclick=getRetreat(${i + 1})>
                        <img class="card-img-top" src="img/_meditation.png"/>
                        <div class="card-body">
                            <h5 class="card-title">${retreatArray[i].location.city + "-" + retreatArray[i].location.country}</h5>
                            <p class="card-info">${"From " + retreatArray[i].date.arrival + " to " + retreatArray[i].date.departure}</p>
                        </div>
                    </div>`


            }
        })
        .catch((error) => {
            console.log(error)
        })
}


function getRetreat(id) {
    fetch('http://localhost:8080/api/v1/retreats/' + id)
        .then((res) => {
            return res.json();
        }).then((retreat) => {
            var rooms = retreat.rooms;
            
            div.innerHTML = `
            <div class="card col-5 m-1 mx-auto">
        <img class="card-img-top" src="img/_meditation.png" />
        <div class="card-body">
            <h3 class="card-title" >${retreat.location.city + "-" + retreat.location.country}</h3>
            <h6 class="card-info">${"From " + retreat.date.arrival + " to " + retreat.date.departure}</p> 
            <div id="room-table"></div> 
            <button class="button btn-lg" id="calculate-button">Total</button>
            <input type="text " size="8"name="display" id="display" value="€0"/> 
            <button class="button btn-lg" id="create-button">Create</button>
            <button class="button btn-lg" id="delete-button">Delete</button>
            <button class="button btn-lg" id="confirm-button">Update</button>
            </div>
          `
          fafafunction(retreat);
        })
        .catch((error) => {
            console.log(error)
        })
}

function insertAbout(){

    div.innerHTML = `<embed src="docs/CA1_descriptor.pdf" type="application/pdf" width="100%" height="600px" />`
}

function fafafunction(retreat){
    createTable(retreat);   
}

function updateRetreat(retreat) {
    var data = JSON.stringify(retreat);
      
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          console.log(this.responseText);
        }
      });
      
      xhr.open("PUT", "http://localhost:8080/api/v1/retreats/"+retreat.id);
      xhr.setRequestHeader("content-type", "application/json");
      
      xhr.send(data);
}
