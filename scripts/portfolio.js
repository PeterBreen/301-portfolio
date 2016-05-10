var portfolioArticles = [];

function Article (opts) {
  // TODO: Use the js object passed in to complete this contructor function:
  // Save ALL the properties of `opts` into `this`.
  this.title = opts.title;
  this.category = opts.category;
  this.projectUrl = opts.projectUrl;
  this.publishedOn = opts.publishedOn;
  this.featureImage = opts.featureImage;
  this.body = opts.body;
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();

  $newArticle.attr('data-category', this.category);
  $newArticle.attr('href', this.projectUrl);
  $newArticle.find('a').text(this.author);
  $newArticle.find('.article-body').html(this.body);
  $newArticle.find('header h1').text(this.title);
  // This is a separate inclusion of the publication date as a 'title' attribute
  // to show on hover:
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
  // Display the date as a relative number of "days ago":
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

  // replace <hr>
  $newArticle.append('<div class="linebreak"></div>');

  // TODO: This cloned article is no longer a template, so we should remove that class...
  $newArticle.removeClass('template');
  return $newArticle;
};

// Sort our data by date published, descending order
ourLocalData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

// Now iterate through our transformed collection and instantiate a new Article
//  instance.
portfolioArticles.forEach(function(ele) {
  portfolioArticles.push(new Article(ele));
});

// Append each Article to the DOM. Look carefully:
//   This '.toHtml' method is one we created.
portfolioArticles.forEach(function(a){
  $('#projects').append(a.toHtml());
});
