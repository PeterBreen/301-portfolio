(function(module) {
  var repos = {};

  repos.all = [];
  repos.requestRepos = function(callback) {
    $.get('/github/users/PeterBreen/repos')
      .done(function(data){
        repos.all = data;
      }).done(callback);
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  repos.unforked = function() {
    return repos.all.filter(function(repo) {
      return (repo.fork === false);
    });
  };

  repos.lineCount = function(arr) {
    return arr.map(function(repo) {
      return repo.size;
    })
    .reduce(function(a, b) {
      return a + b;
    });
  };

  module.repos = repos;
})(window);
