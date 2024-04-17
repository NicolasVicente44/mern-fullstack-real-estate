import React from "react";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const Testimonial = () => {
  return (
    <section className="self-stretch overflow-hidden flex flex-col items-start justify-start py-[5rem] px-[10.312rem] box-border gap-[4rem] max-w-full text-left text-[3rem] text-black font-playfair-display mq750:gap-[2rem] mq750:py-[3.25rem] mq750:px-[5.125rem] mq750:box-border mq450:gap-[1rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
      <h1 className="m-0 w-[23.375rem] relative text-inherit tracking-[-0.02em] leading-[124%] font-extrabold font-inherit inline-block max-w-full mq750:text-[2.375rem] mq750:leading-[3rem] mq450:text-[1.813rem] mq450:leading-[2.25rem]">
        Sound Too Good To Be True?
      </h1>
      <div className="self-stretch flex flex-col items-end justify-start py-[0rem] pr-[0rem] pl-[15rem] box-border gap-[3rem] max-w-full text-[2.25rem] font-inter lg:pl-[7.5rem] lg:box-border mq750:gap-[1.5rem] mq750:pl-[3.75rem] mq750:box-border mq450:pl-[1.25rem] mq450:box-border">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[3rem] max-w-full mq450:gap-[1.5rem]">
          <img
            className="h-[2.481rem] w-[3.563rem] relative"
            loading="lazy"
            alt=""
            src={testimonial1}
          />
          <h1 className="m-0 flex-1 relative text-inherit tracking-[0.01em] leading-[160%] font-normal font-inherit inline-block min-w-[31.063rem] max-w-full lg:min-w-full mq750:text-[1.813rem] mq750:leading-[2.875rem] mq450:text-[1.375rem] mq450:leading-[2.188rem]">
            “We just wanted to thank you for this fantastic website! We are so
            grateful for being able to advertise our Petite cabin and receive
            feedback from people from all over the U.S. and even further.”
          </h1>
        </div>
        <div className="w-[47.813rem] flex flex-row items-center justify-between gap-[1.25rem] max-w-full text-[1rem] mq450:flex-wrap">
          <div className="relative tracking-[0.01em] leading-[1.625rem]">
            Adam Morph — CEO Alfatech
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.5rem]">
            <img
              className="h-[3rem] w-[3rem] relative rounded overflow-hidden shrink-0 min-h-[3rem]"
              alt=""
              src={testimonial2}
            />
            <img
              className="h-[3rem] w-[3rem] relative rounded overflow-hidden shrink-0 min-h-[3rem]"
              alt=""
              src={testimonial3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
