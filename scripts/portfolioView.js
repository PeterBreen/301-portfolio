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

portfolioView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-author="' + $(this).val() + '"]').fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

portfolioView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('#articles').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};

portfolioView.handleNav = function() {
  $('.nav-menu').on('click', '.tab', function(event) {
    event.preventDefault();
    $('.nav-menu li').removeClass('active');
    $('.tab-content').hide();
    $('[id="' + $(this).attr('data-content') + '"]').show();
    $(this).toggleClass('active');
  });
  //default load = first tab, home tab content
  $('.nav-menu .tab:first').click();
};

portfolioView.initIndexPage = function() {
  Project.all.forEach(function(a){
    if($('#category-filter option:contains("'+ a.category + '")').length === 0) {
      $('#category-filter').append(a.toHtml($('#category-filter-template')));
    };
    if($('#author-filter option:contains("'+ a.author + '")').length === 0) {
      $('#author-filter').append(a.toHtml($('#author-filter-template')));
    };
    $('#projects').append(a.toHtml($('#project-render')));

  });
  portfolioView.populateCatFilter();
  portfolioView.handleCatFilter();
  portfolioView.handleAuthorFilter();
  portfolioView.setTeasers();
  portfolioView.handleNav();
};
