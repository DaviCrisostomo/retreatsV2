
var div = document.getElementById("cardDiv")
var createDiv = document.getElementById("createDiv")


function retreatsGrid(retreatArray) {

    newRetreatForm()

    for (let i = 0; i < retreatArray.length; i++) {
      var id = "'"+retreatArray[i]._id+"'"
      retreatArray[i].date = cleanDate(retreatArray[i].date)

      div.innerHTML += `
                      <div class="card col-3 m-1 mx-auto text-center"  onclick=getRetreat(${id})>
                      
                          <img class="card-img-top " style="height:187.5px; width:250px;object-fit:cover;margin-left: auto;margin-right: auto;"  src="${retreatArray[i].imgUrl==""?"img/_meditation.png":retreatArray[i].imgUrl}"/>
                       
                          <div class="card-body">
                              <h5 class="card-title">${retreatArray[i].title }</h5>
                              <p class="card-info">${retreatArray[i].date}</p>
                          </div>
                      </div>
                     
                      `                  
        }
     
  }


  function showRetreat(retreat) {

        
        retreat.date = cleanDate(retreat.date)
        createDiv.innerHTML = ` 
        <br><br><br><br><br><br>
       
        <table class="table" style="width: 100%;">
        <thead><tr><th style="width:60%;border-top: none;"></th><th style="width:60%;border-top: none;"></th></tr></thead>
         <h1 class="card-title" name="jsonField" id="title" contentEditable = "true">${retreat.title}</h3>
         <tr>
         <td><label for="date">Start:</label></td>
         <td><h6 class="card-info" name="jsonField" id="date" contentEditable = "true">${retreat.date}</h6></td>
        </tr>
         <tr>
         <td><label for="duration">Duration:</label></td>
         <td><h6 class="card-info" name="jsonField" id="duration" contentEditable = "true">${retreat.duration}</h6></td>
         </tr>
         <tr>
         <td><label for="mail">Contact:</label></td>
         <td><h6 class="card-title" name="jsonField" id="mail" contentEditable = "true">${retreat.contactMail}</h6></td>
         </tr>
         <tr>
         <td><label for="url">Image:</label></td>
         <td><h5 name="jsonField" id="url" contentEditable = "true">${retreat.imgUrl==""?"img/_meditation.png":retreat.imgUrl}</h5></td>
         </tr>
         <tr>
         <td><label for="description">Description:</label></td>
         <td><h5 name="jsonField" id="description" contentEditable = "true">${retreat.description}</h5></td>
         </tr>
         </table>
         <h6 class="card-title" name="error" id="errMsg" style="color:#dc2030;"></h6>
         `
        
         div.innerHTML = `
        <div class="card col-8 m-1 mx-auto">
        <img class="card-img-top" style="height:429px; width:572px;object-fit:cover;margin-left: auto;margin-right: auto;" src="${retreat.imgUrl==""?"img/_meditation.png":retreat.imgUrl}" /><br>
      <!--  <button class="beditor" id="editButton" onclick="setEditable()"  style="float:right;">Edit</button>--!>
       </div>
       <div class="card col-8 m-1 mx-auto">
        <div id="room-table"></div>     
        <table class="table">
        <div class="row">
        <button class="button btn-lg" id="calculate-button">Total</button>
        <input type="text " size="8"name="display" id="display" value="€0"/>
        <button class="button btn-ro float-none" id="create-button">Insert</button>
        <button class="button btn-ro float-none" id="exclude-button">Remove</button>
        <button class="button btn-re float-none" id="confirm-button">Update</button>
        <button class="button btn-ro float-right" id="delete-button">Delete</button>
        </div></div></div>
       `
       //
        fafafunction(retreat);
  }

function newRetreatForm(){
 
 createDiv.innerHTML = ` 
 <div class="col-lg-3"></div>
 <br><br><br><br>
         <h3 class="mt-5" >Create a Retreat</h3>
     <form  name="regForm" onsubmit=formCreate()>
          <table class="table" style="width: 50%;">
            <thead><tr><th style="width:10%;border-top: none;"></th><th style="width:10%;border-top: none;"></th></tr></thead>
        <tr>
         <td> <label for="fTitle">Title</label></td>
          <td><input type="text" id="fTitle" pattern="[a-zA-Z-9\\s]+" minlength="10" maxlength="25" required="true"></td>
       
        <tr>
          <td><label for="fDescription">Description</label></td>
         <td> <input type="text" id="fDescription" minlength="30" maxlength="150" required="true"></td>
         </tr>
         <td> <label for="fDate">Date</label></td>
         <td>
        
<input type="text" id="fDate" name="fDate" placeholder="YYYY-MM-DD" required pattern="([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))" title="Enter a date in this format YYYY/MM/DD"/>
       </select>
     </td>
            </tr>
       <tr>
         <td> <label for="fDuration">Duration</label></td>
          <td><input type="number" min="0" id="fDuration" name="fDuration" required="true"></td>
        </tr>
 
    <tr>
      <td><label for="homepage">Image</label></td>
      <td><input type="url" id="fImage" name="fImage"></td> 
     </tr>

       <!-- <td> <label for="fImage">Image</label></td>
          <td> <input type='file' id='fImage' name='fImage' accept="image/*"/></td>
        </tr>-->
        <tr>
          <td> <label for="fEmail">Email</label></td>
            <td><input type="fEmail" id="fEmail" name="fEmail" required="true"></td>
         </tr>
         
        </table>
          <input type="submit" id="reg-button" value="Submit">
        </form>`

}





