var MessageView = {

  render: _.template(`

      <div class="chat">
        <div class="username"><b><%- username %>:</b></div>
        <div><%- text %></div>
      </div>

    `)

};


