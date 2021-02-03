/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  function init(i, tab) {
    var $tab = $(tab);
    var $target = $tab.find('[data-drupal-nav-tabs-target]');

    var openMenu = function openMenu() {
      $target.toggleClass('is-open');
      var $toggle = $target.find('.tab-toggle');
      $toggle.attr('aria-expanded', function (_, isExpanded) {
        return !(isExpanded === 'true');
      });
    };

    $tab.on('click.tabs', '[data-drupal-nav-tabs-toggle]', openMenu);
  }

  Drupal.behaviors.navTabs = {
    attach: function attach(context) {
      $(context).find('[data-drupal-nav-tabs].is-collapsible').once('nav-tabs').each(function (i, value) {
        $(value).each(init);
      });
    }
  };
})(jQuery, Drupal);;
