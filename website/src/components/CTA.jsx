import React from 'react';
import CTA1 from '../assets/images/CTA1.png';

const CTA = () => {
    return (
      <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
        <section className="self-stretch [background:linear-gradient(180deg,_#f9f9f9,_rgba(255,_255,_255,_0))] overflow-hidden flex flex-row items-center justify-start py-[4rem] px-[8.5rem] box-border gap-[3rem] max-w-full text-center text-[4rem] text-black font-playfair-display lg:flex-wrap mq750:gap-[1.5rem] mq750:pl-[4.25rem] mq750:pr-[4.25rem] mq750:box-border mq450:py-[1.688rem] mq450:px-[1.25rem] mq450:box-border mq1050:pt-[2.625rem] mq1050:pb-[2.625rem] mq1050:box-border">
          <img
            className="w-[31.063rem] relative max-h-full object-contain max-w-full lg:flex-1"
            loading="lazy"
            alt=""
            src={CTA1}
          />
          <div className="flex-1 flex flex-col items-center justify-start gap-[3rem] min-w-[25.313rem] max-w-full mq750:gap-[1.5rem] mq750:min-w-full">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[100%] font-extrabold font-inherit mq750:text-[3.188rem] mq750:leading-[3.188rem] mq450:text-[2.375rem] mq450:leading-[2.375rem]">
              <p className="m-0">{`Realize your `}</p>
              <p className="m-0">dream project</p>
              <p className="m-0">
                <span>{`with `}</span>
                <span className="text-dodgerblue">Archmove</span>
              </p>
            </h1>
            <button className="cursor-pointer [border:none] py-[0.5rem] px-[2rem] bg-dodgerblue rounded overflow-hidden flex flex-row items-center justify-start whitespace-nowrap hover:bg-royalblue">
              <div className="relative text-[0.875rem] tracking-[0.01em] leading-[2.5rem] font-semibold font-inter text-white text-center">
                FREE CONSULTATION
              </div>
            </button>
          </div>
        </section>
      </div>
    );
  };
  
  export default CTA;