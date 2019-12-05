 const retreatDiv = 
    `<div class="card col-4 m-1 mx-auto">
<img class="card-img-top" src="img/_meditation.png" />
<div class="card-body">
    <h5 class="card-title">${retreat.location.city+"-"+retreat.location.country}</h5>
    <p class="card-info">${"From "+retreat.date.arrival+" to "+retreat.date.departure}</p>
</div>
</div>`

 
 module.exports={
     retreatDiv
 }