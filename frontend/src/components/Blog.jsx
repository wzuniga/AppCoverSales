import React, { useEffect, useRef } from 'react';

const Blog = () => {
    const componentRef = useRef(null);

    useEffect(() => {
        const initSlider = () => {
            if (window.jQuery && window.jQuery.fn.slick) {
                const $ = window.jQuery;
                const $component = $(componentRef.current);

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
                        xl: 1, lg: 1, md: 1, sm: 1, xs: 1,
                        vertical: false,
                        loop: true,
                        thumb: false,
                        customnav: false,
                        variablewidth: false,
                        variableheight: false,
                        swipetoslide: true
                    };

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
            } else {
                setTimeout(initSlider, 100);
            }
        };

        const timer = setTimeout(initSlider, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="section bg-f7 p-t-125 p-b-90" ref={componentRef}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="blog-intro m-md-b-40">
                            <div className="section-heading section-heading-1 text-left">
                                <h2 className="section-heading__title">Our Blog</h2>
                                <div className="section-heading__line">
                                    <img src="images/icon/line-blue.png" alt="Line" />
                                </div>
                            </div>
                            <p className="blog-intro__text">
                                Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat et voluptates repudiandae sint et molestiae non recusandae.
                            </p>
                            <a className="au-btn au-btn--blue" href="index1.html#">Conoce más
                                <i className="zmdi zmdi-chevron-right"></i>
                                <i className="zmdi zmdi-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="slick-blog">
                            <div className="slick__wrap-content js-slick-wrapper" data-slick-xs="1" data-slick-sm="1" data-slick-md="2" data-slick-lg="2" data-slick-xl="2" data-slick-dots="true" data-slick-customnav="true" data-slick-autoplay="true">
                                <div className="slick__content js-slick-content">
                                    <div className="slick__item">
                                        <div className="media media-blog">
                                            <div className="media__img">
                                                <a href="blog-single.html">
                                                    <img src="images/blog-01.jpg" alt="How to coax children" />
                                                </a>
                                                <div className="media__date">
                                                    <div className="media__date-inner">
                                                        <span className="day">18</span>
                                                        <span className="month">June</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media__body">
                                                <h4 className="media__title title title--black title--md">
                                                    <a href="blog-single.html">How to coax children</a>
                                                </h4>
                                                <div className="media__info">
                                                    <span className="author">
                                                        <a href="index1.html#">John Doe</a>
                                                    </span>
                                                    <a className="cmt" href="index1.html#">0</a>
                                                </div>
                                                <p className="media__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slick__item">
                                        <div className="media media-blog">
                                            <div className="media__img">
                                                <a href="blog-single.html">
                                                    <img src="images/blog-02.jpg" alt="If you are going to use" />
                                                </a>
                                                <div className="media__date">
                                                    <div className="media__date-inner">
                                                        <span className="day">20</span>
                                                        <span className="month">June</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media__body">
                                                <h4 className="media__title title title--black title--md">
                                                    <a href="blog-single.html">If you are going to use</a>
                                                </h4>
                                                <div className="media__info">
                                                    <span className="author">
                                                        <a href="index1.html#">John Doe</a>
                                                    </span>
                                                    <a className="cmt" href="index1.html#">0</a>
                                                </div>
                                                <p className="media__text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slick__item">
                                        <div className="media media-blog">
                                            <div className="media__img">
                                                <a href="blog-single.html">
                                                    <img src="images/blog-03.jpg" alt="How to grow" />
                                                </a>
                                                <div className="media__date">
                                                    <div className="media__date-inner">
                                                        <span className="day">30</span>
                                                        <span className="month">June</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media__body">
                                                <h4 className="media__title title title--black title--md">
                                                    <a href="blog-single.html">How to grow</a>
                                                </h4>
                                                <div className="media__info">
                                                    <span className="author">
                                                        <a href="index1.html#">John Hart</a>
                                                    </span>
                                                    <a className="cmt" href="index1.html#">0</a>
                                                </div>
                                                <p className="media__text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slick__dots dots-style1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
