(function(module) {
  var homeController = {};
  homeController.index = function() {
    $('section').hide();
    $('#home').fadeIn('fast');
  };
  module.homeController = homeController;
})(window);
