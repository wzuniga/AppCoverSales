import React, { useEffect, useRef } from 'react';

const HomeSlider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const initSlider = () => {
            if (window.jQuery && window.jQuery.fn.revolution) {
                const e = window.jQuery;
                try {
                    if (e(".js-rev").length === 0) {
                        console.warn("Revolution Slider target .js-rev not found!");
                    }
                    e(".js-rev").each(function () {
                        var l = e(this);
                        // Check if already initialized to avoid double init
                        if (l.attr('data-rev-initialized')) return;
                        l.attr('data-rev-initialized', 'true');

                        var o = {
                            layout: "auto",
                            arrows: !0,
                            stylearrow: "uranus",
                            hideonleavearrow: !1,
                            bullets: !0,
                            stylebullet: "hermes",
                            hideonleavebullet: !1,
                            hoffbullet: 0,
                            voffbullet: 20,
                            spacebullet: 5,
                            lhoffarrow: 0,
                            lvoffarrow: 0,
                            rhoffarrow: 0,
                            rvoffarrow: 0,
                            delay: 5e3,
                            height: 500,
                            fullscreenalignforce: "off"
                        };
                        for (var t in o) o.hasOwnProperty(t) && null != l.attr("data-rev-" + t) && (o[t] = l.data("rev-" + t));
                        l.show().revolution({
                            sliderLayout: o.layout,
                            responsiveLevels: [1201, 1200, 992, 768, 576],
                            gridwidth: [1170, 930, 690, 510, 576],
                            gridheight: [o.height, o.height, o.height, o.height],
                            visibilityLevels: [1201, 1200, 992, 768, 576],
                            delay: o.delay,
                            fullScreenOffsetContainer: ".header-mobile",
                            disableProgressBar: "on",
                            navigation: {
                                onHoverStop: "off",
                                arrows: {
                                    enable: o.arrows,
                                    style: o.stylearrow,
                                    hide_onleave: o.hideonleavearrow,
                                    left: {
                                        h_offset: o.lhoffarrow,
                                        v_offset: o.lvoffarrow
                                    },
                                    right: {
                                        h_offset: o.rhoffarrow,
                                        v_offset: o.rvoffarrow
                                    }
                                },
                                bullets: {
                                    enable: o.bullets,
                                    style: o.stylebullet,
                                    hide_onleave: o.hideonleavebullet,
                                    h_align: "center",
                                    v_align: "bottom",
                                    h_offset: o.hoffbullet,
                                    v_offset: o.voffbullet,
                                    space: o.spacebullet
                                }
                            }
                        })
                    });
                } catch (e) {
                    console.log(e)
                }
            } else {
                // Retry if jQuery isn't ready yet
                setTimeout(initSlider, 100);
            }
        };

        // Delay slightly to ensure DOM is ready
        const timer = setTimeout(initSlider, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="rev_slider_wrapper">
            <div className="rev_slider fullscreenbanner js-rev" data-version="5.4.4" style={{ display: "none" }} data-rev-height="800" data-rev-layout="fullscreen" data-rev-stylearrow="au-rev-arrow-1" data-rev-bullets="false">
                <ul>
                    <li className="rev-item rev-item-1" data-transition="fade">
                        <img className="rev-slidebg" src="images/slide-01.jpg" alt="Master Slider 01" />
                        <div className="tp-caption tp-resizeme rev-img-1" data-frames="[{&quot;delay&quot;:700,&quot;speed&quot;:900,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                            data-x="[left]" data-y="[bottom]" data-hoffset="[-320, -300, -200, -200, -100]" data-voffset="[-65, -65, -90, -80, -80]" data-width="['auto']" data-height="[&quot;auto&quot;]" data-whitespace="[nowrap, nowrap, nowrap, nowrap, nowrap]">
                            <img src="images/slide-item-04.png" alt="Slide Img" />
                        </div>
                        <div className="tp-caption tp-resizeme rev-text-1" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:1800,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:1;&quot;,&quot;mask&quot;:&quot;x:[100%];y:0;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                            data-x="[center,center,center,center,center]" data-y="[center]" data-hoffset="[165, 55, -10, 10, 10]" data-voffset="[-110, -110, -90, 0, 0]" data-paddingleft="[0, 0, 0, 0, 15]" data-paddingright="[0, 0, 0, 0, 15]" data-width="['auto']"
                            data-height="[&quot;auto&quot;]" data-whitespace="[nowrap, nowrap, nowrap, nowrap, nowrap]" data-color="#fff" data-fontweight="400" data-fontsize="[20, 20, 22, 24, 28]">Aqui ira nuestro Logo</div>
                        <div className="tp-caption tp-resizeme rev-text-2" data-frames="[{&quot;delay&quot;:900,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.05,&quot;speed&quot;:1600,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rZ:35deg;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                            data-x="[center,center,center,left,center]" data-y="[center]" data-hoffset="[365, 255, -10, -20, 10]" data-voffset="[-10, -20, 0, 0, -10]" data-paddingleft="[0, 0, 0, 0, 15]" data-paddingright="[0, 0, 0, 0, 15]" data-width="[680,680,960,576,500]"
                            data-height="[&quot;auto&quot;]" data-lineheight="[70, 60, 50, 50, 45]" data-whitespace="normal" data-color="#fff" data-fontweight="400" data-fontsize="[55, 42, 45, 42, 46]" data-textalign="[left, left, center, center, center]">Crea tus caratuals con nosotros</div>
                        <a className="tp-caption tp-resizeme" href="index1.html#" target="_self" data-frames="[{&quot;delay&quot;:3200,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                            data-x="[center,center,center,center,center]" data-y="[center,center,center,center,center]" data-hoffset="[105, 5, -20, 10, 10]" data-voffset="[162, 120, 120, 120, 165]" data-width="['auto']" data-height="[&quot;auto&quot;]"
                            data-responsive_offset="on" data-responsive="off" data-whitespace="[nowrap, nowrap, nowrap, nowrap, nowrap]">
                            <span className="rev-btn-1">Conoce más
                                <span className="arrow" data-paddingleft="10">
                                    <i className="zmdi zmdi-chevron-right"></i>
                                    <i className="zmdi zmdi-chevron-right"></i>
                                </span>
                            </span>
                        </a>
                    </li>
                    <li className="rev-item rev-item-2" data-transition="scaledownfromright">
                        <img className="rev-slidebg" src="images/slide-02.jpg" alt="Master Slider 01" />
                        <div className="tp-caption tp-resizeme rev-img-1" data-frames="[{&quot;delay&quot;:1100,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                            data-x="[left]" data-y="[bottom]" data-hoffset="[-280, -280, -200, -200, -100]" data-voffset="[-10, -10, -90, -80, -80]" data-width="['auto']" data-height="[&quot;auto&quot;]" data-whitespace="[nowrap, nowrap, nowrap, nowrap, nowrap]">
                            <img src="images/slide-item-01.png" alt="Slide Img" />
                        </div>
                        <div className="tp-caption tp-resizeme rev-text-3" data-frames="[{&quot;delay&quot;:500,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.05,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rZ:35deg;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                            data-x="[right, center, center, center, center]" data-y="[center]" data-hoffset="[0, 0, 0, 0, 0]" data-voffset="[10, 10, -30, 0, -90]" data-paddingleft="[0, 0, 0, 0, 15]" data-paddingright="[0, 0, 0, 0, 15]" data-width="[560 , 560, 850 , 450, 570]"
                            data-height="[&quot;auto&quot;]" data-fontsize="[70, 70, 54, 54, 44]" data-lineheight="[85, 85, 64, 62, 50]" data-whitespace="normal" data-textalign="center" data-color="#333" data-fontweight="400">Que podemos poner aqui?</div>
                        <a className="tp-caption tp-resizeme" href="index1.html#" target="_self" data-frames="[{&quot;delay&quot;:2300,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                            data-x="[right,right,center,center,center]" data-y="[bottom]" data-hoffset="[110, 110, -10, 10, 10]" data-voffset="[152, 152, 250, 200, 230]" data-width="['auto']" data-height="[&quot;auto&quot;]" data-responsive_offset="on"
                            data-responsive="off" data-whitespace="[nowrap, nowrap, nowrap, nowrap, nowrap]">
                            <span className="rev-btn-1">Conoce más
                                <span className="arrow" data-paddingleft="10">
                                    <i className="zmdi zmdi-chevron-right"></i>
                                    <i className="zmdi zmdi-chevron-right"></i>
                                </span>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HomeSlider;
