(function(module) {
  var repoView = {};

  var render = Handlebars.compile($('#github-stats').text());

  repoView.index = function() {
    //get all repos, filter for fork: false;
    //take this new array, array.length +1 for {{numrepos}} and reduce size:  to {{codelines}}

    $('#github-stats').append(
      repos.with('name').map(render)
    );
    /* NOTE: This jQuery `append` method lets us append an entire array
        of HTML elements at once, so we can use a little FP to
        transform our data-set into DOM nodes. "repos.with"
        is a method we wrote in the repos model. */
  };

  module.repoView = repoView;
})(window);
