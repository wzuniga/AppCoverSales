import React from 'react';
import Header from './components/Header';
import HomeSlider from './components/HomeSlider';
import Footer from './components/Footer';
import Activities from './components/Activities';
import Blog from './components/Blog';

function App() {
    React.useEffect(() => {
        // Custom smooth scroll function with easing
        const smoothScroll = (target, duration) => {
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            let startTime = null;

            const animation = (currentTime) => {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            };

            // EaseInOutQuad
            const ease = (t, b, c, d) => {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            };

            requestAnimationFrame(animation);
        };

        const timer = setTimeout(() => {
            const mainSection = document.getElementById('main');
            if (mainSection) {
                // Scroll duration: 2000ms (2 seconds) for smoother effect
                smoothScroll(mainSection, 2000);
            }
        }, 5000); // Wait 5 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="page-wrapper">
                {/* INTRO SCREEN */}
                <div className="intro-screen">
                    <img src="images/landing/slide-1.png" alt="Welcome Intro" />
                </div>
                {/* END INTRO SCREEN */}

                <Header />
                <main id="main">
                    <HomeSlider />

                    {/* WELCOME*/}
                    <section className="section p-t-145 p-b-45 p-md-t-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="section-heading section-heading-1">
                                        <h2 className="section-heading__title">Nuestros Productos</h2>
                                        <div className="section-heading__line">
                                            <img src="images/icon/line-blue.png" alt="Line" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-3 wow zoomIn" data-wow-duration="0.5s" data-wow-delay="0.2s">
                                    <div className="box box-welcome">
                                        <div className="box__head">
                                            <img src="images/welcome-01.jpg" alt="Welcome 1" />
                                        </div>
                                        <div className="box__body">
                                            <h3 className="box__title">
                                                <a href="index1.html#">healthy meals</a>
                                            </h3>
                                            <p className="box__text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 wow zoomIn" data-wow-duration="0.5s" data-wow-delay="0.4s">
                                    <div className="box box-welcome">
                                        <div className="box__head">
                                            <img src="images/welcome-02.jpg" alt="Welcome 2" />
                                        </div>
                                        <div className="box__body">
                                            <h3 className="box__title">
                                                <a href="index1.html#">Value for baby</a>
                                            </h3>
                                            <p className="box__text">There are many variations of passages of Lorem Ipsum available</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 wow zoomIn" data-wow-duration="0.5s" data-wow-delay="0.6s">
                                    <div className="box box-welcome">
                                        <div className="box__head">
                                            <img src="images/welcome-03.jpg" alt="Welcome 3" />
                                        </div>
                                        <div className="box__body">
                                            <h3 className="box__title">
                                                <a href="index1.html#">Nutrition food</a>
                                            </h3>
                                            <p className="box__text">If you are going to use a passage of Lorem Ipsum you need</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 wow zoomIn" data-wow-duration="0.5s" data-wow-delay="0.8s">
                                    <div className="box box-welcome">
                                        <div className="box__head">
                                            <img src="images/welcome-04.jpg" alt="Welcome 4" />
                                        </div>
                                        <div className="box__body">
                                            <h3 className="box__title">
                                                <a href="index1.html#">Learn and play</a>
                                            </h3>
                                            <p className="box__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* END WELCOME*/}

                    {/* OUR ROOMS*/}
                    <section className="section bg-blue p-t-120 p-b-165">
                        <div className="bg-cloud"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="section-heading section-heading-2">
                                        <h2 className="section-heading__title">our Rooms & Classes</h2>
                                        <div className="section-heading__line">
                                            <img src="images/icon/line-white.png" alt="Line 2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-lg-6">
                                    <div className="p-r-25 p-md-r-0">
                                        <div className="media media-our-class">
                                            <div className="media__body">
                                                <h3 className="media__title">
                                                    <a href="index1.html#">music classes</a>
                                                </h3>
                                                <span className="date-time">08:00 am - 05:00 pm</span>
                                                <span className="date-time">April 29, 2020</span>
                                                <div className="media-our-class__info">
                                                    <div className="row no-gutters">
                                                        <div className="col-6">
                                                            <div className="item has-seprator">
                                                                <span className="name">age</span>
                                                                <span className="value">1 - 2 years</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="item">
                                                                <span className="name">size</span>
                                                                <span className="value">12 seats</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media__img">
                                                <a href="index1.html#">
                                                    <img src="images/our-class-01.jpg" alt="Our room 1" />
                                                </a>
                                                <span className="media-our-class__price">
                                                    <span className="inner">$35</span>
                                                </span>
                                            </div>
                                        </div>
                                        <hr className="line-white m-l-0" />
                                        <div className="media media-our-class">
                                            <div className="media__body">
                                                <h3 className="media__title">
                                                    <a href="index1.html#">art classes</a>
                                                </h3>
                                                <span className="date-time">08:00 am - 05:00 pm</span>
                                                <span className="date-time">April 29, 2020</span>
                                                <div className="media-our-class__info">
                                                    <div className="row no-gutters">
                                                        <div className="col-6">
                                                            <div className="item has-seprator">
                                                                <span className="name">age</span>
                                                                <span className="value">3 - 4 years</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="item">
                                                                <span className="name">size</span>
                                                                <span className="value">22 seats</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media__img">
                                                <a href="index1.html#">
                                                    <img src="images/our-class-03.jpg" alt="Our room 3" />
                                                </a>
                                                <span className="media-our-class__price">
                                                    <span className="inner">$32</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="col-border p-l-25 p-t-50 p-md-l-0 p-md-t-0">
                                        <div className="media media-our-class media-our-class--right">
                                            <div className="media__body">
                                                <h3 className="media__title">
                                                    <a href="index1.html#">color classes</a>
                                                </h3>
                                                <span className="date-time">08:00 am - 05:00 pm</span>
                                                <span className="date-time">April 29, 2020</span>
                                                <div className="media-our-class__info">
                                                    <div className="row no-gutters">
                                                        <div className="col-6">
                                                            <div className="item has-seprator">
                                                                <span className="name">age</span>
                                                                <span className="value">2 - 3 years</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="item p-l-30">
                                                                <span className="name">size</span>
                                                                <span className="value">18 seats</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media__img">
                                                <a href="index1.html#">
                                                    <img src="images/our-class-02.jpg" alt="Our room 2" />
                                                </a>
                                                <span className="media-our-class__price">
                                                    <span className="inner">$29</span>
                                                </span>
                                            </div>
                                        </div>
                                        <hr className="line-white" />
                                        <div className="media media-our-class media-our-class--right">
                                            <div className="media__body">
                                                <h3 className="media__title">
                                                    <a href="index1.html#">creative classes</a>
                                                </h3>
                                                <span className="date-time">08:00 am - 05:00 pm</span>
                                                <span className="date-time">April 29, 2020</span>
                                                <div className="media-our-class__info">
                                                    <div className="row no-gutters">
                                                        <div className="col-6">
                                                            <div className="item has-seprator">
                                                                <span className="name">age</span>
                                                                <span className="value">4 - 5 years</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="item p-l-30">
                                                                <span className="name">size</span>
                                                                <span className="value">25 seats</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media__img">
                                                <a href="index1.html#">
                                                    <img src="images/our-class-04.jpg" alt="Our room 4" />
                                                </a>
                                                <span className="media-our-class__price">
                                                    <span className="inner">$26</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="learn-more text-center m-t-60">
                                        <a className="au-btn au-btn--pink" href="index1.html#">Conoce más
                                            <i className="zmdi zmdi-chevron-right"></i>
                                            <i className="zmdi zmdi-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* END OUR ROOMS*/}

                    {/* ACTIVITIES*/}
                    <Activities />
                    {/* END ACTIVITIES*/}

                    {/* GRADUATION*/}
                    <section className="section">
                        <div className="container-fluid">
                            <div className="row no-gutters row--no-padding">
                                <div className="col-lg-6">
                                    <div className="row no-gutters">
                                        <div className="col-lg-6">
                                            <div className="media media-gradu">
                                                <div className="media__overlay">
                                                    <div className="media__overlay-inner"></div>
                                                </div>
                                                <div className="media__img">
                                                    <img src="images/gradu-06.jpg" alt="Gradu 1" />
                                                </div>
                                                <div className="media__body">
                                                    <div className="media__tool">
                                                        <a className="au-icon" href="images/gradu-06.jpg" data-lightbox="gradu">
                                                            <i className="fas fa-expand-arrows-alt"></i>
                                                        </a>
                                                        <a className="au-icon" href="index1.html#">
                                                            <i className="fas fa-link"></i>
                                                        </a>
                                                    </div>
                                                    <h4 className="media__title title title--white title--md">
                                                        <a href="index1.html#">Graduation Ceremony</a>
                                                    </h4>
                                                    <span className="date-time">April 29,2020</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="media media-gradu">
                                                <div className="media__overlay">
                                                    <div className="media__overlay-inner"></div>
                                                </div>
                                                <div className="media__img">
                                                    <img src="images/gradu-01.jpg" alt="Gradu 2" />
                                                </div>
                                                <div className="media__body">
                                                    <div className="media__tool">
                                                        <a className="au-icon" href="images/gradu-01.jpg" data-lightbox="gradu">
                                                            <i className="fas fa-expand-arrows-alt"></i>
                                                        </a>
                                                        <a className="au-icon" href="index1.html#">
                                                            <i className="fas fa-link"></i>
                                                        </a>
                                                    </div>
                                                    <h4 className="media__title title title--white title--md">
                                                        <a href="index1.html#">Cute Girl</a>
                                                    </h4>
                                                    <span className="date-time">April 12,2020</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="media media-gradu">
                                        <div className="media__overlay">
                                            <div className="media__overlay-inner"></div>
                                        </div>
                                        <div className="media__img">
                                            <img src="images/gradu-02.jpg" alt="Gradu 3" />
                                        </div>
                                        <div className="media__body">
                                            <div className="media__tool">
                                                <a className="au-icon" href="images/gradu-02.jpg" data-lightbox="gradu">
                                                    <i className="fas fa-expand-arrows-alt"></i>
                                                </a>
                                                <a className="au-icon" href="index1.html#">
                                                    <i className="fas fa-link"></i>
                                                </a>
                                            </div>
                                            <h4 className="media__title title title--white title--md">
                                                <a href="index1.html#">Suprising Boy</a>
                                            </h4>
                                            <span className="date-time">May 29,2020</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="media media-gradu">
                                        <div className="media__overlay">
                                            <div className="media__overlay-inner"></div>
                                        </div>
                                        <div className="media__img">
                                            <img src="images/gradu-03.jpg" alt="Gradu 4" />
                                        </div>
                                        <div className="media__body">
                                            <div className="media__tool">
                                                <a className="au-icon" href="images/gradu-03.jpg" data-lightbox="gradu">
                                                    <i className="fas fa-expand-arrows-alt"></i>
                                                </a>
                                                <a className="au-icon" href="index1.html#">
                                                    <i className="fas fa-link"></i>
                                                </a>
                                            </div>
                                            <h4 className="media__title title title--white title--md">
                                                <a href="index1.html#">The Twins</a>
                                            </h4>
                                            <span className="date-time">March 26, 2020</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row no-gutters">
                                        <div className="col-lg-6">
                                            <div className="media media-gradu">
                                                <div className="media__overlay">
                                                    <div className="media__overlay-inner"></div>
                                                </div>
                                                <div className="media__img">
                                                    <img src="images/gradu-04.jpg" alt="Gradu 5" />
                                                </div>
                                                <div className="media__body">
                                                    <div className="media__tool">
                                                        <a className="au-icon" href="images/gradu-04.jpg" data-lightbox="gradu">
                                                            <i className="fas fa-expand-arrows-alt"></i>
                                                        </a>
                                                        <a className="au-icon" href="index1.html#">
                                                            <i className="fas fa-link"></i>
                                                        </a>
                                                    </div>
                                                    <h4 className="media__title title title--white title--md">
                                                        <a href="index1.html#">Grand & Kid</a>
                                                    </h4>
                                                    <span className="date-time">April 29,2020</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="media media-gradu">
                                                <div className="media__overlay">
                                                    <div className="media__overlay-inner"></div>
                                                </div>
                                                <div className="media__img">
                                                    <img src="images/gradu-05.jpg" alt="Gradu 6" />
                                                </div>
                                                <div className="media__body">
                                                    <div className="media__tool">
                                                        <a className="au-icon" href="images/gradu-05.jpg" data-lightbox="gradu">
                                                            <i className="fas fa-expand-arrows-alt"></i>
                                                        </a>
                                                        <a className="au-icon" href="index1.html#">
                                                            <i className="fas fa-link"></i>
                                                        </a>
                                                    </div>
                                                    <h4 className="media__title title title--white title--md">
                                                        <a href="index1.html#">Crayon Girl</a>
                                                    </h4>
                                                    <span className="date-time">April 1, 2020</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* END GRADUATION*/}

                    {/* TEACHER*/}
                    <section className="section p-t-125 p-b-85 p-md-t-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="section-heading section-heading-1">
                                        <h2 className="section-heading__title">Our Teacher</h2>
                                        <div className="section-heading__line">
                                            <img src="images/icon/line-blue.png" alt="Line" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="media media-teacher">
                                        <div className="media__img">
                                            <a href="index1.html#">
                                                <img src="images/teacher-01.jpg" alt="Teacher 1" />
                                            </a>
                                            <div className="media__tool">
                                                <a className="au-icon au-icon-2" href="index1.html#">
                                                    <i className="zmdi zmdi-facebook-box"></i>
                                                </a>
                                                <a className="au-icon au-icon-2" href="index1.html#">
                                                    <i className="zmdi zmdi-twitter"></i>
                                                </a>
                                                <a className="au-icon au-icon-2" href="index1.html#">
                                                    <i className="zmdi zmdi-instagram"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="media__body">
                                            <h4 className="media__title title">
                                                <a href="index1.html#">Rose Alexander</a>
                                            </h4>
                                            <span className="media__desc">Managing Director</span>
                                        </div>
                                    </div>
                                    <hr className="hr-2" />
                                    <ul className="list-teacher-info m-md-b-40">
                                        <li>
                                            <span>Excepteur sint occaecat cupidatat non proident</span>
                                        </li>
                                        <li>
                                            <span>There are many variations of passages of Lorem Ipsum available</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="media media-teacher m-b-20 m-md-b-30">
                                                <div className="media__img">
                                                    <a href="index1.html#">
                                                        <img src="images/teacher-02.jpg" alt="Teacher 2" />
                                                    </a>
                                                    <div className="media__tool">
                                                        <a className="au-icon au-icon-2" href="index1.html#">
                                                            <i className="zmdi zmdi-facebook-box"></i>
                                                        </a>
                                                        <a className="au-icon au-icon-2" href="index1.html#">
                                                            <i className="zmdi zmdi-twitter"></i>
                                                        </a>
                                                        <a className="au-icon au-icon-2" href="index1.html#">
                                                            <i className="zmdi zmdi-instagram"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="media__body">
                                                    <h4 className="media__title title">
                                                        <a href="index1.html#">Catherine Wade</a>
                                                    </h4>
                                                    <span className="media__desc">Music Teacher</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="media media-teacher m-b-20 m-md-b-30">
                                                <div className="media__img">
                                                    <a href="index1.html#">
                                                        <img src="images/teacher-03.jpg" alt="Teacher 3" />
                                                    </a>
                                                    <div className="media__tool">
                                                        <a className="au-icon au-icon-2" href="index1.html#">
                                                            <i className="zmdi zmdi-facebook-box"></i>
                                                        </a>
                                                        <a className="au-icon au-icon-2" href="index1.html#">
                                                            <i className="zmdi zmdi-twitter"></i>
                                                        </a>
                                                        <a className="au-icon au-icon-2" href="index1.html#">
                                                            <i className="zmdi zmdi-instagram"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="media__body">
                                                    <h4 className="media__title title">
                                                        <a href="index1.html#">Grace Johnson</a>
                                                    </h4>
                                                    <span className="media__desc">Art Teacher</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="media media-teacher m-b-20 m-md-b-30">
                                                <div className="media__img">
                                                    <a href="index1.html#">
                                                        <img src="images/teacher-04.jpg" alt="Teacher 4" />
                                                    </a>
                                                    <div className="media__tool">
                                                        <a className="au-icon au-icon-2" href="index1.html#">
                                                            <i className="zmdi zmdi-facebook-box"></i>
                                                        </a>
                                                        <a className="au-icon au-icon-2" href="index1.html#">
                                                            <i className="zmdi zmdi-twitter"></i>
                                                        </a>
                                                        <a className="au-icon au-icon-2" href="index1.html#">
                                                            <i className="zmdi zmdi-instagram"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="media__body">
                                                    <h4 className="media__title title">
                                                        <a href="index1.html#">Victoria Lawson</a>
                                                    </h4>
                                                    <span className="media__desc">Drawing Teacher</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="media media-teacher m-b-20 m-md-b-30">
                                                <div className="media__img">
                                                    <a href="index1.html#">
                                                        <img src="images/teacher-05.jpg" alt="Teacher 5" />
                                                    </a>
                                                    <div className="media__tool">
                                                        <a className="au-icon au-icon-2" href="index1.html#">
                                                            <i className="zmdi zmdi-facebook-box"></i>
                                                        </a>
                                                        <a className="au-icon au-icon-2" href="index1.html#">
                                                            <i className="zmdi zmdi-twitter"></i>
                                                        </a>
                                                        <a className="au-icon au-icon-2" href="index1.html#">
                                                            <i className="zmdi zmdi-instagram"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="media__body">
                                                    <h4 className="media__title title">
                                                        <a href="index1.html#">Stephanie Arnold</a>
                                                    </h4>
                                                    <span className="media__desc">Language Teacher</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* END TEACHER*/}

                    {/* BLOG*/}
                    <Blog />
                    {/* END BLOG*/}

                    <Footer />
                </main>
                {/* END MAIN*/}

                <div className="modal fade modal-video" tabIndex="-1" role="dialog" aria-hidden="true" id="modal-video">
                    <div className="modal-dialog modal-video__dialog" role="document" data-dismiss="modal">
                        <div className="modal-video__close" data-dismiss="modal" aria-label="Close">×</div>
                        <div className="modal-video__wrapper">
                            <div className="modal-video__holder">
                                <img src="images/video-01.jpg" alt="IMG" />
                            </div>
                            <div className="modal-video__video">
                                <iframe src="https://www.youtube.com/embed/qwzDYq8x1hs?ecver=1"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
