(function(jQuery) {
    try {
        var $module = jQuery('#m-1617307188802').children('.module');
        var single = $module.attr('data-single');
        var openDefault = $module.attr('data-openDefault');
        var openTab = $module.attr('data-openTab');
        var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

        if (openDefault == 0 || openDefault == '0') {
            openTab = '0';
        }

        $module.gfAccordion({
            single: single,
            openTab: openTab,
            mode: mode,
            onChanged: function() {
                // Fix (P) Desc read more bug	
                $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {
                    if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {
                        jQuery(el).children(".module").data("gfv3productdesc").initReadMore();
                    }
                })
            }
        });

        var borderColor = $module.attr('data-borderColor');
        var borderSize = $module.attr('data-borderSize');

        $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
        $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
    } catch (err) {}
})(window.GemQuery || jQuery);















(function(jQuery) {
    try {
        var $module = jQuery('#m-1617307033732').children('.module');
        var single = $module.attr('data-single');
        var openDefault = $module.attr('data-openDefault');
        var openTab = $module.attr('data-openTab');
        var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

        if (openDefault == 0 || openDefault == '0') {
            openTab = '0';
        }

        $module.gfAccordion({
            single: single,
            openTab: openTab,
            mode: mode,
            onChanged: function() {
                // Fix (P) Desc read more bug	
                $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {
                    if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {
                        jQuery(el).children(".module").data("gfv3productdesc").initReadMore();
                    }
                })
            }
        });

        var borderColor = $module.attr('data-borderColor');
        var borderSize = $module.attr('data-borderSize');

        $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
        $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
    } catch (err) {}
})(window.GemQuery || jQuery);




































(function(jQuery) {
    var $hero = jQuery('#m-1613172261182');
    var $module = jQuery('#m-1613172261182').children('.module');

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    var $heroLink = $hero.children('.hero-link');
    if (mode == 'dev' && $heroLink.length > 0) {
        $hero.children('.hero-link').hide();
    }
    if (mode == 'production' && $heroLink.length > 0) {
        $module.off('click.openLink').on('click.openLink', function(e) {
            var $target = jQuery(e.target);
            if ($target.length > 0) {
                var linkTarget = typeof $target.attr('href') !== "undefined" ? $target.attr('href') : "";
                if (linkTarget == "") {
                    var link = typeof $heroLink.attr('href') !== "undefined" ? $heroLink.attr('href') : "";
                    var newTab = typeof $heroLink.attr('target') !== "undefined" ? $heroLink.attr('target') : "";
                    if (link != "") {
                        if (newTab == "") {
                            window.location.href = link;
                        } else {
                            window.open(link, newTab);
                        }
                    }
                }
            };
        })
    }

    var height = jQuery.trim($module.attr("data-height"));
    if (height == undefined || height == "") {
        $hero.css("height", "auto!important");
    } else {
        $hero.css("height", "inherit");
    }


    var effect = $module.attr('data-effect');
    var transition = $module.attr('data-transition');

    if (effect == 'effect-zoom') {
        $module.parent().addClass(effect);

        setTimeout(function() {
            var backgroundImage = $module.parent().css('background-image');
            var backgroundSize = $module.parent().css('background-size');
            var backgroundPosition = $module.parent().css('background-position');
            $module.siblings('.gf_hero-bg-wrap').css({
                'background-image': 'inherit',
                'background-size': 'inherit',
                'background-position': 'inherit',
                '-webkit-transition': 'transform ' + transition + 's ease-in-out',
                '-moz-transition': 'transform ' + transition + 's ease-in-out',
                '-ms-transition': 'transform ' + transition + 's ease-in-out',
                '-o-transition': 'transform ' + transition + 's ease-in-out',
                'transition': 'transform ' + transition + 's ease-in-out'
            })
            $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                'background-image': 'inherit',
                'background-size': 'inherit',
                'background-position': 'inherit',
                '-webkit-transition': 'transform ' + transition + 's ease-in-out',
                '-moz-transition': 'transform ' + transition + 's ease-in-out',
                '-ms-transition': 'transform ' + transition + 's ease-in-out',
                '-o-transition': 'transform ' + transition + 's ease-in-out',
                'transition': 'transform ' + transition + 's ease-in-out'
            });
        }, 300);
    } else {
        $module.parent().removeClass("effect-zoom");
    }

    if ($module.attr('data-fixedMode') == '1') {
        function changeImage() {
            var backgroundImage = $module.parent().css('background-image');
            if (backgroundImage) {
                backgroundImage = backgroundImage.replace('url(', '').replace(')', '').replace(/\"/gi, "");
                $module.find('.gf_hero-fixed').attr('src', backgroundImage);
                $module.parent().addClass('gf_hero-fixed-mode');
            }
        }
        changeImage();
        let windowWidth = jQuery(window).width();
        let timeoutResize = 0;
        jQuery(window).resize(function() {
            if (jQuery(window).width() == windowWidth) {
                return;
            }
            windowWidth = jQuery(window).width();

            if (timeoutResize) {
                clearTimeout(timeoutResize);
                timeoutResize = 0;
            }

            timeoutResize = window.setTimeout(function() {
                changeImage();
            }, 16);
        });
    } else {
        $module.parent().removeClass('gf_hero-fixed-mode');
    }
})(window.GemQuery || jQuery);

(function(jQuery) {
    var $hero = jQuery('#m-1613172414410');
    var $module = jQuery('#m-1613172414410').children('.module');

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    var $heroLink = $hero.children('.hero-link');
    if (mode == 'dev' && $heroLink.length > 0) {
        $hero.children('.hero-link').hide();
    }
    if (mode == 'production' && $heroLink.length > 0) {
        $module.off('click.openLink').on('click.openLink', function(e) {
            var $target = jQuery(e.target);
            if ($target.length > 0) {
                var linkTarget = typeof $target.attr('href') !== "undefined" ? $target.attr('href') : "";
                if (linkTarget == "") {
                    var link = typeof $heroLink.attr('href') !== "undefined" ? $heroLink.attr('href') : "";
                    var newTab = typeof $heroLink.attr('target') !== "undefined" ? $heroLink.attr('target') : "";
                    if (link != "") {
                        if (newTab == "") {
                            window.location.href = link;
                        } else {
                            window.open(link, newTab);
                        }
                    }
                }
            };
        })
    }

    var height = jQuery.trim($module.attr("data-height"));
    if (height == undefined || height == "") {
        $hero.css("height", "auto!important");
    } else {
        $hero.css("height", "inherit");
    }


    var effect = $module.attr('data-effect');
    var transition = $module.attr('data-transition');

    if (effect == 'effect-zoom') {
        $module.parent().addClass(effect);

        setTimeout(function() {
            var backgroundImage = $module.parent().css('background-image');
            var backgroundSize = $module.parent().css('background-size');
            var backgroundPosition = $module.parent().css('background-position');
            $module.siblings('.gf_hero-bg-wrap').css({
                'background-image': 'inherit',
                'background-size': 'inherit',
                'background-position': 'inherit',
                '-webkit-transition': 'transform ' + transition + 's ease-in-out',
                '-moz-transition': 'transform ' + transition + 's ease-in-out',
                '-ms-transition': 'transform ' + transition + 's ease-in-out',
                '-o-transition': 'transform ' + transition + 's ease-in-out',
                'transition': 'transform ' + transition + 's ease-in-out'
            })
            $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                'background-image': 'inherit',
                'background-size': 'inherit',
                'background-position': 'inherit',
                '-webkit-transition': 'transform ' + transition + 's ease-in-out',
                '-moz-transition': 'transform ' + transition + 's ease-in-out',
                '-ms-transition': 'transform ' + transition + 's ease-in-out',
                '-o-transition': 'transform ' + transition + 's ease-in-out',
                'transition': 'transform ' + transition + 's ease-in-out'
            });
        }, 300);
    } else {
        $module.parent().removeClass("effect-zoom");
    }

    if ($module.attr('data-fixedMode') == '1') {
        function changeImage() {
            var backgroundImage = $module.parent().css('background-image');
            if (backgroundImage) {
                backgroundImage = backgroundImage.replace('url(', '').replace(')', '').replace(/\"/gi, "");
                $module.find('.gf_hero-fixed').attr('src', backgroundImage);
                $module.parent().addClass('gf_hero-fixed-mode');
            }
        }
        changeImage();
        let windowWidth = jQuery(window).width();
        let timeoutResize = 0;
        jQuery(window).resize(function() {
            if (jQuery(window).width() == windowWidth) {
                return;
            }
            windowWidth = jQuery(window).width();

            if (timeoutResize) {
                clearTimeout(timeoutResize);
                timeoutResize = 0;
            }

            timeoutResize = window.setTimeout(function() {
                changeImage();
            }, 16);
        });
    } else {
        $module.parent().removeClass('gf_hero-fixed-mode');
    }
})(window.GemQuery || jQuery);

(function(jQuery) {
    var $hero = jQuery('#m-1613172496268');
    var $module = jQuery('#m-1613172496268').children('.module');

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    var $heroLink = $hero.children('.hero-link');
    if (mode == 'dev' && $heroLink.length > 0) {
        $hero.children('.hero-link').hide();
    }
    if (mode == 'production' && $heroLink.length > 0) {
        $module.off('click.openLink').on('click.openLink', function(e) {
            var $target = jQuery(e.target);
            if ($target.length > 0) {
                var linkTarget = typeof $target.attr('href') !== "undefined" ? $target.attr('href') : "";
                if (linkTarget == "") {
                    var link = typeof $heroLink.attr('href') !== "undefined" ? $heroLink.attr('href') : "";
                    var newTab = typeof $heroLink.attr('target') !== "undefined" ? $heroLink.attr('target') : "";
                    if (link != "") {
                        if (newTab == "") {
                            window.location.href = link;
                        } else {
                            window.open(link, newTab);
                        }
                    }
                }
            };
        })
    }

    var height = jQuery.trim($module.attr("data-height"));
    if (height == undefined || height == "") {
        $hero.css("height", "auto!important");
    } else {
        $hero.css("height", "inherit");
    }


    var effect = $module.attr('data-effect');
    var transition = $module.attr('data-transition');

    if (effect == 'effect-zoom') {
        $module.parent().addClass(effect);

        setTimeout(function() {
            var backgroundImage = $module.parent().css('background-image');
            var backgroundSize = $module.parent().css('background-size');
            var backgroundPosition = $module.parent().css('background-position');
            $module.siblings('.gf_hero-bg-wrap').css({
                'background-image': 'inherit',
                'background-size': 'inherit',
                'background-position': 'inherit',
                '-webkit-transition': 'transform ' + transition + 's ease-in-out',
                '-moz-transition': 'transform ' + transition + 's ease-in-out',
                '-ms-transition': 'transform ' + transition + 's ease-in-out',
                '-o-transition': 'transform ' + transition + 's ease-in-out',
                'transition': 'transform ' + transition + 's ease-in-out'
            })
            $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                'background-image': 'inherit',
                'background-size': 'inherit',
                'background-position': 'inherit',
                '-webkit-transition': 'transform ' + transition + 's ease-in-out',
                '-moz-transition': 'transform ' + transition + 's ease-in-out',
                '-ms-transition': 'transform ' + transition + 's ease-in-out',
                '-o-transition': 'transform ' + transition + 's ease-in-out',
                'transition': 'transform ' + transition + 's ease-in-out'
            });
        }, 300);
    } else {
        $module.parent().removeClass("effect-zoom");
    }

    if ($module.attr('data-fixedMode') == '1') {
        function changeImage() {
            var backgroundImage = $module.parent().css('background-image');
            if (backgroundImage) {
                backgroundImage = backgroundImage.replace('url(', '').replace(')', '').replace(/\"/gi, "");
                $module.find('.gf_hero-fixed').attr('src', backgroundImage);
                $module.parent().addClass('gf_hero-fixed-mode');
            }
        }
        changeImage();
        let windowWidth = jQuery(window).width();
        let timeoutResize = 0;
        jQuery(window).resize(function() {
            if (jQuery(window).width() == windowWidth) {
                return;
            }
            windowWidth = jQuery(window).width();

            if (timeoutResize) {
                clearTimeout(timeoutResize);
                timeoutResize = 0;
            }

            timeoutResize = window.setTimeout(function() {
                changeImage();
            }, 16);
        });
    } else {
        $module.parent().removeClass('gf_hero-fixed-mode');
    }
})(window.GemQuery || jQuery);


































jQuery(function() {
    try {
        var $module = jQuery('#m-1615320367950').children('.module');
        var navspeed = $module.data('navspeed'),
            autoplaytimeout = $module.data('autoplaytimeout'),
            autoplayhoverpause = $module.data('autoplayhoverpause'),
            navlg = $module.data('navlg'),
            navmd = $module.data('navmd'),
            navsm = $module.data('navsm'),
            navxs = $module.data('navxs'),
            collg = $module.data('collg'),
            colmd = $module.data('colmd'),
            colsm = $module.data('colsm'),
            colxs = $module.data('colxs'),
            dotslg = $module.data('dotslg'),
            dotsmd = $module.data('dotsmd'),
            dotssm = $module.data('dotssm'),
            dotsxs = $module.data('dotsxs'),
            marginlg = parseInt($module.data('marginlg')),
            marginmd = parseInt($module.data('marginmd')),
            marginsm = parseInt($module.data('marginsm')),
            marginxs = parseInt($module.data('marginxs'));

        var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
        if (mode == 'production') {
            var autoplay = $module.data('autoplay'),
                loop = $module.data('loop');
        } else {
            var autoplay = 0,
                loop = 0;
        }

        var initCarousel = function() {
            $module.owlCarousel({
                mouseDrag: false,
                autoplayHoverPause: autoplayhoverpause,
                autoplay: autoplay,
                autoplaySpeed: navspeed,
                autoplayTimeout: autoplaytimeout,
                loop: loop,
                navSpeed: navspeed,
                autoWidth: !1,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: colxs,
                        nav: navxs,
                        dots: dotsxs,
                        margin: marginxs
                    },
                    768: {
                        items: colsm,
                        nav: navsm,
                        dots: dotssm,
                        margin: marginsm
                    },
                    992: {
                        items: colmd,
                        nav: navmd,
                        dots: dotsmd,
                        margin: marginmd
                    },
                    1200: {
                        items: collg,
                        nav: navlg,
                        dots: dotslg,
                        margin: marginlg
                    }
                },
                onInitialized: function() {
                    $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
                    jQuery(window).trigger("resize");
                }
            });
        }

        // Fix nested carousel bug	
        if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {
            setTimeout(function() {
                initCarousel();
            }, 300)
        } else {
            initCarousel();
        }
    } catch (err) {}
});

(function(jQuery) {
    try {
        var $module = jQuery('#m-1615320367954').children('.module');
        var single = $module.attr('data-single');
        var openDefault = $module.attr('data-openDefault');
        var openTab = $module.attr('data-openTab');
        var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

        if (openDefault == 0 || openDefault == '0') {
            openTab = '0';
        }

        $module.gfAccordion({
            single: single,
            openTab: openTab,
            mode: mode,
            onChanged: function() {
                // Fix (P) Desc read more bug	
                $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {
                    if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {
                        jQuery(el).children(".module").data("gfv3productdesc").initReadMore();
                    }
                })
            }
        });

        var borderColor = $module.attr('data-borderColor');
        var borderSize = $module.attr('data-borderSize');

        $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
        $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
    } catch (err) {}
})(window.GemQuery || jQuery);


































jQuery(function() {
    try {
        var $module = jQuery('#m-1615321501253').children('.module');
        var navspeed = $module.data('navspeed'),
            autoplaytimeout = $module.data('autoplaytimeout'),
            autoplayhoverpause = $module.data('autoplayhoverpause'),
            navlg = $module.data('navlg'),
            navmd = $module.data('navmd'),
            navsm = $module.data('navsm'),
            navxs = $module.data('navxs'),
            collg = $module.data('collg'),
            colmd = $module.data('colmd'),
            colsm = $module.data('colsm'),
            colxs = $module.data('colxs'),
            dotslg = $module.data('dotslg'),
            dotsmd = $module.data('dotsmd'),
            dotssm = $module.data('dotssm'),
            dotsxs = $module.data('dotsxs'),
            marginlg = parseInt($module.data('marginlg')),
            marginmd = parseInt($module.data('marginmd')),
            marginsm = parseInt($module.data('marginsm')),
            marginxs = parseInt($module.data('marginxs'));

        var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
        if (mode == 'production') {
            var autoplay = $module.data('autoplay'),
                loop = $module.data('loop');
        } else {
            var autoplay = 0,
                loop = 0;
        }

        var initCarousel = function() {
            $module.owlCarousel({
                mouseDrag: false,
                autoplayHoverPause: autoplayhoverpause,
                autoplay: autoplay,
                autoplaySpeed: navspeed,
                autoplayTimeout: autoplaytimeout,
                loop: loop,
                navSpeed: navspeed,
                autoWidth: !1,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: colxs,
                        nav: navxs,
                        dots: dotsxs,
                        margin: marginxs
                    },
                    768: {
                        items: colsm,
                        nav: navsm,
                        dots: dotssm,
                        margin: marginsm
                    },
                    992: {
                        items: colmd,
                        nav: navmd,
                        dots: dotsmd,
                        margin: marginmd
                    },
                    1200: {
                        items: collg,
                        nav: navlg,
                        dots: dotslg,
                        margin: marginlg
                    }
                },
                onInitialized: function() {
                    $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
                    jQuery(window).trigger("resize");
                }
            });
        }

        // Fix nested carousel bug	
        if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {
            setTimeout(function() {
                initCarousel();
            }, 300)
        } else {
            initCarousel();
        }
    } catch (err) {}
});

(function(jQuery) {
    try {
        var $module = jQuery('#m-1615321501279').children('.module');
        var single = $module.attr('data-single');
        var openDefault = $module.attr('data-openDefault');
        var openTab = $module.attr('data-openTab');
        var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

        if (openDefault == 0 || openDefault == '0') {
            openTab = '0';
        }

        $module.gfAccordion({
            single: single,
            openTab: openTab,
            mode: mode,
            onChanged: function() {
                // Fix (P) Desc read more bug	
                $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {
                    if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {
                        jQuery(el).children(".module").data("gfv3productdesc").initReadMore();
                    }
                })
            }
        });

        var borderColor = $module.attr('data-borderColor');
        var borderSize = $module.attr('data-borderSize');

        $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
        $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
    } catch (err) {}
})(window.GemQuery || jQuery);



































jQuery(function() {
    try {
        var $module = jQuery('#m-1615321625648').children('.module');
        var navspeed = $module.data('navspeed'),
            autoplaytimeout = $module.data('autoplaytimeout'),
            autoplayhoverpause = $module.data('autoplayhoverpause'),
            navlg = $module.data('navlg'),
            navmd = $module.data('navmd'),
            navsm = $module.data('navsm'),
            navxs = $module.data('navxs'),
            collg = $module.data('collg'),
            colmd = $module.data('colmd'),
            colsm = $module.data('colsm'),
            colxs = $module.data('colxs'),
            dotslg = $module.data('dotslg'),
            dotsmd = $module.data('dotsmd'),
            dotssm = $module.data('dotssm'),
            dotsxs = $module.data('dotsxs'),
            marginlg = parseInt($module.data('marginlg')),
            marginmd = parseInt($module.data('marginmd')),
            marginsm = parseInt($module.data('marginsm')),
            marginxs = parseInt($module.data('marginxs'));

        var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
        if (mode == 'production') {
            var autoplay = $module.data('autoplay'),
                loop = $module.data('loop');
        } else {
            var autoplay = 0,
                loop = 0;
        }

        var initCarousel = function() {
            $module.owlCarousel({
                mouseDrag: false,
                autoplayHoverPause: autoplayhoverpause,
                autoplay: autoplay,
                autoplaySpeed: navspeed,
                autoplayTimeout: autoplaytimeout,
                loop: loop,
                navSpeed: navspeed,
                autoWidth: !1,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: colxs,
                        nav: navxs,
                        dots: dotsxs,
                        margin: marginxs
                    },
                    768: {
                        items: colsm,
                        nav: navsm,
                        dots: dotssm,
                        margin: marginsm
                    },
                    992: {
                        items: colmd,
                        nav: navmd,
                        dots: dotsmd,
                        margin: marginmd
                    },
                    1200: {
                        items: collg,
                        nav: navlg,
                        dots: dotslg,
                        margin: marginlg
                    }
                },
                onInitialized: function() {
                    $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
                    jQuery(window).trigger("resize");
                }
            });
        }

        // Fix nested carousel bug	
        if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {
            setTimeout(function() {
                initCarousel();
            }, 300)
        } else {
            initCarousel();
        }
    } catch (err) {}
});

(function(jQuery) {
    try {
        var $module = jQuery('#m-1615321625588').children('.module');
        var single = $module.attr('data-single');
        var openDefault = $module.attr('data-openDefault');
        var openTab = $module.attr('data-openTab');
        var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

        if (openDefault == 0 || openDefault == '0') {
            openTab = '0';
        }

        $module.gfAccordion({
            single: single,
            openTab: openTab,
            mode: mode,
            onChanged: function() {
                // Fix (P) Desc read more bug	
                $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {
                    if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {
                        jQuery(el).children(".module").data("gfv3productdesc").initReadMore();
                    }
                })
            }
        });

        var borderColor = $module.attr('data-borderColor');
        var borderSize = $module.attr('data-borderSize');

        $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
        $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
    } catch (err) {}
})(window.GemQuery || jQuery);