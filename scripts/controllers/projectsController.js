(function(module) {
  var projectsController = {};
  projectsController.index = function() {
    Project.fetchAll();
    $('article').remove();
    $('section').hide();
    $('#projects').show();
  };
  projectsController.detail = function(ctx) {
    $('article').remove();
    $('section').hide();
    $('#' + ctx.params.projectUrl).show();
  };
  module.projectsController = projectsController;
})(window);
