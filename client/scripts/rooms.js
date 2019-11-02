var Rooms = {
  Add: function () {
    console.log('im here');
    var newRoom = window.prompt();
    //appends to the room spot
    newRoom.appendTo(RoomsView.$select);

  }

};