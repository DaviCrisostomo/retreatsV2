//taking alll values from the form to create a new retreat
function formCreate(){
    
    var retreat = getJsonModel()

    retreat.title=document.getElementById("fTitle").value;
    retreat.date=document.getElementById("fDate").value;
    retreat.duration=document.getElementById("fDuration").value;
    retreat.description=document.getElementById("fDescription").value;
    retreat.contactMail=document.getElementById("fEmail").value;
    retreat.imgUrl=checkURL(document.getElementById("fImage").value);
    retreat.rooms=[{"couple": true, "beds": 1, "bookings": 0, "price": 0 }];

    createRetreat(retreat)


}
//the json model for the object retreat
function getJsonModel(){

    var jsonModel = {"title":String,"date":String,"duration":Number,"description":String, "contactMail":String, "imgUrl":String, "rooms":[{"couple": Boolean, "beds": Number, "bookings": Number, "price": Number }]}
    return jsonModel;

}
//checking if url points to an image
function checkURL(url) {
    if(url.match(/\.(jpeg|jpg|gif|png)$/)){
    return url
    }
    return "";
}
//inserting the pdg file for the about session

 //this is old. I don't know why I did in this way, but it takes the retreat object
 //and sends to the table.js function to create a table 
  function fafafunction(retreat) {
    createTable(retreat);
  }
//mongodb works with a date format that is horrible and I'm cleaning it to get only the portion correponding to the date, not time
  function cleanDate(str){

    var date = str
    return date.substring(0,10)
  }

 
//a function to check if all values sent by the UPDATE page are correct
//each method responsible for checking a specifc field send back a error message if
//something went wrong
function checkUpdateFields(retreat) {

    var title = retreat.title
    var date = retreat.date
    var duration = retreat.duration
    var description = retreat.description
    var contactMail = retreat.contactMail
    var imgUrl = retreat.imgUrl

    if(title==null||date==null||duration==null||description==null||contactMail==null){
        return 'Required fields can not be empty'
    }

    else if(title==""||date==""||duration==""||description==""||contactMail==""){
        return 'Required fields can not be empty'
    }

    else if (!textValidation(10,25,title)) {
        return 'Title has to have at least 10 and max of 25 characters'
    }
    else if (!dateValidation(date)) {
        return 'Date format is not valid'
    }

    else if(!Number.isInteger(parseInt(duration))||parseInt(duration)<=0){
        return 'Duration has to be an integer greater than zero'
    }

    else if (!validateEmail(contactMail)) {
        return 'E-mail missing or in worng format' 
    }
   
    else if (imgUrl!=""&&!checkURLA(imgUrl)) {
        return 'Link has to point to an image' 
    }

    else if (!textValidation(30,150,description)) {
        return 'Description has to have at least 30 and max of 150 characters'
    }

    else {
        return ""
    }

}
//checking if the updated date is as expected
const dateValidation = (date) => {
   
    const reg = /(\d{4})-(\d{2})-(\d{2})/
    return reg.test(date)//"2017-05-15"=> May 15, 2017 at midnight
  
}
//checking if the text fields like title or description respect the rules
const textValidation = (minSize, maxSize, strg)=>{
  
   return strg.length<=maxSize&&strg.length>=minSize
}
//check if url points to an image
function checkURLA(url) {
    
    return url.match(/\.(jpeg|jpg|gif|png)$/);
}

//checking if email format is correct
const validateEmail = (contactMail) => {
    
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return reg.test(contactMail)

}
//if something goes wrong, show the error in the page
function insertErrMsg(str){

    document.getElementById('errMsg').innerHTML='<b>'+str+'</b>'; 
  setTimeout(function() {document.getElementById('errMsg').innerHTML='';},5000);
 
  }