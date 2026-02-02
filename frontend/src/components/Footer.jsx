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
                                <span className="copyright__text">© 2026 Seeth Code Development.</span>
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

            <div id="to-top" style={{ display: 'block', cursor: 'pointer' }}>
                <a href="https://wa.me/51960580522?text=Hola%20quiero%20informacion%20sobre%20las%20caratulas%2C%20vengo%20de%20la%20WEB" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="74" height="74" viewBox="0 0 74 74">
                        <defs>
                            <filter id="Elipse_2" x="0" y="0" width="74" height="74" filterUnits="userSpaceOnUse">
                                <feOffset dy="3" input="SourceAlpha"></feOffset>
                                <feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur>
                                <feFlood floodColor="#aee1b3" floodOpacity="0.388"></feFlood>
                                <feComposite operator="in" in2="blur"></feComposite>
                                <feComposite in="SourceGraphic"></feComposite>
                            </filter>
                        </defs>
                        <g id="Componente_10_2" data-name="Componente 10 – 2" transform="translate(9 6)">
                            <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Elipse_2)">
                                <circle id="Elipse_2-2" data-name="Elipse 2" cx="28" cy="28" r="28" transform="translate(9 6)" fill="#25d366"></circle>
                            </g>
                            <g id="Grupo_113" data-name="Grupo 113" transform="translate(13.698 13.698)">
                                <path id="Trazado_36" data-name="Trazado 36" d="M292.942,943.505a14.316,14.316,0,0,1-21.2,12.415l-7.91,2.512,2.577-7.609a14.032,14.032,0,0,1-2.048-7.318,14.289,14.289,0,0,1,28.577,0Zm-14.291-11.917a11.978,11.978,0,0,0-12.013,11.919,11.8,11.8,0,0,0,2.289,6.989l-1.5,4.425,4.614-1.466a11.951,11.951,0,1,0,6.61-21.866Zm7.217,15.184c-.088-.145-.322-.231-.672-.407s-2.073-1.015-2.393-1.126-.555-.176-.789.171-.9,1.132-1.108,1.365-.41.262-.76.088a9.647,9.647,0,0,1-2.818-1.723,10.418,10.418,0,0,1-1.946-2.408c-.205-.345-.021-.535.153-.706.156-.158.35-.407.524-.613a2.312,2.312,0,0,0,.35-.576.648.648,0,0,0-.029-.613c-.088-.174-.786-1.881-1.08-2.577s-.584-.581-.789-.581-.436-.029-.67-.029a1.286,1.286,0,0,0-.934.434,3.891,3.891,0,0,0-1.225,2.9,6.705,6.705,0,0,0,1.43,3.594c.176.231,2.424,3.856,5.984,5.247s3.56.926,4.2.867a3.518,3.518,0,0,0,2.361-1.65A2.879,2.879,0,0,0,285.868,946.773Z" transform="translate(-263.836 -929.326)" fill="#fff"></path>
                            </g>
                        </g>
                    </svg>
                </a>
            </div>
        </>
    );
};

export default Footer;
