$(document).ready(function(){

    // homepage - ipad float in
    var controller = new ScrollMagic.Controller();

    // build a scene
    var ipadScene = new ScrollMagic.Scene({
        triggerElement: ".js-ipad", /*img*/
        reverse:false
    })
        .setClassToggle(".js-ipad", 'fade-in-ipad') // add class
        .addIndicators({
            name: 'fade scene',
            colorTrigger: 'black',
            indent: 200,
            colorStart: '#75C695'
        }) // this requires a plugin
        .addTo(controller);

//     our work page
// loop through each .project element
    $(".js-fade-in").each(function(){
        // Init ScrollMagic
        var controller = new ScrollMagic.Controller();

        // build a scene
        var ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            reverse:false
        })
            .setClassToggle(this, 'fade-in') //
            .addIndicators({
                name: 'fade scene',
                colorTrigger: 'black',
                indent: 200,
                colorStart: '#75C695'
            }) // this requires a plugin
            .addTo(controller);
    });

    // fade up
    $(".js-fade-up").each(function(){
        var controller = new ScrollMagic.Controller();

        // build a scene
        var fadeupScene = new ScrollMagic.Scene({
            triggerElement: this,
            reverse:false
        })
            .setClassToggle(this, 'fade-up') // add class
            .addIndicators({
                name: 'js-fade-up',
                colorTrigger: 'black',
                indent: 200,
                colorStart: '#75C695'
            }) // this requires a plugin
            .addTo(controller);
    });

    //  fade right
    $(".js-fade-right").each(function(){
        var controller = new ScrollMagic.Controller();

        // build a scene
        var faderightScene = new ScrollMagic.Scene({
            triggerElement: this,
            reverse:false
        })
            .setClassToggle(this, 'fade-right') // add class
            .addIndicators({
                name: 'js-fade-right',
                colorTrigger: 'black',
                indent: 200,
                colorStart: '#75C695'
            }) // this requires a plugin
            .addTo(controller);
    });

    //  fade left
    $(".js-fade-left").each(function(){
        var controller = new ScrollMagic.Controller();

        // build a scene
        var fadeleftScene = new ScrollMagic.Scene({
            triggerElement: this,
            reverse:false
        })
            .setClassToggle(this, 'fade-left') // add class
            .addIndicators({
                name: 'js-fade-left',
                colorTrigger: 'black',
                indent: 200,
                colorStart: '#75C695'
            }) // this requires a plugin
            .addTo(controller);
    });

    // homepage- feature section 5
    var controller = new ScrollMagic.Controller();

    // build a scene
    var featureFadeUp = new ScrollMagic.Scene({
        triggerElement: ".js-feature-hook",
        reverse:true
    })
        .setClassToggle(".js-feature", 'feature-fade-up') // add class
        .addIndicators({
            name: 'featureFadeUp',
            colorTrigger: 'black',
            indent: 200,
            colorStart: '#75C695'
        }) // this requires a plugin
        .addTo(controller);

    // homepage - intro
    // var parallaxTl = new TimelineLite();
    // parallaxTl
    // // .to('.intro__content', 0.3, {autoAlpha: 0})
    // // .fromTo('.js-hook-intro-1', 1, {backgroundColor:"green", scaleY:1, height:"100vh"}, { scaleY:0, height:"0"})
    //     .fromTo('.js-hook-intro-1', 2, {backgroundColor:"#343A40"}, {backgroundColor:"#ED1C24"})
    //     .fromTo('.js-hook-intro-2', 2, {backgroundColor:"#ED1C24"}, {backgroundColor:"#343A40"}, "-=1.5")
    // ;
    //
    // var slideParallaxScene = new ScrollMagic.Scene({
    //     triggerElement: '#intro',
    //     triggerHook: 0,
    //     offset: -35,
    //     reverse:false
    // })
    //     .setTween(parallaxTl)
    //     .addIndicators({
    //         name: 'intro',
    //         colorTrigger: 'orange',
    //         colorStart: '#75C695',
    //         colorEnd: 'pink'
    //     })
    //
    //     .addTo(controller);

    // // homepage - intro
    // var controller = new ScrollMagic.Controller();
    //
    // // pin the intro
    // var pinIntroScene = new ScrollMagic.Scene({
    //     triggerElement: '.intro__header',
    //     triggerHook: 0,
    //     duration: '5%'
    // })
    //     .setPin('.intro__content', {pushFollowers: false})
    //     .addTo(controller);

});

// homepage - intro
(function($) {

//     // jQuery Selectors
// //     var intro = $("#intro"),
// //         intro__header = $(".intro__header"),
// //         intro__body = $(".intro__body");
// //
// //         // Simple Tween
// //     TweenLite.fromTo(intro, 2.5, {autoAlpha: 1, x:100}, { autoAlpha: 1, x:0, ease: Elastic. easeOut.config( 1, 0.4)})
// //     TweenLite.fromTo(intro__header, 2.5, { autoAlpha: 0, y:50}, { autoAlpha: 1, y:0, delay:1.0})
// //
// // })(jQuery);
// //
// // (function($) {
// //
// // var tl = new TimelineLite();
// //     tl.staggerFrom(".intro__header h1 p", 1.0, {y:50, opacity: 0}, 1.5)
// //     tl.staggerTo(".intro__header h1 p", 1.0, {y:0, opacity: 1}, 1.5, 0.5);
// //     tl.fromTo("#intro h2", 1.0, { autoAlpha: 0, y:-50}, { autoAlpha: 1, y:0}, "-=0.8")
// //     tl.fromTo("#intro span", 1.0, { autoAlpha: 0, y:-50}, { autoAlpha: 1, y:50}, "-=0.9")
// //    ;


    var introBgPrimary = $(".introBgPrimary"),
        introBgSecondary = $(".introBgSecondary"),
        introContent = $(".intro__content h1 p"),
        intro__bodyH2 = $(".intro__body h2"),
        intro__bodyH2Mobile = $(".intro__body--mobile-hook h2"),
        intro__bodySpan = $(".intro__body span")
    ;

    var tl = new TimelineLite();
    tl.to(introBgPrimary, 0.6, {scaleY:1, backgroundColor:"#ED1C24"})
    tl.to(introBgSecondary, 0.6, {scaleY:1, backgroundColor:"#343A40"}, "-=0.6")
    tl.staggerFrom(introContent, 0.6, {autoAlpha:0, x:200}, 0.3)
    tl.staggerFrom(intro__bodyH2, 0.5, {text:""},2, "-=2.0")
    tl.staggerFrom(intro__bodySpan, 0.6, {text:""},2,"+=0.3")
    ;

    // Mobile h2 heading
    var tl2 = new TimelineLite();
    tl2.fromTo(intro__bodyH2Mobile, 0.5, {y:20,autoAlpha:0}, {y:0, autoAlpha:1},2);

})(jQuery);




