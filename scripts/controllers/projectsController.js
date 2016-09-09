(function(module) {
  var projectsController = {};
  projectsController.index = function() {
    Project.fetchAll();
    $('article').remove();
    $('section').hide();
    $('#projects').show();
  };
  // projectsController.detail = function(ctx) {
  //   $('article').remove();
  //   $('section').hide();
  //   $('#projects').hide(); // do not use .empty unless you rebuild the category selector every time
  //   show appropriate project here - only if this route is even required!
  // };
  module.projectsController = projectsController;
})(window);
