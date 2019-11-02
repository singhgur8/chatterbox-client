var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
  },

  renderRoom: function(room) {
    var str = '<span>' + JSON.stringify(room) + '</span>';
    var $message = $(str);
    $message.appendTo(RoomsView.$select);
  }

};
