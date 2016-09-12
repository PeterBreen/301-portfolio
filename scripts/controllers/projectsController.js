(function(module) {
  var projectsController = {};
  projectsController.index = function() {
    Project.fetchAll();
    $('article').remove();
    $('section').hide();
    $('#projects').show();
  };
  projectsController.detail = function(ctx) {
    Project.fetchAll(); //function call which needs to generate project HTML via Handlebars
    $('article').remove();
    $('section').hide();
    $('#project-detail').show();
    $('#project-detail').children().hide(); //hides other projects
    $('#' + ctx.params.projectname).show(); // shows only the project selected
  };
  module.projectsController = projectsController;
})(window);
