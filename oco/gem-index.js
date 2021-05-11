! function() {
    var analytics = window.analytics = window.analytics || [];
    if (!analytics.initialize)
        if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice.");
        else {
            analytics.invoked = !0;
            analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "addSourceMiddleware", "addIntegrationMiddleware", "setAnonymousId", "addDestinationMiddleware"];
            analytics.factory = function(e) { return function() { var t = Array.prototype.slice.call(arguments);
                    t.unshift(e);
                    analytics.push(t); return analytics } };
            for (var e = 0; e < analytics.methods.length; e++) { var key = analytics.methods[e];
                analytics[key] = analytics.factory(key) }
            analytics.load = function(key, e) { var t = document.createElement("script");
                t.type = "text/javascript";
                t.async = !0;
                t.src = "https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js"; var n = document.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(t, n);
                analytics._loadOptions = e };
            analytics.SNIPPET_VERSION = "4.13.1";
            analytics.load("qeBsuOcv5uO9OOOF25JTrynvZKC6FKUR");
            analytics.page();
        }
}();

(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-164390720-4', 'auto');
ga('send', 'pageview');

window['_fs_debug'] = false;
window['_fs_host'] = 'fullstory.com';
window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
window['_fs_org'] = 'S60HV';
window['_fs_namespace'] = 'FS';
(function(m, n, e, t, l, o, g, y) {
    if (e in m) { if (m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'); } return; }
    g = m[e] = function(a, b, s) { g.q ? g.q.push([a, b, s]) : g._api(a, b, s); };
    g.q = [];
    o = n.createElement(t);
    o.async = 1;
    o.crossOrigin = 'anonymous';
    o.src = 'https://' + _fs_script;
    y = n.getElementsByTagName(t)[0];
    y.parentNode.insertBefore(o, y);
    g.identify = function(i, v, s) { g(l, { uid: i }, s); if (v) g(l, v, s) };
    g.setUserVars = function(v, s) { g(l, v, s) };
    g.event = function(i, v, s) { g('event', { n: i, p: v }, s) };
    g.anonymize = function() { g.identify(!!0) };
    g.shutdown = function() { g("rec", !1) };
    g.restart = function() { g("rec", !0) };
    g.log = function(a, b) { g("log", [a, b]) };
    g.consent = function(a) { g("consent", !arguments.length || a) };
    g.identifyAccount = function(i, v) { o = 'account';
        v = v || {};
        v.acctId = i;
        g(o, v) };
    g.clearUserCookie = function() {};
    g._w = {};
    y = 'XMLHttpRequest';
    g._w[y] = m[y];
    y = 'fetch';
    g._w[y] = m[y];
    if (m[y]) m[y] = function() { return g._w[y].apply(this, arguments) };
    g._v = "1.2.0";
})(window, document, window['_fs_namespace'], 'script', 'user');

! function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
        n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
}(window, document, 'script',
    'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '417985952254792');
fbq('track', 'PageView');



window.__gfAnimate.registerPageLoaded(jQuery("#e-1605911741141"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"slide_in-left","delay":600,"duration":750},"interaction":{"key":"after-page-loaded","type":"level2"}}');
window.__gfAnimate.registerPageLoaded(jQuery("#e-1608760534715"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"slide_in-left","delay":600,"duration":750},"interaction":{"key":"after-page-loaded","type":"level2"}}');



jQuery(function() {
    var $hero = jQuery('#m-1604955067082');
    var $module = jQuery('#m-1604955067082').children('.module');

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
});










































































jQuery(function() {
    try {
        var $module = jQuery('#m-1602699178221').children('.module');
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
});


jQuery(function() {
    try {
        var $module = jQuery('#m-1602699281334').children('.module');
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
});
















jQuery(function() {
    try {
        var $module = jQuery('#m-1602699756963').children('.module');
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
});
















jQuery(function() {
    try {
        var $module = jQuery('#m-1602700205866').children('.module');
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
});

















jQuery(function() {
    try {
        var $module = jQuery('#m-1599242011051').children('.module');
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








var gemFlag = !1;
for (var i = 0; i < pageLibs.length; i++) { if (pageLibs[i].indexOf('gfv3product.js') !== -1) { if (jQuery.gfV3Product == undefined) { gemFlag = !0; break } } if (pageLibs[i].indexOf('gfv3restabs.js') !== -1) { if (jQuery.gfV3ResTabs == undefined) { gemFlag = !0; break } } if (pageLibs[i].indexOf('gfaccordion.js') !== -1) { if (jQuery.gfAccordion == undefined) { gemFlag = !0; break } } }
if (gemFlag) { var count = 0; for (var i = 0; i < pageLibs.length - 1; i++) { jQuery.getScript(pageLibs[i], function() { count++; if (count == pageLibs.length - 1) { jQuery.getScript(pageLibs[pageLibs.length - 1], function() {}) } }) } }