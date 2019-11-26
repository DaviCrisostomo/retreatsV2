
//var card = document.getElementById("retreat").addEventListener("click",getRetreats());
var div = document.getElementById("cardDiv")
div.onload= getRetreats();

function getRetreats(){
    fetch('http://localhost:8080/api/v1/retreats/')
        .then((res) => {
            return res.json();
        })
        .then((retreatArray) => {


            for (let i = 0; i < retreatArray.length; i++) {

                div.innerHTML +=`
                    <div class="card col-3 m-1 mx-auto" onclick=getRetreat(${i+1})>
                        <img class="card-img-top" src="img/_meditation.png" />
                        <div class="card-body">
                            <h5 class="card-title">${retreatArray[i].location.city+"-"+retreatArray[i].location.country}</h5>
                            <p class="card-info">${"From "+retreatArray[i].date.arrival+" to "+retreatArray[i].date.departure}</p>
                        </div>
                    </div>`

                
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

function getRetreat(id){
    fetch('http://localhost:8080/api/v1/retreats/'+id)
    .then((res) => {
        return res.json();
    }).then((retreat) => {
        div.innerHTML = `<div class="card col-4 m-1 mx-auto">
        <img class="card-img-top" src="img/_meditation.png" />
        <div class="card-body">
            <h5 class="card-title">${retreat.location.city+"-"+retreat.location.country}</h5>
            <p class="card-info">${"From "+retreat.date.arrival+" to "+retreat.date.departure}</p>
        </div>
        </div>`
    })
    .catch((error) => {
        console.log(error)
    })
}

function updateRetreat(retreat) {
    const formData = new FormData();
    formData.append('first_name', profile.firstName);
    formData.append('last_name', profile.lastName);
    formData.append('email', profile.email);

    return fetch('http://localhost:8080/api/v1/retreats/'+retreat.id, {
        method: 'PUT',
        body: formData
    }).then(response => response.json())
}
/*
createNewProfile(profile)
   .then((json) => {
       // handle success
    })
   .catch(error => error);*/