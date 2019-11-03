var Friends = {

  $name: $('.name'),

  initialize: function () {
    Friends.$name.click(Friends.toggleStatus);
  },

  toggleStatus: function (name) {
    //if someones name is clicked then store, so I would have to know the name from the clikc, but how i retrieve the name without the click
    //

    if (!Friends[name]) {
      Friends[name] = true;
    } else {
      if (Friends[name] === true) {
        Friends[name] = false;
      } else {
        Friends[name] = true;
      }
    }
    console.log(Friends);

    //have this function also rerender the chats section...
    //since new freinds were added to the chat
    MessageView.render();


  },
  //the below render is what you want to use if the person is a friend;

  render: _.template(`
  <div class="chat">
    <div class="username friends" id='<%- username %>'<b><%- username %>:</b></div>
    <div><%- text %></div>
  </div>

`)



};