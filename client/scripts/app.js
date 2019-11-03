var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  start: false,

  initialize: function () {
    App.username = window.location.search.substr(10);


    if (!App.start) {
      FormView.initialize();
      RoomsView.initialize();
      MessagesView.initialize();
      App.start = true;
      Friends.initialize();
      RoomsView.render(); //populates with lobbies, but downside right now is that is does not keep up with refreshing messages. unless i load the page
    }

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    MessagesView.render();

    //there are two functions that run upon a click, this sends the username info to toggle and runs toggle...a
    $(document).ready(function () {
      var $name = $('.username');
      $name.click(function () {
        //store the name that was clicked
        var name = $(this).text();
        name = name.slice(0, name.length - 1);
        //then send it over to friends.togglestatus(nanme)
        Friends.toggleStatus(name);
      });
      // I think this doesn't work continuosly because we keep reinitializing, which we do to keep up with the dynamic content that keeps feeding in, otherwise the new content would not be able to get this click feature. and since we keep reinitializing this, and the server is slow, when the callstack is big, this functionlity is temporarily unavailable. to fix this there is event delegation which is a jquery concept that lets you put this event listener on a parent and then everything that comes through the parent, all the children will get its properties...like this click functionali
    });

  },

  fetch: function (callback = () => { }) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data); // del later
      callback();
    });
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
