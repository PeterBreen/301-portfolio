var portfolioView = {};

portfolioView.populateCatFilter = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var catval = $(this).attr('data-category');
      catOption = '<option value="' + catval + '">' + catval + '</option>';
      if ($('#category-filter option[value="' + catval + '"]').length === 0) {
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

portfolioView.handleNav = function() {
  $('.nav-menu').on('click', '.tab', function(event) {
    event.preventDefault();
    $('.tab-content').hide();
    $('[id="' + $(this).attr('data-content') + '"]').show();
    $(this).toggleClass('active');
  });
  //default load = first tab, home tab content
  $('.nav-menu .tab:first').click();
};


/* must be at EOF */
$(document).ready(function(){
  portfolioView.populateCatFilter();
  portfolioView.handleCatFilter();
  portfolioView.handleNav();
});
