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
  //select appropriate page here (context function)
    if (window.location.pathname === '/projects') {
      portfolioView.initIndexPage();
    } else {
      portfolioView.initDetailPage();
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
    Project.all.forEach(function(a){
      $('#project-detail').append(a.toHtml($('#project-render-detail')));
    });
  };
  module.portfolioView = portfolioView;
})(window);
