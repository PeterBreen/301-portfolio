var portfolioProjects = [];

function Project (opts) {
  for (keys in opts) {
    this[keys] = opts[keys];
  }
}

Project.prototype.toHtml = function() {
  var $source = $('#project-render').html();
  var compiledProject = Handlebars.compile($source);
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? + this.daysAgo + ' days ago' : '(draft)';
  return compiledProject(this);
};

// Sort our data by date published, descending order
portfolioProjects.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

myProjects.forEach(function(ele) {
  portfolioProjects.push(new Project(ele));
});
portfolioProjects.forEach(function(a){
  $('#projects').append(a.toHtml());
});
