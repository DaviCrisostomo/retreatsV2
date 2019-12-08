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
                    <div class="card col-4 m-3 mx-auto" onclick=getRetreat(${retreatArray[i].id})>
                        <img class="card-img-top" src="img/_meditation.png"/>
                        <div class="card-body">
                            <h5 class="card-title">${retreatArray[i].title }</h5>
                            <p class="card-info">${retreatArray[i].date}</p>
                        </div>
                    </div>
                    `
                   
                    
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
    
      div.innerHTML = `
      <div class="card col-5 m-1 mx-auto">
     <img class="card-img-top" src="img/_meditation.png" />
     <div class="card-body" >
      <h3 class="card-title" name="jsonField" id="title" contentEditable = "true">${retreat.title}</h3>
      <h6 class="card-title" name="jsonField" id="mail" contentEditable = "true">${retreat.contactMail}</h3>
      <h6 class="card-info" name="jsonField" id="date" contentEditable = "true">${retreat.date}<class contentEditable = "false">&nbsp;(</class><name="jsonField" id="duration" contentEditable = "true"><i>${retreat.duration}</><class contentEditable = "false">&nbsp;days)</i></></h6>
      <h5 name="jsonField" id="description" contentEditable = "true">${retreat.description}</h5>
     
    <!--  <button class="beditor" id="editButton" onclick="setEditable()"  style="float:right;">Edit</button>--!>
     
      <div id="room-table"></div>     
      <table class="table">
      <button class="button btn-lg" id="calculate-button">Total</button>
      <input type="text " size="8"name="display" id="display" value="€0"/>
      <button class="button btn-lg float-none" id="create-button">Insert</button>
      <button class="button btn-lg float-none" id="exclude-button">Remove</button>
      <button class="button btn-lg float-none" id="confirm-button">Update</button>
      <button class="button btn-lg float-right" id="delete-button">Delete</button>
      </div>
     `
      fafafunction(retreat);
    })
    .catch((error) => {
      console.log(error)
    })
}

function insertAbout() {

  div.innerHTML = `<embed src="docs/CA1_descriptor.pdf" type="application/pdf" width="100%" height="600px" />`
}

function setEditable(){
 
  var x = document.getElementById("editButton");
  var s = document.getElementsByName("jsonField");
  
  if (x.innerHTML === "Edit") {
    x.innerHTML = "End";
    for (let i=0;i<s.length;i++){
      s[i].contentEditable = "true";
    }

  } else {
    x.innerHTML = "Edit";
    for (let i=0;i<s.length;i++){
      s[i].contentEditable = "false";
    }
  }
 
}



function fafafunction(retreat) {
  createTable(retreat);
}

function createRetreat(retreat) {
  var data = JSON.stringify(retreat);
  console.log(data)
fetch("http://localhost:8080/api/v1/retreats/", {
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "body":data
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.log(err);
});
}

function updateRetreat(retreat) {
  var data = JSON.stringify(retreat);

  fetch("http://localhost:8080/api/v1/retreats/" + retreat.id, {
    "method": "PUT",
    "headers": {
      "content-type": "application/json"
    },
    "body": data
  })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
}

function deleteRetreat(id){
  fetch("http://localhost:8080/api/v1/retreats/"+id, {
  "method": "DELETE",
  "headers": {}
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.log(err);
});
}
