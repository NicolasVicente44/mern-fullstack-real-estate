import React from "react";
import heroImage from "../assets/images/hero.png";
import { Link } from "react-router-dom";
import { useAuth } from "../App";

const Hero = () => {
  const { user } = useAuth();

  return (
    <section className="self-stretch flex flex-col items-center justify-start py-[4rem] px-[1.25rem] box-border gap-[4rem] max-w-full text-left text-[6rem] text-black font-playfair-display mq750:gap-[2rem] mq450:gap-[1rem] mq450:pt-[1.688rem] mq450:pb-[1.688rem] mq450:box-border mq1050:pt-[2.625rem] mq1050:pb-[2.625rem] mq1050:box-border">
      <h1 className="m-0 w-[73rem] relative text-inherit tracking-[-0.02em] leading-[100%] font-extrabold font-inherit inline-block max-w-full mq750:text-[3rem] mq750:leading-[3.625rem] mq450:text-[1.813rem] mq450:leading-[2.375rem]">
        <p className="m-0">Find Your</p>
        <p className="m-0">
          <span>{`Dream `}</span>
          <span className="text-black">
            <u>Home</u>
          </span>
        </p>
      </h1>
      <div className="w-[73rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-[1rem] font-inter lg:flex-wrap">
        <div className="w-[19.063rem] flex flex-col items-start justify-start gap-[2.5rem] min-w-[19.063rem] lg:flex-1 mq450:gap-[1.25rem]">
          <div className="self-stretch relative tracking-[0.01em] leading-[160%]">
            "Experience the assurance of 100% guaranteed safety, comfort, and
            transparency with <strong>Proper Pulse</strong>.
          </div>
          <button className="cursor-pointer [border:none] py-[0.5rem] px-[2rem] bg-black rounded overflow-hidden flex flex-row items-center justify-start whitespace-nowrap hover:bg-royalblue">
            <div className="relative text-[0.875rem] tracking-[0.01em] leading-[2.5rem] font-semibold font-inter text-white text-center inline-block min-w-[7.688rem]">
              {user ? (
                <Link className="no-underline text-white" to={"/listings"}>
                  View Listings Near You
                </Link>
              ) : (
                <Link className="no-underline text-white" to={"/login"}>
                  View Listings Near You
                </Link>
              )}
            </div>
          </button>
        </div>
        <img
          className="w-[47.813rem] relative max-h-full object-cover max-w-full lg:flex-1"
          loading="lazy"
          alt=""
          src={heroImage}
        />
      </div>
    </section>
  );
};

export default Hero;
