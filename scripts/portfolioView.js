var portfolioView = {};

portfolioView.populateCatFilter = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var catval = $(this).attr(data-category);
      catOption = '<option value="' + catval + '">' + catval + '</option>';
      if ($('#category-filter option[value="' + catval + '"]')) {
        $('#category-filter').append(catOption);
      }
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
