var tableData =  [{"id":Number, "couple":Boolean,"beds":Number,"bookings": Number,"price": Number}];

function setTableData(rooms){
    
  for(let i=0; i<rooms.length; i++){
   tableData[i]= {"id":i+1, "couple":rooms[i].couple,"beds":rooms[i].beds,"bookings": rooms[i].bookings,"price": rooms[i].price };
  }
createTable(tableData);
}

function createTable(tableData){
  var tabuTable = new Tabulator("#room-table",{     
     
    data: tableData,
    autoColumns: false,
    layout:"fitColumns",
    selectable: true,
  
    selectableCheck:function(row){
    //row - row component
    return row.getData().bookings < row.getData().beds; //allow selection of rows where the age is greater than 18
},
   
  columns: [
    { title: "Room ID", field: "id",  align: "center", sorter:"number", },
    { title: "Couple", field: "couple",  align: "center" },
    { title: "Beds", field: "beds", align: "center"},
    { title: "Bookings", field: "bookings", align: "center" },
    { title: "Price(€)", field: "price",  align: "center", sorter:"number" },
   
], 
 

});
  
  $("#button_holder").on("click", "#calculate-button", function(){
  var rows = tabuTable.getSelectedRows();
  let sum = 0;
  for(let i = 0; i<rows.length; i++){
    sum+=rows[i].getData().price;
  }
  var total = '€'+sum;
  $("#display").val(total);
 
  
  });

}







