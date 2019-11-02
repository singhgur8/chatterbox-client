var Rooms = {
  Add: function () {
    console.log('im here');
    var newRoom = window.prompt();

    //this should append a room to the HTML, kind of how I manually added the
    //new room so format might look something like

    var roomHTML = '<option id = "' + newRoom + '" selected>' + newRoom + '</option>';

    var $roomHTML = $(roomHTML);

    //since we added selected, it should choose the last selected one, I am going to append this
    //appends to the room spot

    var $select = $('.select');

    console.log($select);
    console.log($roomHTML);


    $roomHTML.appendTo($select);



  }

};