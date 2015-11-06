/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

    // Place your code here.
    
    $('#block-views-bele-latest-news-block ul.article-list li.views-row-4.article-block').after('<li id="ad-destination"></li>');

    $('#content .view-id-bele_latest_news ul.article-list li.views-row-4.article-block').after('<li id="ad-destination"></li>');

    $('#content .view-id-bele_public ul.article-list li.views-row-4.article-block').after('<li id="ad-destination"></li>');

    $('#content .bele-row-area ul.bele-row-list li.views-row-3.bele-row').after('<li id="ad-destination"></li>');

    $('#content .people-area ul.people-list li.views-row-6.people-list-row').after('<li id="ad-destination"></li>');

    $('#content .board-area ul.board-list li.views-row-2.board-block').after('<li id="ad-destination"></li>');

    $('#content .people-area ul.people-list li.views-row-6.class-row-block').after('<li id="ad-destination"></li>');

    $('#block-views-ad-banner-block').appendTo('#ad-destination');

    $('#content .sharethis-buttons .sharethis-wrapper .st_googleplus_large').after('<span id="extra-social" style="display:inline-block"></span>');
    $('.field-name-extra-share .field-items .field-item.even').appendTo('#extra-social');
  }
};


})(jQuery, Drupal, this, this.document);
