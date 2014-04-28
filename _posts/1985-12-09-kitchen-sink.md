--- 
title: Kitchen sink
layout: post
hidden: true
---

Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, [test text](http://bbc.co.uk) exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendreri

## Sub-heading ##

Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendreri.

Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendreri

### Third heading ###

{% include article-image.html src="http://placekitten.com/800/600" caption="My cat, Robert Downey Jr." %}

Adipiscing elit, sed diam nonummy nibh euismod tincidunt ut lao quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendreri reet dolore magna aliquam erat volutpat. Ut wisi enim ad. Consectetuer adipiscing el.

#### Fourth heading a little bit longer ####

* Enim ad. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad mini
* Ation ullamcorper suscipit lobortis nisl ut aliqui
  * sum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, qui.
  * quis nostrud exerci tation ullamcorper suscipit lobortis
* Tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut

1. Enim ad. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad mini
2. Ation ullamcorper suscipit lobortis nisl ut aliqui
3. Tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut

{% highlight javascript %}

/* global $ */

$(function () {
    'use strict';

    function applySlidey(elements, options) {

        options = options || {};
        var parentSelector = options.parentSelector;

        elements.each(function (index, element) {
            clone.css({
                '-webkit-transform': 'translate3d(0, ' + -elementHeight + 'px, 0)',
                '-webkit-transition': 'all 0.2s ease-out'
            });

            slides.css({
                '-webkit-transition': 'all 0.2s ease-out'
            });

            function showActive () {
                clone.css({
                    '-webkit-transform': 'translate3d(0, 0, 0)'
                });

                activeSlide.css({
                    '-webkit-transform': 'translate3d(0, 0, 0)'
                });
            }

            function hideActive () {
                activeSlide.css({
                    '-webkit-transform': 'translate3d(0, ' + elementHeight + 'px, 0)'
                });

                clone.css({
                    '-webkit-transform': 'translate3d(0, ' + -elementHeight + 'px, 0)',
                });
            }

        });
    }

    $(window).on('load', function () {
        applySlidey($('.post-date'), {
            parentSelector: function (element) {
                return element.parents('.post-list-link').find('a');
            }
        });
    });
    
});

{% endhighlight %}

Aoreet dolore magna aliquam erat volutpat. Ut wisi enim ad. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.

<blockquote>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis </blockquote>

Aoreet dolore magna aliquam erat volutpat. Ut wisi enim ad. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
