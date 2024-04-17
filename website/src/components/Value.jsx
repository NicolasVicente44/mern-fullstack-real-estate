
import React from 'react';
import value1 from '../assets/images/value1.png';
import value2 from '../assets/images/value2.png';
import value3 from '../assets/images/value3.png';
import value4 from '../assets/images/value4.png';

const Value = () => {
    return (
      <section className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[5rem] px-[1.25rem] box-border gap-[4rem] max-w-full text-left text-[1rem] text-black font-inter mq750:gap-[2rem] mq450:gap-[1rem] mq450:pt-[2.125rem] mq450:pb-[2.125rem] mq450:box-border mq1050:pt-[3.25rem] mq1050:pb-[3.25rem] mq1050:box-border">
        <div className="w-[73rem] flex flex-row items-start justify-between [row-gap:20px] max-w-full gap-[0rem] lg:flex-wrap">
          <img
            className="w-[33.438rem] relative max-h-full object-cover min-h-[38.125rem] max-w-full lg:flex-1"
            loading="lazy"
            alt=""
            src={value1}
          />
          <div className="w-[39.563rem] flex flex-col items-center justify-center py-[1.875rem] px-[1.25rem] box-border gap-[2.5rem] min-w-[39.563rem] max-w-full lg:flex-1 mq750:pt-[1.25rem] mq750:pb-[1.25rem] mq750:box-border mq750:min-w-full mq450:gap-[1.25rem]">
            <h1 className="m-0 w-[24.563rem] relative text-[3rem] tracking-[-0.02em] leading-[124%] font-extrabold font-playfair-display inline-block max-w-full mq750:text-[2.375rem] mq750:leading-[3rem] mq450:text-[1.813rem] mq450:leading-[2.25rem]">
              <p className="m-0">{`Build your needs `}</p>
              <p className="m-0">with Archmove</p>
            </h1>
            <div className="w-[25.438rem] overflow-hidden flex flex-row items-start justify-start gap-[2.375rem] max-w-full mq450:flex-wrap mq450:gap-[1.188rem]">
              <img
                className="h-[4rem] w-[4rem] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src={value2}
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] min-w-[12.375rem]">
                <b className="self-stretch relative tracking-[0.01em] leading-[1.625rem]">
                  100% guaranteed project completion
                </b>
                <div className="self-stretch relative tracking-[0.01em] leading-[160%] text-gray-200">
                  Build safe, comfortable and transparent with a project
                  management application with a joint account.
                </div>
              </div>
            </div>
            <div className="w-[25.563rem] overflow-hidden flex flex-row items-start justify-start gap-[2.5rem] max-w-full mq450:flex-wrap mq450:gap-[1.25rem]">
              <img
                className="h-[4rem] w-[4rem] relative overflow-hidden shrink-0"
                alt=""
                src={value3}
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] min-w-[12.375rem]">
                <b className="self-stretch relative tracking-[0.01em] leading-[1.625rem]">
                  No additional fees
                </b>
                <div className="self-stretch h-[4.875rem] relative tracking-[0.12px] leading-[160%] text-gray-200 inline-block">
                  There are no hidden costs. The value of the offer you get is the
                  value you paid.
                </div>
              </div>
            </div>
            <div className="w-[25.5rem] overflow-hidden flex flex-row items-start justify-start gap-[2.437rem] max-w-full mq450:flex-wrap mq450:gap-[1.188rem]">
              <img
                className="h-[4rem] w-[4rem] relative overflow-hidden shrink-0"
                alt=""
                src={value4}
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] min-w-[12.375rem]">
                <b className="self-stretch relative tracking-[0.01em] leading-[1.625rem]">
                  Get escort from the Team
                </b>
                <div className="self-stretch relative tracking-[0.01em] leading-[160%] text-gray-200">
                  Monitor reports from the Arsitag team who check directly in the
                  field.
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[0.5rem] px-[2rem] bg-dodgerblue rounded overflow-hidden flex flex-row items-center justify-start whitespace-nowrap hover:bg-royalblue">
          <div className="relative text-[0.875rem] tracking-[0.01em] leading-[2.5rem] font-semibold font-inter text-white text-center inline-block min-w-[7.688rem]">
            Free Consultation
          </div>
        </button>
      </section>
    );
  };
  
  export default Value;
  