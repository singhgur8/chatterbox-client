var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {

  },

  render: function () {

    setTimeout(App.initialize, 10000); //every 10 seconds
    var tempData;
    // debugger;
    //messgesViewrender for the whole data set
    Parse.readAll((data) => {

      tempData = data;


      var paras = document.getElementsByClassName('children');

      $('.chat').remove();

      for (var i = 0; i < tempData.results.length; i++) {
        if (tempData.results[i].username) {
          this.renderMessage(tempData.results[i]);
        }
      }

    });


    // console.log(tempData,'temp')

  },

  renderMessage: function (message) {
    //we created
    var compiled = MessageView.render;

    // if (message[username] === undefined) {
    //   return;
    // }

    var $message = $(compiled(message));
    $message.appendTo(MessagesView.$chats);
  }

};