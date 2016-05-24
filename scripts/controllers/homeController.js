(function(module) {
  var homeController = {};
  homeController.index = function() {
    $('section').hide();
    $('#home').show();
  };
  module.homeController = homeController;
})(window);
