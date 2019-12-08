
var div = document.getElementById("cardDiv")

function retreatsGrid(retreatArray) {
    
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
     
  }

  function showRetreat(retreat) {
 
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
  }

function newRetreatForm(){

 div.innerHTML = ` 
 <div class="card col-5 m-1 mx-auto">
 <img class="card-img-top" src="img/_meditation.png" />
 <div class="card-body" >
 <form  name="regform" >
 <input type="text" required id="fTitle" minlength="10" maxlength="25" placeholder="Title" title="Enter event title"/>
 <input type="text" id="fDate"  placeholder="YYYY-MM-DD" required 
 pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))" title="Enter a date in this format YYYY/MM/DD"/><br>
 <input type="number" required id="fDuration" placeholder="event duration">
 <input type="text" required id="fDescription" maxlength="150" minlength="30" placeholder="Event description"><br>
 <input type="email" required id="fEmail" placeholder="Email">

 <input type="submit" onclick="submitForm()" class="button btn-lg float-right" value="Submit">
</form> 
</div>
</div>`

}

function fafafunction(retreat) {
    createTable(retreat);
  }

function insertAbout() {

    div.innerHTML = `<embed src="docs/CA1_descriptor.pdf" type="application/pdf" width="100%" height="600px" />`
  }

function submitForm(){

    var retreat = {"title":String,"date":String,"duration":Number,"description":String, "contactMail":String, "rooms":[{"couple": Boolean, "beds": Number, "bookings": Number, "price": Number }]}
   

    retreat.title=document.getElementById("fTitle").value;
    retreat.date=document.getElementById("fDate").value;
    retreat.duration=document.getElementById("fDuration").value;
    retreat.description=document.getElementById("fDescription").value;
    retreat.contactMail=document.getElementById("fEmail").value;
    retreat.rooms=[{"couple": true, "beds": 1, "bookings": 0, "price": 0 }];

    createRetreat(retreat)

}



