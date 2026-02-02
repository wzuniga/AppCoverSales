import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScroll && window.pageYOffset > 400) {
                setShowScroll(true);
            } else if (showScroll && window.pageYOffset <= 400) {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showScroll]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="col-md-12">
                        <div className="footer-wrap">
                            <div className="footer__logo">
                                <a href="index1.html#">
                                    <img src="images/icon/logo.png" alt="Jobby" />
                                </a>
                            </div>
                            <ul className="list-unstyled list-inline footer__list">
                                <li className="list-inline-item">
                                    <a href="index1.html#">about us</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="index1.html#">contact us</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="index1.html#">classes</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="index1.html#">teacher</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="index1.html#">blog</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="index1.html#">shop</a>
                                </li>
                            </ul>
                            <form className="form form--icon form__footer" method="post">
                                <input type="email" name="email-footer" placeholder="Your e-mail here..." />
                                <button className="btn-submit-1" type="submit">
                                    <img src="images/icon/send.png" alt="send" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
            <section className="section copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copyright-wrap">
                                <ul className="list-unstyled list-inline list-social list-social-2">
                                    <li className="list-inline-item">
                                        <a className="ic-fb" href="index1.html#">
                                            <i className="zmdi zmdi-facebook-box"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="ic-twi" href="index1.html#">
                                            <i className="zmdi zmdi-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="ic-insta" href="index1.html#">
                                            <i className="zmdi zmdi-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                                <span className="copyright__text">© 2019 JOBBY. Get The Theme</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* conservar comentario */}
            {/* <div id="to-top" style={{ display: showScroll ? 'block' : 'none', cursor: 'pointer' }} onClick={scrollToTop}>
                <a>
                    <img src="images/icon/to-top.png" alt="To Top" />
                </a>
            </div> */}

            <div id="to-top" style={{ display: showScroll ? 'block' : 'none', cursor: 'pointer' }} onClick={scrollToTop}>
                <a>
                    <img src="images/icon/to-top.png" alt="To Top" />
                </a>
            </div>
        </>
    );
};

export default Footer;
