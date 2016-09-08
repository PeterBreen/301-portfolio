(function(module) {
  var projectsController = {};
  projectsController.index = function() {
    Project.fetchAll();
    $('article .portfolio-items').remove();
    $('section').hide();
    $('#projects').show();
  };
  projectsController.detail = function(ctx) {
    $('article .portfolio-items').remove();
    $('section').hide();
    $('#projects-detail').show();
    $('#' + ctx.params.projectUrl).show();
  };
  module.projectsController = projectsController;
})(window);
