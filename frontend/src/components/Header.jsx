import React, { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleSubMenu = (e) => {
        e.preventDefault();
        const subMenu = e.currentTarget.nextElementSibling;
        if (subMenu) {
            subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
        }
    };

    return (
        <header id="header">
            {/* <section className="top-contact">
                <div className="container">
                    <div className="top-contact-inner">
                        <div className="top-contact__right">

                        </div>
                    </div>
                </div>
            </section> */}
            <div className="header header-1 d-none d-lg-block js-header-1">
                <div className="header__bar">
                    <div className="container">
                        <div className="header__content">
                            <div className="logo">
                                <a href="index1.html#">
                                    <img src="images/icon/logo.png" alt="Jobby" />
                                </a>
                            </div>
                            <nav className="header-navbar">
                                <ul className="list-unstyled">
                                    <li className="header-navbar__item has-sub">
                                        <a href="index1.html">
                                            <span className="bg-link">Home</span>
                                        </a>
                                        <ul className="list-unstyled header-navbar-child first d-block">
                                            <li>
                                                <a href="index1.html">HomePage 1</a>
                                            </li>
                                            <li>
                                                <a href="index2.html">HomePage 2</a>
                                            </li>
                                            <li>
                                                <a href="index3.html">HomePage 3</a>
                                            </li>
                                            <li>
                                                <a href="index4.html">HomePage 4</a>
                                            </li>
                                            <li>
                                                <a href="index5.html">HomePage 5</a>
                                            </li>
                                            <li>
                                                <a href="index6.html">HomePage 6</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="header-navbar__item has-sub">
                                        <a href="about-us.html">
                                            <span className="bg-link">page</span>
                                        </a>
                                        <ul className="list-unstyled header-navbar-child first">
                                            <li>
                                                <a href="about-us.html">About Us</a>
                                            </li>
                                            <li>
                                                <a href="programs.html">Programs</a>
                                            </li>
                                            <li className="has-sub">
                                                <a href="gallery-grid.html">Gallery</a>
                                                <ul className="list-unstyled header-navbar-child second">
                                                    <li>
                                                        <a href="gallery-grid.html">Gallery Grid</a>
                                                    </li>
                                                    <li>
                                                        <a href="gallery-cobbles.html">Gallery Cobbles</a>
                                                    </li>
                                                    <li>
                                                        <a href="gallery-masonry.html">Gallery Masonry</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="event.html">Event</a>
                                            </li>
                                            <li>
                                                <a href="coming-soon.html">Coming Soon</a>
                                            </li>
                                            <li>
                                                <a href="404error.html">404 Error</a>
                                            </li>
                                            <li>
                                                <a href="contact-us.html">Contact Us</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="header-navbar__item has-sub">
                                        <a href="classes.html">
                                            <span className="bg-link">Classes</span>
                                        </a>
                                        <ul className="list-unstyled header-navbar-child first">
                                            <li>
                                                <a href="classes.html">Classes</a>
                                            </li>
                                            <li>
                                                <a href="classes-single.html">Classes single</a>
                                            </li>
                                            <li>
                                                <a href="classes-schedule.html">classes schedule</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="header-navbar__item has-sub">
                                        <a href="teachers.html">
                                            <span className="bg-link">teacher</span>
                                        </a>
                                        <ul className="list-unstyled header-navbar-child first">
                                            <li>
                                                <a href="teachers.html">teacher</a>
                                            </li>
                                            <li>
                                                <a href="teacher-single.html">teacher single</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="header-navbar__item has-sub">
                                        <a href="blog-masonry.html">
                                            <span className="bg-link">blog</span>
                                        </a>
                                        <ul className="list-unstyled header-navbar-child first">
                                            <li>
                                                <a href="blog-masonry.html">masonry</a>
                                            </li>
                                            <li className="has-sub">
                                                <a href="blog-right-sidebar.html">standard</a>
                                                <ul className="list-unstyled header-navbar-child second is-left">
                                                    <li>
                                                        <a href="blog-right-sidebar.html">right sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-left-sidebar.html">left sidebar</a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-no-sidebar.html">no sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="blog-single.html">single</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="header-navbar__item has-sub">
                                        <a className="p-r-0" href="product-list.html">
                                            <span className="bg-link">shop</span>
                                        </a>
                                        <ul className="list-unstyled header-navbar-child first is-left">
                                            <li>
                                                <a href="product-list.html">product list</a>
                                            </li>
                                            <li>
                                                <a href="product-single.html">product single</a>
                                            </li>
                                            <li className="has-sub">
                                                <a href="index1.html#">shop page</a>
                                                <ul className="list-unstyled header-navbar-child second is-left">
                                                    <li>
                                                        <a href="my-account.html">my account</a>
                                                    </li>
                                                    <li>
                                                        <a href="cart.html">cart</a>
                                                    </li>
                                                    <li>
                                                        <a href="checkout.html">checkout</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="modal-search" role="dialog">
                <button className="close" type="button" data-dismiss="modal">
                    <i className="zmdi zmdi-close"></i>
                </button>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form className="form form--icon" method="POST">
                                <input type="text" name="search" placeholder="Search here..." />
                                <button className="btn-submit-1" type="submit">
                                    <i className="fa fa-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-mobile js-header-mobile d-block d-lg-none">
                <div className="header-mobile__bar">
                    <div className="container-fluid clearfix">
                        <a className="logo" href="index1.html">
                            <img src="images/icon/logo.png" alt="Jooby" />
                        </a>
                        <button
                            className={`hamburger hamburger--slider float-right ${isMobileMenuOpen ? 'is-active' : ''}`}
                            type="button"
                            onClick={toggleMobileMenu}
                        >
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
                <nav className="navbar-mobile" style={{ display: isMobileMenuOpen ? 'block' : 'none' }}>
                    <ul className="navbar-mobile__list list-unstyled">
                        <li className="has-sub">
                            <a href="index1.html" onClick={toggleSubMenu}>Home</a>
                            <ul className="navbar-mobile__child list-unstyled">
                                <li>
                                    <a href="index1.html">HomePage 1</a>
                                </li>
                                <li>
                                    <a href="index2.html">HomePage 2</a>
                                </li>
                                <li>
                                    <a href="index3.html">HomePage 3</a>
                                </li>
                                <li>
                                    <a href="index4.html">HomePage 4</a>
                                </li>
                                <li>
                                    <a href="index5.html">HomePage 5</a>
                                </li>
                                <li>
                                    <a href="index6.html">HomePage 6</a>
                                </li>
                            </ul>
                        </li>
                        <li className="has-sub">
                            <a href="about-us.html" onClick={toggleSubMenu}>page</a>
                            <ul className="list-unstyled navbar-mobile__child first">
                                <li>
                                    <a href="about-us.html">About us</a>
                                </li>
                                <li>
                                    <a href="programs.html">Programs</a>
                                </li>
                                <li className="has-sub">
                                    <a href="gallery-grid.html" onClick={toggleSubMenu}>Gallery</a>
                                    <ul className="list-unstyled navbar-mobile__child second">
                                        <li>
                                            <a href="gallery-grid.html">Gallery Grid</a>
                                        </li>
                                        <li>
                                            <a href="gallery-cobbles.html">Gallery Cobbles</a>
                                        </li>
                                        <li>
                                            <a href="gallery-masonry.html">Gallery Masonry</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="event.html">Event</a>
                                </li>
                                <li>
                                    <a href="coming-soon.html">Coming soon</a>
                                </li>
                                <li>
                                    <a href="404error.html">404 error</a>
                                </li>
                                <li>
                                    <a href="contact-us.html">Contact us</a>
                                </li>
                            </ul>
                        </li>
                        <li className="has-sub">
                            <a href="classes.html" onClick={toggleSubMenu}>classes</a>
                            <ul className="list-unstyled navbar-mobile__child first">
                                <li>
                                    <a href="classes.html">Classes</a>
                                </li>
                                <li>
                                    <a href="classes-single.html">Classes single</a>
                                </li>
                                <li>
                                    <a href="classes-schedule.html">classes schedule</a>
                                </li>
                            </ul>
                        </li>
                        <li className="has-sub">
                            <a href="teachers.html" onClick={toggleSubMenu}>teacher</a>
                            <ul className="list-unstyled navbar-mobile__child first">
                                <li>
                                    <a href="teachers.html">teacher</a>
                                </li>
                                <li>
                                    <a href="teacher-single.html">teacher single</a>
                                </li>
                            </ul>
                        </li>
                        <li className="has-sub">
                            <a href="blog-masonry.html" onClick={toggleSubMenu}>blog</a>
                            <ul className="list-unstyled navbar-mobile__child first">
                                <li>
                                    <a href="blog-masonry.html">masonry</a>
                                </li>
                                <li className="has-sub">
                                    <a href="blog-right-sidebar.html" onClick={toggleSubMenu}>standard</a>
                                    <ul className="list-unstyled navbar-mobile__child second">
                                        <li>
                                            <a href="blog-right-sidebar.html">right sidebar</a>
                                        </li>
                                        <li>
                                            <a href="blog-left-sidebar.html">left sidebar</a>
                                        </li>
                                        <li>
                                            <a href="blog-no-sidebar.html">no sidebar</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="blog-single.html">single</a>
                                </li>
                            </ul>
                        </li>
                        <li className="has-sub">
                            <a href="product-list.html" onClick={toggleSubMenu}>shop</a>
                            <ul className="list-unstyled navbar-mobile__child first">
                                <li>
                                    <a href="product-list.html">product list</a>
                                </li>
                                <li>
                                    <a href="product-single.html">product single</a>
                                </li>
                                <li className="has-sub">
                                    <a href="index1.html#" onClick={toggleSubMenu}>shop page</a>
                                    <ul className="list-unstyled navbar-mobile__child secon">
                                        <li>
                                            <a href="my-account.html">my account</a>
                                        </li>
                                        <li>
                                            <a href="cart.html">cart</a>
                                        </li>
                                        <li>
                                            <a href="checkout.html">checkout</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
