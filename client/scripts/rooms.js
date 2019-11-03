var Rooms = {
  Add: function () {
    console.log('im here');
    var newRoom = window.prompt('What do you want to call the new room?');

    //this should append a room to the HTML, kind of how I manually added the
    //new room so format might look something like

    var roomHTML = '<option>' + newRoom + '</option>'; //dleted the class, if breaks add it back

    var $roomHTML = $(roomHTML);

    //since we added selected, it should choose the last selected one, I am going to append this
    //appends to the room spot

    var $select = $('.select');
    $roomHTML.appendTo($select);


  }

};