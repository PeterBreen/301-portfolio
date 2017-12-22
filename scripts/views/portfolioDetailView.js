//Helper function for variable-length lists, used in details page
Handlebars.registerHelper('list', function(context) {
  var ret = '<ul>';
  for(var i=0, j=context.length; i<j; i++) {
    ret = ret + '<li>' + context[i] + '</li>';
  }
  return ret + '</ul>';
});
