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
    (function($) {

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

        // Our work

        var controller = new ScrollMagic.Controller();

        $('.work__content').each(function(){
            var ourWorkTl = new TimelineLite();
            ourWorkTl.fromTo(this, 11, {autoAlpha:1}, {autoAlpha:0})
            // ourWorkTl.fromTo(".work__media img", 1, {x:100}, {x:0}, "-=1")
            ;

            var ourWorkScene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.3,
                duration: "95%"
            })

                .setPin(this)
                .setTween(ourWorkTl)
                .addIndicators({
                    name: 'our work pin 1',
                    colorTrigger: 'black',
                    colorStart: '#75C695',
                    colorEnd: 'pink'
                })

                .addTo(controller);
        });

    })(jQuery);

    (function($) {
        var controller = new ScrollMagic.Controller();

        var tlOurWork = new TimelineLite();
        tlOurWork.fromTo(".our-work-contact-js-hook", 2.5, {scaleX:0, transformOrigin:"left", backgroundColor:"#343a40"},{ backgroundColor:"#2C3240", scaleX:1});

        var ourWorkContactScene = new ScrollMagic.Scene({
            triggerElement: ".our-work-contact-js-hook",
            triggerHook: 0.8
        })

            .setTween(tlOurWork)
            .addIndicators({
                name: 'OurWorkContactScene',
                colorTrigger: 'black',
                colorStart: '#75C695',
                colorEnd: 'pink'
            })
            .addTo(controller);


    })(jQuery);

});