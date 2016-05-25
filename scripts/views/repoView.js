(function(module) {
  var repoView = {};
  repoView.index = function() {
    //function takes ajax call from github and determines how many are unforked - array.length to determine number of unforked repos, lineCount to determine linecount of all unforked repos
    unforked = repos.unforked(repos.all);
    numrepos = unforked.length;
    codelines = repos.lineCount(unforked);
    gitstats = '<p>Interested in some <a href=\"http://www.github.com/PeterBreen\">Github</a> stats? I have <strong>' + numrepos + '</strong> non-forked repos containing <strong>' + codelines + '</strong> lines of code!</p>';
    $('#github-stats').append(gitstats);
  };
  module.repoView = repoView;
})(window);
