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
      if($('#category-filter option:contains("'+ a.category + '")').length === 0) {
        $('#category-filter').append(a.toHtml($('#category-filter-template')));
      };
      $('#projects').append(a.toHtml($('#project-render')));
      // $('#projects').append(a.toHtml($('#project-render-detail')));
    });
    portfolioView.populateCatFilter();
    portfolioView.handleCatFilter();
    //uncomment this and setTeasers above to enable "read more" functionality
    // portfolioView.setTeasers();
  };
  module.portfolioView = portfolioView;
})(window);
