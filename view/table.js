
function setTableData(rooms) {
  var tableData = [{ "id": Number, "couple": Boolean, "beds": Number, "bookings": Number, "price": Number }];
  for (let i = 0; i < rooms.length; i++) {
    tableData[i] = { "id": i + 1, "couple": rooms[i].couple, "beds": rooms[i].beds, "bookings": rooms[i].bookings, "price": rooms[i].price };
  }
 return tableData;
}

function createTable(retreat) {
  var tabuTable = new Tabulator("#room-table", {

    data: setTableData(retreat.rooms),
    autoColumns: false,
    layout: "fitColumns",
    selectable: true,
    resizableColumns: false,

    columns: [

      { title: "Room ID", field: "id", align: "center", sorter: "number", headerSort: false},
      { title: "Price(€)", field: "price", align: "center", sorter: "number", editor:"number", editorParams:{min:0,max:250}, headerSort: false },
      { title: "Couple", field: "couple", align: "center", editor:"select", editorParams:{values:{true:"yes",false:"no",}}, headerSort: false },
      { title: "Beds", field: "beds", align: "center", headerSort: false},
      { title: "-", formatter: "tickCross", width: "5px", align: "center", headerSort: false, cellClick: function (e, cell) {
        e.stopPropagation();
        var availableBeds = cell.getRow().getData().beds;
        var reservedBeds = cell.getRow().getData().bookings;
        if (availableBeds>reservedBeds) {
          tabuTable.updateData([{ id: cell.getRow().getIndex(), beds: --cell.getRow().getData().beds }]);
        }
      }
    },
    { title: "+", formatter: "buttonTick", width: "5px", align: "center", headerSort: false, cellClick: function (e, cell) {
        e.stopPropagation();
       
          tabuTable.updateData([{ id: cell.getRow().getIndex(), beds: ++cell.getRow().getData().beds }]);
        
      }
    },
      { title: "Bookings", field: "bookings", align: "center", headerSort: false },
      { title: "-", formatter: "tickCross", width: "5px", align: "center", headerSort: false, cellClick: function (e, cell) {
          e.stopPropagation();
          var reservedBeds = cell.getRow().getData().bookings;
          if (reservedBeds > 0) {
            tabuTable.updateData([{ id: cell.getRow().getIndex(), bookings: --cell.getRow().getData().bookings }]);
          }
        }
      },
      { title: "+", formatter: "buttonTick", width: "5px", align: "center", headerSort: false, cellClick: function (e, cell) {
          e.stopPropagation();
          var availableBeds = cell.getRow().getData().beds;
          var reservedBeds = cell.getRow().getData().bookings;
          if (availableBeds > reservedBeds) {
            tabuTable.updateData([{ id: cell.getRow().getIndex(), bookings: ++cell.getRow().getData().bookings }]);
          }
        }
      },
     
    ],


  });

  $("#cardDiv").on("click", "#calculate-button", function () {
    var rows = tabuTable.getSelectedRows();
    let sum = 0;
    for (let i = 0; i < rows.length; i++) {
      sum += (rows[i].getData().price) * (rows[i].getData().bookings);
    }
    var total = '€' + sum;
    $("#display").val(total);

  });

  $("#cardDiv").on("click", "#create-button", function () {
    
    let rowSize = tabuTable.getData().length+1;

    var defaults =  { id: rowSize, "couple": false, "beds": 0, "bookings": 0, "price": 0 };
    tabuTable.addRow(Object.assign({}, defaults));
   
  });

  $("#cardDiv").on("click", "#exclude-button", function () {
    
    var rows = tabuTable.getSelectedRows();
   
     for (let i = 0; i < rows.length; i++) {
      rows[i].delete();
    }
  //turnTableIntoJson();
  });

  $("#cardDiv").on("click", "#confirm-button", function (){
    var roomsArray = tabuTable.getData();
  /*
    retreat.title={"title":String}
    retreat.data={"data":String}
    retreat.description={"description":String}
    */
    var otherFields = document.getElementsByName("jsonField");
 
    retreat.title = otherFields[0].childNodes[0].data
    retreat.date =  otherFields[1].childNodes[0].data
    retreat.duration = otherFields[2].childNodes[0].data
    retreat.contactMail = otherFields[3].childNodes[0].data 
    retreat.imgUrl = otherFields[4].childNodes[0].data
    retreat.description = otherFields[5].childNodes[0].data
   
    var result = checkUpdateFields(retreat)

    if(result!="")
    insertErrMsg(result)
    
    else{
    
    retreat.rooms=[{"couple": Boolean, "beds": Number, "bookings": Number, "price": Number }];
   
    for(let i =0; i<roomsArray.length;i++){
      retreat.rooms[i] = { "couple": roomsArray[i].couple, "beds": roomsArray[i].beds, "bookings": roomsArray[i].bookings, "price": roomsArray[i].price };
    }
    
    update();
  }
  });

  $("#cardDiv").on("click", "#delete-button", function (){
    
    deleteRetreat(retreat._id);
    location.reload();
  });

  function update(){
    updateRetreat(retreat);
    showRetreat(retreat);
  }

}



