(function(module) {
  var projectsController = {};
  projectsController.index = function() {
    Project.fetchAll();
    $('section').hide();
    $('#projects').show();
  };
  module.projectsController = projectsController;
})(window);
