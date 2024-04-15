import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../App";

const Navigation = () => {
    const { user } = useAuth();

    const pageLinks = [
        { label: "Home", link: "/" },
        { label: "About", link: "/about" },
        { label: "Contact", link: "/contact" },
        // Conditionally render these based on user's login status
        ...(user
            ? [
                  { label: "Resources", link: "/resources" },
                  { label: "Create Resource", link: "/resources/create" },
                  { label: "Profile", link: `/profile` },
                  { label: "Logout", link: "/logout" },
              ]
            : [
                  { label: "Register", link: "/register" },
                  { label: "Login", link: "/login" },
              ]),
    ];

    return (
        <nav>
            <div>
                <Link to="/">
                    MyApp
                </Link>
                <ul>
                    {pageLinks.map(({ label, link }, index) => (
                        <li key={index}>
                            <Link to={link}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
