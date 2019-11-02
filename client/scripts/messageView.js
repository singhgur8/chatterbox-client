var MessageView = {

  render: _.template(`

      <div class="chat">
        <div class="<%- username %> name">
          <b>
            <%- username %>:
            </b>
            </div>
        <div><%- text %></div>
      </div>

    `)

  // renderMessage: function (message) {
  //   //if no user then msgs we should skip this object
  //   //also we should be clearing the whole page before loading in the new things
  //   var compiled = this.render;

  //   if (message[username] === undefined) {
  //     return;


  //   var $message = $(compiled(message));
  //   $message.appendTo(MessagesView.$chats);
  // }

};


