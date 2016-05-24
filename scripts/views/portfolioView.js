(function(module) {
  var portfolioView = {};

  portfolioView.populateCatFilter = function() {
    $('article').each(function() {
      var catval = $(this).attr('data-category');
      catOption = '<option value="' + catval + '">' + catval + '</option>';
      if ($('#category-filter option[value="' + catval + '"]').length === 0) {
        $('#category-filter').append(catOption);
      }
    });
  };

  portfolioView.handleCatFilter = function () {
    $('#category-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('[data-category="' + $(this).val() + '"]').fadeIn('fast');
      } else {
        $('article').show();
        $('.template').hide();
      }
    });
  };
  // uncomment this and the function call below to enable "read more" functionality

  // portfolioView.setTeasers = function() {
  //   $('.article-body *:nth-of-type(n+2)').hide();
  //   $('#articles').on('click', 'a.read-on', function(e) {
  //     e.preventDefault();
  //     $(this).parent().find('*').fadeIn();
  //     $(this).hide();
  //   });
  // };

  portfolioView.initIndexPage = function() {
    Project.all.forEach(function(a){
      //rick said I can keep this as a forEach because it involves the DOM
      if($('#category-filter option:contains("'+ a.category + '")').length === 0) {
        $('#category-filter').append(a.toHtml($('#category-filter-template')));
      };
      if($('#author-filter option:contains("'+ a.author + '")').length === 0) {
        $('#author-filter').append(a.toHtml($('#author-filter-template')));
      };
      $('#projects').append(a.toHtml($('#project-render')));
    });
    // $('#home .words').text(Project.numWordsAll());
    portfolioView.populateCatFilter();
    portfolioView.handleCatFilter();
    //uncomment this and setTeasers above to enable "read more" functionality
    // portfolioView.setTeasers();
  };
  module.portfolioView = portfolioView;
})(window);
