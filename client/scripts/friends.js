var Friends = {

  //this needs to have a toggle status feature, that turns on if click function happens somewhere...
  //but then how will it distinguish between friends? maybe store peoples names and friend status in an object???

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

    // if (this.storage[name]) {
    //   return true;
    // } else {
    //   return false;
    // }
  },



};