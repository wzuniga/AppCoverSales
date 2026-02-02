import React, { useEffect, useRef } from 'react';

const Activities = () => {
    const componentRef = useRef(null);

    useEffect(() => {
        const initPlugins = () => {
            if (window.jQuery && window.jQuery.fn.slick) {
                const $ = window.jQuery;
                const $component = $(componentRef.current);

                // --- Slick Slider Initialization ---
                const slick_object = $component.find('.js-slick-wrapper');
                slick_object.each(function () {
                    var that = $(this);
                    var slick_content = that.find('.js-slick-content');
                    var arrow_left = that.find('.js-slick-prev');
                    var arrow_right = that.find('.js-slick-next');
                    var option = {
                        accessibility: true,
                        adaptiveheight: false,
                        autoplay: false,
                        autoplayspeed: 5000,
                        arrows: false,
                        asnavfor: null,
                        appendarrows: $(this),
                        appenddots: $(this),
                        prevarrow: '<i class="slick-prev"></i>',
                        nextarrow: '<i class="slick-next"></i>',
                        centermode: false,
                        centerpadding: '50px',
                        cssease: 'ease',
                        dots: false,
                        dotsclass: 'slick-dots',
                        draggable: true,
                        fade: false,
                        focuson: false,
                        speed: 800,
                        pauseonhover: false,
                        xl: 1, lg: 1, md: 1, sm: 1, xs: 1, // Default fallback
                        vertical: false,
                        loop: true,
                        thumb: false,
                        customnav: false,
                        variablewidth: false,
                        variableheight: false,
                        swipetoslide: true
                    };

                    // Map specific properties from global.js logic if needed, 
                    // but most importantly reading the data attributes.
                    // The global.js logic mapped 'xl', 'lg', etc. specific way:
                    // xl: 1, lg: this.xl, ... which depends on usage.
                    // We'll trust the data attributes on the element or defaults.

                    for (var k in option) {
                        if (option.hasOwnProperty(k)) {
                            if ($(this).attr('data-slick-' + k) != null) {
                                option[k] = $(this).data('slick-' + k);
                            }
                        }
                    }

                    if (option.customnav === true) {
                        option.appendarrows = that.find('.slick__arrows');
                        option.appenddots = that.find('.slick__dots');
                    }

                    var slickAPI = slick_content;

                    slickAPI.on('init reinit', function () {
                        var elementAnimate = $(this).find('[data-animation], [data-animation-in]');
                        elementAnimate.css("visibility", "hidden");
                        // Ignoring the complex animation logic for now to ensure basic slider works first
                    });

                    if (!slickAPI.hasClass('slick-initialized')) {
                        slickAPI.slick({
                            accessibility: option.accessibility,
                            adaptiveHeight: option.adaptiveheight,
                            autoplay: option.autoplay,
                            autoplaySpeed: option.autoplayspeed,
                            arrows: option.arrows,
                            appendArrows: option.appendarrows,
                            appendDots: option.appenddots,
                            prevArrow: option.prevarrow,
                            nextArrow: option.nextarrow,
                            centerMode: option.centermode,
                            centerPadding: option.centerpadding,
                            cssEase: option.cssease,
                            dots: option.dots,
                            dotsClass: option.dotsclass,
                            draggable: option.draggable,
                            pauseOnHover: option.pauseonhover,
                            fade: option.fade,
                            focusOnSelect: option.focuson,
                            vertical: option.vertical,
                            slidesToShow: option.xl,
                            slidesToScroll: option.xl,
                            infinite: option.loop,
                            swipeToSlide: option.swipetoslide,
                            speed: option.speed,
                            variableWidth: option.variablewidth,
                            variableHeight: option.variableheight,
                            responsive: [
                                { breakpoint: 1201, settings: { slidesToShow: option.lg, slidesToScroll: option.lg } },
                                { breakpoint: 993, settings: { slidesToShow: option.md, slidesToScroll: option.md, variableWidth: false } },
                                { breakpoint: 769, settings: { slidesToShow: option.sm, slidesToScroll: option.sm, centerPadding: "50px", variableWidth: false } },
                                { breakpoint: 576, settings: { slidesToShow: option.xs, slidesToScroll: option.xs, fade: false, centerPadding: "50px", variableWidth: false } }
                            ]
                        });
                    }

                    arrow_left.on('click', function () {
                        slick_content.slick('slickPrev');
                    });

                    arrow_right.on('click', function () {
                        slick_content.slick('slickNext');
                    });
                });

                // --- Modal Video Initialization ---
                const targetModal = $component.find('.js-modal-video');
                targetModal.each(function () {
                    var that = $(this);
                    var idVideo = that.data("target");
                    // The modal is outside this component, so we look in the body for the ID
                    var $videoModal = $(idVideo);
                    var video_content = $videoModal.find('.modal-video__video');
                    var modal_dialog = $videoModal.find('.modal-dialog');

                    if (video_content.length > 0) {
                        var srcOld = video_content.children('iframe').attr('src');

                        that.off('click').on("click", function () {
                            var iframe = video_content.children('iframe')[0];
                            if (iframe) {
                                iframe.src += "&autoplay=1";
                            }
                            setTimeout(function () {
                                $(idVideo).find('.modal-video__video').css('opacity', '1');
                            }, 300);
                        });

                        // We attach these events to the modal found in global scope
                        $videoModal.off("hidden.bs.modal").on("hidden.bs.modal", function () {
                            var iframe = video_content.children('iframe')[0];
                            if (iframe && srcOld) {
                                iframe.src = srcOld;
                            }
                            $(this).find('.modal-video__video').css('opacity', '0');
                        });

                        $videoModal.off("hide.bs.modal").on("hide.bs.modal", function (e) {
                            modal_dialog.attr("class", "modal-dialog modal-video__dialog animated fadeOut");
                        });

                        $videoModal.off("show.bs.modal").on('show.bs.modal', function (e) {
                            modal_dialog.attr("class", "modal-dialog modal-video__dialog animated fadeIn");
                        });
                    }
                });


            } else {
                setTimeout(initPlugins, 100);
            }
        };

        const timer = setTimeout(initPlugins, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="section p-t-125 p-b-105" ref={componentRef}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-heading section-heading-1">
                            <h2 className="section-heading__title">Activities in the Week</h2>
                            <div className="section-heading__line">
                                <img src="images/icon/line-blue.png" alt="Line" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-9">
                        <div className="p-r-55 p-md-r-0">
                            <div className="media__video-wrap">
                                <img src="images/video-01.jpg" alt="Video 1" />
                                <div className="media__video-icon js-modal-video wow fadeIn" data-toggle="modal" data-target="#modal-video" data-wow-delay=".2s">
                                    <i className="zmdi zmdi-play-circle video__icon"></i>
                                </div>
                            </div>
                            <div className="slick-class m-t-25">
                                <div className="slick__wrap-content js-slick-wrapper" data-slick-xs="1" data-slick-sm="1" data-slick-md="2" data-slick-lg="2" data-slick-xl="2" data-slick-customnav="true" data-slick-autoplay="true">
                                    <div className="slick__content js-slick-content">
                                        <div className="slick__item">
                                            <div className="media media-our-class-2">
                                                <div className="media__img">
                                                    <a href="#">
                                                        <img src="images/our-class-05.jpg" alt="Our Class" />
                                                    </a>
                                                </div>
                                                <div className="media__body">
                                                    <h4 className="media__title">
                                                        <a href="#">Study Geometry</a>
                                                    </h4>
                                                    <span className="date-time">09:00 am - 11:00 am</span>
                                                    <span className="date-time">April 29, 2020</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slick__item">
                                            <div className="media media-our-class-2">
                                                <div className="media__img">
                                                    <a href="#">
                                                        <img src="images/our-class-06.jpg" alt="Our Class" />
                                                    </a>
                                                </div>
                                                <div className="media__body">
                                                    <h4 className="media__title">
                                                        <a href="#">Summer Party</a>
                                                    </h4>
                                                    <span className="date-time">03:00 pm - 05:00 pm</span>
                                                    <span className="date-time">April 30, 2020</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slick__item">
                                            <div className="media media-our-class-2">
                                                <div className="media__img">
                                                    <a href="#">
                                                        <img src="images/our-class-05.jpg" alt="Our Class" />
                                                    </a>
                                                </div>
                                                <div className="media__body">
                                                    <h4 className="media__title">
                                                        <a href="#">Cooking Class</a>
                                                    </h4>
                                                    <span className="date-time">02:00 pm - 04:00 pm</span>
                                                    <span className="date-time">May 02, 2020</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slick__nav arrows-1">
                                        <i className="slick-prev slick-arrow js-slick-prev lnr lnr-chevron-left"></i>
                                        <i className="slick-next slick-arrow js-slick-next lnr lnr-chevron-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="cta-form m-md-t-40">
                            <div className="cta-form__top-bg"></div>
                            <div className="cta-form-inner">
                                <h4 className="cta-form__title m-b-35">How to Enroll Your Child to a Class?</h4>
                                <form className="form form--icon" method="post">
                                    <input type="email" name="email" placeholder="Email..." />
                                    <button className="btn-submit-1" type="submit">
                                        <img src="images/icon/send.png" alt="send" />
                                    </button>
                                </form>
                            </div>
                            <div className="cta-form__bot-bg">
                                <img src="images/icon/dancing.png" alt="Dancing" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activities;
