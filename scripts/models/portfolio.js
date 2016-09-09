(function(module) {
  function Project (opts) {
    for (keys in opts) {
      this[keys] = opts[keys];
    }
  }
  //Attached to the constructor, not global namespace
  Project.all = [];

  Project.prototype.toHtml = function(templateId) {
    var template = Handlebars.compile((templateId).html());
    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishStatus = this.publishedOn ? + this.daysAgo + ' days ago' : '(draft)';
    return template(this);
  };

  // Sort data by date published, descending order
  Project.loadAll = function(passedData) {
    passedData.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });

    Project.all = passedData.map(function(ele) {
      return new Project(ele);
    });
  };

  // render portfolio from JSON and set localStorage for a faster subsequent loadAll
  var renderFromJSON = function() {
    $.getJSON({
      type: 'GET',
      url: 'data/portfolioData.json',
      success: function (data, message, xhr) {
        var eTag = xhr.getResponseHeader('eTag');
        localStorage.eTag = eTag;
        Project.loadAll(data);
        localStorage.portfolioData = JSON.stringify(data);
        //data is correctly loaded here, route to appropriate result
        portfolioView.initIndexPage();
      }
    });
  };
  //check for loading from localstorage or JSON
  Project.fetchAll = function() {
    $.ajax({
      type: 'HEAD',
      url: 'data/portfolioData.json',
      success: function (data, message, xhr) {
        var currentTag = xhr.getResponseHeader('eTag');
        if (currentTag === localStorage.eTag && localStorage.portfolioData) {
          parsedLocal = JSON.parse(localStorage.portfolioData);
          Project.loadAll(parsedLocal);
          //data is loaded here, route to appropriate result
          portfolioView.initIndexPage();
        } else {
          renderFromJSON();
        }
      }
    });
  };

  // Project.numWordsAll = function() {
  //   return Project.all.map(function(project) {
  //     return project.body.match(/\b\w+/g).length;
  //   })
  //   .reduce(function(a, b) {
  //     return a + b;
  //   });
  // };
  module.Project = Project;
})(window);
