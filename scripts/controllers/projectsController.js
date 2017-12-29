(function(module) {
  var projectsController = {};
  projectsController.retrieveData = function(ctx, next) {
    Project.fetchAll();
    next();
  };
  projectsController.index = function() {
    $('article').remove();
    $('section').hide();
    $('#projects').show();
  };
  projectsController.detail = function(ctx) {
    $('article').remove();
    $('section').hide();
    $('#project-detail').show();
  };
  module.projectsController = projectsController;
})(window);
