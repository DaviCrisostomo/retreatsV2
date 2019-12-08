const retreatDiv =  `
 <div class="card col-5 m-1 mx-auto">
<img class="card-img-top" src="img/_meditation.png" />
<div class="card-body" >
 <h3 class="card-title" name="jsonField" id="city" style="text-align:left;float:left;">${retreat.location.city}</h3>
 <h3 class="card-title" style="text-align:left;float:left;">-</h3>
 <h3 class="card-title" name="jsonField" id="country" style="text-align:left;float:left;">${retreat.location.country}</h3>
 <hr style="clear:both;"/>
 <h6 class="card-info" name="jsonField" style="text-align:left;float:left;">From &nbsp;</h6>
 <h6 class="card-info" name="jsonField" id="arrival" style="text-align:left;float:left;">${retreat.date.arrival}</h6>
 <h6 class="card-info" name="jsonField" style="text-align:left;float:left;">&nbsp; to &nbsp;</h6>
 <h6 class="card-info" name="jsonField" id="departure" style="text-align:left;float:left;">${retreat.date.departure}</h6>
 <h6 class="card-info" name="jsonField" id="departure" style="text-align:left;float:left;">${"&nbsp;"+retreat.contactMail}</h6>
 <hr style="clear:both;"/>
 <button id="editButton" onclick="setEditable()"}>Edit</button>
 <div id="room-table"></div>     
 <table class="table">
 <button class="button btn-lg" id="calculate-button">Total</button>
 <input type="text " size="8"name="display" id="display" value="€0"/>
 <button class="button btn-lg float-none" id="create-button">Insert</button>
 <button class="button btn-lg float-none" id="exclude-button">Remove</button>
 <button class="button btn-lg float-none" id="confirm-button">Update</button>
 <button class="button btn-lg float-right" id="delete-button">Delete</button>
 </div>
`;


 
