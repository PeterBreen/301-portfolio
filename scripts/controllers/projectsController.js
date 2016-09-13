(function(module) {
  var projectsController = {};
  projectsController.index = function() {
    Project.fetchAll();
    $('article').remove();
    $('section').hide();
    $('#projects').show();
  };
  projectsController.detail = function(ctx) {
    Project.fetchAll(); // #40 - the initDetailPage function needs to complete and render in its entirety to DOM before moving on in the route chain
    $('article').remove();
    $('section').hide();
    $('#project-detail').show();
    $('#project-detail').children().hide(); //hides other projects
    $('#' + ctx.params.projectname).show(); // shows only the project selected
  };
  module.projectsController = projectsController;
})(window);
