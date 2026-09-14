$(document).ready(function() {

  // Variables
  var $codeSnippets = $('.code-example-body'),
      $nav = $('.navbar'),
      $body = $('body'),
      $window = $(window),
      $popoverLink = $('[data-popover]'),
      navOffsetTop = $nav.offset().top,
      $document = $(document),
      entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
      }

  function init() {
    $window.on('scroll', onScroll)
    $window.on('resize', resize)
    $popoverLink.on('click', openPopover)
    $document.on('click', closePopover)
    $('a[href^="#"]').on('click', smoothScroll)
    buildSnippets();
    initToggles();
    initBlogFilter();
  }

  function initToggles() {
    // Generic text/section toggles: [data-toggle="#id"] shows/hides #id and flips its own label.
    $('.text-toggle').on('click', function() {
      var $btn = $(this);
      var target = $($btn.data('toggle'));
      var isOpen = target.toggleClass('open').hasClass('open');
      $btn.text(isOpen ? 'Full bio \u2191' : 'Full bio \u2193');
    });

    // Research item expanders.
    $('.research-toggle').on('click', function() {
      var $btn = $(this);
      var target = $($btn.data('toggle'));
      var isOpen = target.toggleClass('open').hasClass('open');
      $btn.attr('aria-expanded', isOpen);
    });
  }

  function initBlogFilter() {
    var $chips = $('.chip-filter .chip'),
        $cards = $('.post-list .post-card[data-categories]');

    if ($chips.length === 0) { return; }

    $chips.on('click', function() {
      var $chip = $(this),
          filter = $chip.data('filter');

      $chips.removeClass('active');
      $chip.addClass('active');

      $cards.each(function() {
        var $card = $(this),
            cats = ' ' + ($card.data('categories') || '') + ' ';
        if (filter === 'all' || cats.indexOf(' ' + filter + ' ') !== -1) {
          $card.removeClass('hidden');
        } else {
          $card.addClass('hidden');
        }
      });
    });
  }

  function smoothScroll(e) {
    e.preventDefault();
    $(document).off("scroll");
    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top-40
    }, 0, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
  }

  function openPopover(e) {
    e.preventDefault()
    closePopover();
    var popover = $($(this).data('popover'));
    popover.toggleClass('open')
    e.stopImmediatePropagation();
  }

  function closePopover(e) {
    if($('.popover.open').length > 0) {
      $('.popover').removeClass('open')
    }
  }

  $("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#elementtoScrollToID").offset().top
    }, 2000);
});

  function resize() {
    $body.removeClass('has-docked-nav')
    navOffsetTop = $nav.offset().top
    onScroll()
  }

  function onScroll() {
    if(navOffsetTop < $window.scrollTop() && !$body.hasClass('has-docked-nav')) {
      $body.addClass('has-docked-nav')
    }
    if(navOffsetTop > $window.scrollTop() && $body.hasClass('has-docked-nav')) {
      $body.removeClass('has-docked-nav')
    }
  }

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  function buildSnippets() {
    $codeSnippets.each(function() {
      var newContent = escapeHtml($(this).html())
      $(this).html(newContent)
    })
  }


  init();

});