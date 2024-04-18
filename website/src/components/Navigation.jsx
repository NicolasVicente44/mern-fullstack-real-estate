import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../App";
import logo from "../assets/images/proper-pulse-high-resolution-logo-black-transparent.png";

const Navigation = () => {
  const { user } = useAuth();

  const pageLinks = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Contact", link: "/contact" }, // Moved Contact link here

    ...(user ? [{ label: "Listings", link: "/listings" }] : []),
  ];

  return (
    <header className="self-stretch overflow-hidden flex flex-row items-center justify-between py-[1rem] px-[8.5rem] box-border gap-[1.25rem] max-w-full text-center text-[0.875rem] text-gray-100 font-inter mq750:pl-[2.125rem] mq750:pr-[2.125rem] mq750:box-border mq1050:pl-[4.25rem] mq1050:pr-[4.25rem] mq1050:box-border">
      <div className="w-[30.35rem] flex flex-row items-center justify-start gap-[2.5rem] max-w-full mq750:w-[6.288rem] mq750:gap-[1.25rem]">
        <a href="/">
          <img
            className=" h-[2.2rem] w-[6rem] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={logo}
          />
        </a>

        <div className="flex-1 flex flex-row items-center justify-start gap-[1.481rem] max-w-full ">
          {pageLinks.map((link, index) => (
            <Link
              key={index}
              to={link.link}
              className="no-underline text-black relative tracking-[0.01em] leading-[2.5rem] font-medium inline-block min-w-[5.625rem] whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[1.5rem]">
        {/* Conditionally render sign in or profile link */}
        {user ? (
          <Link
            to="/profile"
            className="text-black no-underline relative tracking-[0.01em] leading-[2.5rem] font-medium inline-block min-w-[2.938rem] whitespace-nowrap"
          >
            Profile
          </Link>
        ) : (
          <Link
            to="/login"
            className="text-black no-underline relative tracking-[0.01em] leading-[2.5rem] font-medium inline-block min-w-[2.938rem] whitespace-nowrap"
          >
            Sign In
          </Link>
        )}
        {/* Conditionally render logout or sign up link */}
        {user ? (
          <Link
            to="/logout"
            className="no-underline cursor-pointer border-none py-[0.25rem] px-[1.5rem] bg-black rounded overflow-hidden flex flex-row items-center justify-start whitespace-nowrap hover:bg-gray-500"
          >
            <span className="relative text-[0.875rem] tracking-[0.01em] leading-[2.5rem] font-semibold font-inter text-white text-center inline-block min-w-[3.375rem]">
              Logout
            </span>
          </Link>
        ) : (
          <Link
            to="/register"
            className="no-underline cursor-pointer border-none py-[0.25rem] px-[1.5rem] bg-black rounded overflow-hidden flex flex-row items-center justify-start whitespace-nowrap hover:bg-gray-500"
          >
            <span className="relative text-[0.875rem] tracking-[0.01em] leading-[2.5rem] font-semibold font-inter text-white text-center inline-block min-w-[3.375rem]">
              Sign Up
            </span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navigation;
