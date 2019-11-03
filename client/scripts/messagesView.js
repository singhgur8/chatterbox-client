
var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {

  },


  render: function () {

    setTimeout(App.initialize, 5000); //every 5 seconds
    var tempData;

    Parse.readAll((data) => {

      tempData = data;

      $('.chat').remove(); //clears the chat
      var room = $('.select option:selected').val(); //got the room selected


      var roomsArr = [];
      //populates the room with its respective messages
      for (var i = 0; i < tempData.results.length; i++) {

        if (tempData.results[i].username && tempData.results[i].text && tempData.results[i].roomname === room) { //filters out the messages that dont have username or text

          //if results of i at username is in friends and true
          // if (tempData.results[i].username === ??cant just check if its right cus its an objet)


          //need to filter and run this render for non friends
          this.renderMessage(tempData.results[i], MessageView.render);

          // //run this render for friends
          // this.renderMessage(tempData.results[i], Friends.render);
        }
      }

    });


  },

  renderMessage: function (message, renderType) {

    var compiled = renderType;

    var $message = $(compiled(message));
    $message.appendTo(MessagesView.$chats);
  }

};