(function(module) {
  var projectsController = {};
  projectsController.index = function() {
    Project.fetchAll();
    $('article').remove();
    $('section').hide();
    $('#projects').show();
  };
  projectsController.detail = function(projectUrl) {
    $('article').remove();
    $('section').hide();
    $('#projects-detail').show();
    $('#' + projectUrl).show();
  };
  module.projectsController = projectsController;
})(window);
