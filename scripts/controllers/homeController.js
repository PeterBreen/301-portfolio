(function(module) {
  var homeController = {};
  homeController.index = function() {
    $('section').hide();
    $('#home').fadeIn('slow');
  };
  module.homeController = homeController;
})(window);
