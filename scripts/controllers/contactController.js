(function(module) {
  var contactController = {};
  contactController.index = function() {
    $('section').hide();
    $('#contact').fadeIn('fast');
  };
  module.contactController = contactController;
})(window);
