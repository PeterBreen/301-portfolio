(function(module) {
  var projectsController = {};
  projectsController.index = function() {
    Project.fetchAll();
    $('article').remove();
    $('section').hide();
    $('#projects').show();
  };
  projectsController.detail = function(projectUrl) {
    Project.fetchAll();
    $('article').remove();
    $('section').hide();
    $('#projects').hide();
    $('#' + projectUrl).show();
  };
  module.projectsController = projectsController;
})(window);
