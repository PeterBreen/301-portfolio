(function(module) {
  var blogController = {};
  blogController.index = function() {
    $('section').hide();
    $('#blog').show();
  };
  module.blogController = blogController;
})(window);
