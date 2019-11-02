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
    }

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    MessagesView.render();
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
