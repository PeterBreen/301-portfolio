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

  portfolioView.selectPage = function() {
  //every time this function is invoked, JSON data is loaded
    if (true === true) {
      portfolioView.initIndexPage();
    } else {
      portfolioView.initDetailPage(ctx);
    }
  };

  portfolioView.initIndexPage = function() {
    Project.all.forEach(function(a){
      if($('#category-filter option:contains("'+ a.category + '")').length === 0) {
        $('#category-filter').append(a.toHtml($('#category-filter-template')));
      };
      $('#projects').append(a.toHtml($('#project-render')));
    });
    portfolioView.populateCatFilter();
    portfolioView.handleCatFilter();
  };

  portfolioView.initDetailPage = function() {
    console.log('initDetailPage function executed');
  };
  module.portfolioView = portfolioView;
})(window);
