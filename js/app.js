/* global $ */

$(function () {
    'use strict';

    var touchX;
    var touchY;

    $('body').on('touchstart', 'a', function (e) {
        touchX = e.originalEvent.touches[0].pageX;
        touchY = e.originalEvent.touches[0].pageY;
    });

    $('body').on('touchend', 'a', function (e) {
        var currentX = e.originalEvent.changedTouches[0].pageX;
        var currentY = e.originalEvent.changedTouches[0].pageY;

        var distance = ((currentX - touchX) * (currentX - touchX)) + ((currentY - touchY) * (currentY - touchY));

        if (distance < 100 && $(this).attr('target') !== '_blank') {
            e.preventDefault();
            window.location.href = $(this).attr('href');
        }
    });

    function applyCrossBrowser(target, source) {
        var prefixes = [
            '-webkit-',
            '-moz-',
            '-ms-',
            '-o-'
        ];

        _.each(prefixes, function (prefix) {
            _.each(source, function (value, key) {
                target[prefix + key] = value;
            });
        });

        return target;

    }

    function applySlidey(elements, options) {

        options = options || {};
        var parentSelector = options.parentSelector;

        elements.each(function (index, element) {
            element = $(element);
            element.wrap('<div class="wrapper" />');
            var clone = element.clone();

            var parent = element.parent();
            var childFloat = element.css('float');
            parent.css({
                overflow: 'hidden',
                float: childFloat
            });

            var elementHeight = parent.height();

            clone.insertBefore(element).addClass('active');
            clone.width(element.width());

            var both = parent.children();
            both.wrap('<div class="slide"/>');

            var slides = parent.find('.slide');
            slides.css({
                overflow: 'hidden'
            });

            var activeSlide = slides.eq(0);
            var passiveSlide = slides.eq(1);
            activeSlide.css(applyCrossBrowser({
                position: 'absolute',
                'pointer-events': 'none'
            }, {
                'transform': 'translate3d(0, ' + elementHeight + 'px, 0)'
            }));

            clone.css(applyCrossBrowser({}, {
                'transform': 'translate3d(0, ' + -elementHeight + 'px, 0)',
                'transition': 'all 0.1s ease-out'
            }));

            element.css(applyCrossBrowser({}, {
                'transition': 'all 0.1s ease-out'
            }));

            slides.css(applyCrossBrowser({}, {
                'transition': 'all 0.1s ease-out'
            }));

            function showActive () {
                clone.css(applyCrossBrowser({}, {
                    'transform': 'translate3d(0, 0, 0)'
                }));

                activeSlide.css(applyCrossBrowser({}, {
                    'transform': 'translate3d(0, 0, 0)'
                }));

                element.css(applyCrossBrowser({}, {
                   'transform': 'translate3d(0, ' + elementHeight + 'px, 0)'
                }));

                passiveSlide.css(applyCrossBrowser({}, {
                   'transform': 'translate3d(0, ' + -elementHeight + 'px, 0)'
                }));
            }

            function hideActive () {
                activeSlide.css(applyCrossBrowser({}, {
                    'transform': 'translate3d(0, ' + elementHeight + 'px, 0)'
                }));

                clone.css(applyCrossBrowser({}, {
                    'transform': 'translate3d(0, ' + -elementHeight + 'px, 0)',
                }));

                element.css(applyCrossBrowser({}, {
                   'transform': 'translate3d(0, 0, 0)'
                }));

                passiveSlide.css(applyCrossBrowser({}, {
                   'transform': 'translate3d(0, 0, 0)'
                }));
            }

            parent
                .on('mouseover mousemove', showActive)
                .on('mouseout', hideActive);

            if (parentSelector) {
                var parents;
                if (typeof parentSelector === 'string') {
                    parents = parent.parents(parentSelector);
                } else if (typeof parentSelector === 'function') {
                    parents = parentSelector(parent);
                }

                parents.on('mouseover mousemove', showActive)
                    .on('mouseout', hideActive);
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