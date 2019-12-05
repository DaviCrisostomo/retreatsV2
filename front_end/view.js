var div = document.getElementById("cardDiv")

function newRetreatForm(){

 div.innerHTML = ` 
 <div class="card col-5 m-1 mx-auto">
 <img class="card-img-top" src="img/_meditation.png" />
 <form action="/action_page.php">
 First name:<br>
 <input type="text" value="Mickey"><br>
 Last name:<br>
 <input type="text" name="lastname" value="Mouse"><br><br>
 <input type="submit" class="button btn-lg" value="Submit">
</form> 
</div>`



}