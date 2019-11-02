var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function () {
    setTimeout(App.initialize, 5000);
    //messgesViewrender for the whole data set
    Parse.readAll((data) => {
      // examine the response from the server request:

      for (var i = 0; i < data.results.length; i++) {
        this.renderMessage(data.results[i]);
      }

    });
  },

  renderMessage: function (message) {
    //we created
    var compiled = MessageView.render;

    var $message = $(compiled(message));
    $message.appendTo(MessagesView.$chats);
  }

};