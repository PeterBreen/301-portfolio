(function(module) {
  var projectsController = {};
  projectsController.index = function() {
    Project.fetchAll();
    $('section').hide();
    $('#projects').fadeIn('fast');
  };
  module.projectsController = projectsController;
})(window);
