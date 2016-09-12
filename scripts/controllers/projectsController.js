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
    $('#projects').hide(); // do not use .empty unless you rebuild the category selector every time
    console.log('projectsController.detail route has completed');
  };

  projectsController.setProject = function(ctx, next) {
    var projectName = ctx.params.projectname;
    next();
  };
  module.projectsController = projectsController;
})(window);
