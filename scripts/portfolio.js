function Project (opts) {
  for (keys in opts) {
    this[keys] = opts[keys];
  }
}
//Attach to the constructor, not global
Project.all = [];

Project.prototype.toHtml = function(templateId) {
  var template = Handlebars.compile((templateId).html());
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? + this.daysAgo + ' days ago' : '(draft)';
  return template(this);
};

// Sort our data by date published, descending order
Project.loadAll = function(passedData) {
  passedData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });
//   passedData.forEach(function(ele) {
//     Project.all.push(new Project(ele));
//   });
// };
  Project.all = passedData.map(function(ele) {
    return new Project(ele);
  });
};

//reusable function to render from JSON and set localStorage for next loadAll
var renderFromJSON = function() {
  $.getJSON('data/portfolioData.json', function(data) {
    Project.loadAll(data);
    localStorage.portfolioData = JSON.stringify(data);
    portfolioView.initIndexPage();
    $.ajax({
      type: 'HEAD',
      url: 'data/portfolioData.json',
      success: function (data, message, xhr) {
        var eTag = xhr.getResponseHeader('eTag');
        localStorage.eTag = JSON.stringify(eTag);
      }
    });
  });
};
//localstorage or JSON data source control
Project.fetchAll = function() {
  if (localStorage.portfolioData) {
    $.ajax({
      type: 'HEAD',
      url: 'data/portfolioData.json',
      success: function (data, message, xhr) {
        var currentTag = xhr.getResponseHeader('eTag');
        if (currentTag === JSON.parse(localStorage.eTag)) {
          parsedLocal = JSON.parse(localStorage.portfolioData);
          Project.loadAll(parsedLocal);
          portfolioView.initIndexPage();
        } else {
          renderFromJSON();
        }
      }
    });
  } else {
    renderFromJSON();
  }
};
