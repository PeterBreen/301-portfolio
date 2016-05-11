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
  var $newProject = $('article.template').clone();
  $newProject.attr('data-category', this.category);
  $newProject.find('a').attr('href', this.projectUrl);
  $newProject.find('.article-body').html(this.body);
  $newProject.find('header h3').text(this.title);
  // Feature Image not implemented until images actually exist!
  // $newProject.find('.featureImg').html(this.featureImage);
  $newProject.find('time[pubdate]').attr('title', this.publishedOn);
  // Display the date as a relative number of "days ago":
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newProject.append('<div class="linebreak"></div>');
  $newProject.removeClass('template');
  return $newProject;
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
