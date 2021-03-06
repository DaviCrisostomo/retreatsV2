/*
CRUD methods for the retreat objects fetching http://localhost:3000/retreat/

*/

var div = document.getElementById("cardDiv")
div.onload = getRetreats();


function getRetreats() {
  
    fetch('http://localhost:3000/retreat')
      .then((res) => {
       
        return res.json();
      })
      .then((retreatArray) => {
  
        retreatsGrid(retreatArray);
       
      })
      .catch((error) => {
        console.log(error)
      })
    
  }

  function getRetreat(id) {
    fetch('http://localhost:3000/retreat/' + id)
      .then((res) => {
        return res.json();
      }).then((retreat) => {
      
        showRetreat(retreat)
       
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function createRetreat(retreat) {

    var data = JSON.stringify(retreat);
   
  fetch("http://localhost:3000/retreat/", {
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
  
    fetch("http://localhost:3000/retreat/" + retreat._id, {
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
    fetch("http://localhost:3000/retreat/"+id, {
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