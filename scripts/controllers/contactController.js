(function(module) {
  var contactController = {};
  contactController.index = function() {
    $('section').hide();
    $('#contact').show();
  };
  module.contactController = contactController;
})(window);
