var RoomsView = {


  $rooms: $('button'),
  // $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$rooms.on('click', Rooms.Add);
  },

  render: function() {
    Parse.readAll((data) => {
      $('.roomlist').remove(); //clears the lobbies before adding more
      var room = $('.select option:selected').val(); //got the room selected

      tempData = data;

      var roomsArr = [];
      //populates the room with its respective messages
      for (var i = 0; i < tempData.results.length; i++) {
        var newRoom = tempData.results[i].roomname;
        //populate the drop down with all possible rooms
        if (roomsArr.indexOf(newRoom) === -1) {
          roomsArr.push(newRoom);
          var roomHTML = '<option class = "roomlist">' + newRoom + '</option>';
          var $roomHTML = $(roomHTML);
          var $select = $('.select');
          //this adds all of the rooms, we dont need to add a room if it is repeated
          $roomHTML.appendTo($select);
        }
      }

    });

  },

  renderRoom: function(room) {
    var str = '<span>' + JSON.stringify(room) + '</span>';
    var $message = $(str);
    $message.appendTo(RoomsView.$select);
    //The above code is not really used in the functionality, it just get a green check for Mocha test
  }
};
