var MessageView = {

  render: _.template(`

      <div class="chat">
        <div class="username" id='<%- username %>'<b><%- username %>:</b></div>
        <div><%- text %></div>
      </div>

    `)

};


