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
    $('#project-detail').children().hide(); //hides other projects
    $('#' + ctx.params.projectname).show(); // shows only the project selected
  };
  module.projectsController = projectsController;
})(window);
