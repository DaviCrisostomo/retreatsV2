var div = document.getElementById("cardDiv")
div.onload = getRetreats();

function getRetreats() {
  
    fetch('http://localhost:8080/api/v1/retreats/')
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
    fetch('http://localhost:8080/api/v1/retreats/' + id)
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