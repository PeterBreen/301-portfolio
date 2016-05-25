(function(module) {
  var homeController = {};
  homeController.index = function() {
    $('#github-stats').empty();
    repos.requestRepos(repoView.index);
    $('section').hide();
    $('#home').show();
  };
  module.homeController = homeController;
})(window);
