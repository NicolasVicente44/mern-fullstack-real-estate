import React from "react";
import logo from "../assets/images/proper-pulse-high-resolution-logo-black-transparent.png";

const Footer = () => {
  return (
    <footer className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[5rem] px-[8.5rem] box-border max-w-full text-center text-[0.875rem] text-gray-100 font-inter mq750:pl-[4.25rem] mq750:pr-[4.25rem] mq750:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-between max-w-full gap-[1.25rem] mq1050:flex-wrap">
        <div className="w-[32.188rem] flex flex-row items-center justify-start gap-[2.5rem] max-w-full mq750:flex-wrap mq750:gap-[1.25rem]">
          <div className="relative tracking-[0.01em] leading-[2.5rem] font-medium inline-block min-w-[4rem]">
            About Us
          </div>
          <div className="relative tracking-[0.01em] leading-[2.5rem] font-medium inline-block min-w-[5.625rem]">
            How it Works
          </div>
          <div className="relative tracking-[0.01em] leading-[2.5rem] font-medium inline-block min-w-[1.75rem]">
            FAQ
          </div>
          <div className="relative tracking-[0.01em] leading-[2.5rem] font-medium inline-block min-w-[4.813rem]">
            Contact Us
          </div>
          <div className="relative tracking-[0.01em] leading-[2.5rem] font-medium inline-block min-w-[6rem]">
            Privacy Policy
          </div>
        </div>
        <img
          className=" h-[2.2rem] w-[6rem] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={logo}
        />
      </div>
    </footer>
  );
};

export default Footer;
