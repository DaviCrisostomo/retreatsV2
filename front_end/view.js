
var div = document.getElementById("cardDiv")

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



