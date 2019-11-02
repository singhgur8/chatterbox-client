var Friends = {

  //this needs to have a toggle status feature, that turns on if click function happens somewhere...
  //but then how will it distinguish between friends? maybe store peoples names and friend status in an object???

  storage: {},
  $name: $('.name'),
  initialize: function () {
    Friends.$name.click(Friends.toggleStatus);
  },

  toggleStatus: function (name) {
    $($name).click(function (event) {
      var text = $(event.target).text();
    });

    //if someones name is clicked then store, so I would have to know the name from the clikc, but how i retrieve the name without the click
    //


  },



};