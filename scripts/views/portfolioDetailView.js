(function(module) {
  var portfolioDetailView = {};


  //helper function to handle variable-length lists of links, from Handlebars documentation
  Handlebars.registerHelper('list', function(ctx, opts) {
    var ret = '<ul>';
    for(var i=0, j=ctx.length; i<j; i++) {
      ret = ret + '<li>' + opts.fn(ctx[i]) + '</li>';
    }
    return ret + '</ul>';
  });
  module.portfolioDetailView = portfolioDetailView;
})(window);
