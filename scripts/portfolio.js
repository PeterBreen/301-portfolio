var portfolioProjects = [];

function Project (opts) {
  this.title = opts.title;
  this.category = opts.category;
  this.projectUrl = opts.projectUrl;
  this.publishedOn = opts.publishedOn;
  this.featureImage = opts.featureImage;
  this.body = opts.body;
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
