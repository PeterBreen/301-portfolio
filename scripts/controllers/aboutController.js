(function(module) {
  var aboutController = {};
  aboutController.index = function() {
    $('section').hide();
    $('#about').show();
  };
  module.aboutController = aboutController;
})(window);
