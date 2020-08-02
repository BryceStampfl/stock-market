import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
    const navLinks = [
        {
            title: "Dashboard",
            img: "/images/sidebar/home.svg",
            path: "/Dashboard"
        },
        {
            title: "Link Two",
            img: "/images/sidebar/account_circle.svg",
            path: "/Dashboard2"
        },
        {
            title: "Link Three",
            img: "/images/sidebar/autorenew.svg",
            path: "/Dashboard3"
        },
        {
            title: "Link Four",
            img: "/images/sidebar/dashboard.svg",
            path: "/Dashboard4"
        },
        {
            title: "Link Five",
            img: "/images/sidebar/account_balance.svg",
            path: "/Dashboard5"
        },
    ]
    const logoUrl = "/images/sidebar/dashboard.svg"
    const logoName = "Company"

    const links = navLinks.map((link) => (

        <NavLink key={link.title} to={link.path} className="nav-item" activeClassName="activeLink text-decoration-none">
            <Row className="m-0 row" id="row">
                <img className="link-logo-img" src={link.img}></img>
                <p>{link.title}</p>
            </Row>
        </NavLink>
    ))

    return (
        <div
            className="sidebar">
            <div className="logo">

                <img className="logo-img" src={logoUrl}></img>
                {logoName}
            </div>

            <div className="sidebar-wrapper">
                <Nav className="flex-column nav" id="nav">
                    {links}
                </Nav>
            </div>
        </div>
    )
}
export default Sidebar;
