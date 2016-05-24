(function(module) {
  var projectsController = {};
  projectsController.index = function() {
    $('section').hide();
    $('#projects').fadeIn('fast');
  };
  module.projectsController = projectsController;
})(window);
