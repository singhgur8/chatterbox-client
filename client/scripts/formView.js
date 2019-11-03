var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();


    //grab the DOM element value and then and then clear the DOM element too
    //do the create method
    var msg = $('#message').val();

    var room = $('.select option:selected').val();

    // create an object
    var message = {
      username: App.username,
      text: msg,
      roomname: room
    };

    Parse.create(message);
    console.log('click!');
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};