(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/' + gituser + '/repos' + '?sort=updated',
      type: 'GET', headers: {'Authorization': 'token ' + gittoken},
      success: function(data, message, xhr) {
        repos.all = data;
        callback();
      }
    });
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
