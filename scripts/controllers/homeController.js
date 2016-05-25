(function(module) {
  var homeController = {};
  homeController.index = function() {
    repos.requestRepos(repoView.index);
    $('section').hide();
    $('#home').show();
  };
  module.homeController = homeController;
})(window);
