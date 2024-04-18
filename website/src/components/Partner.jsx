import React from "react";
import partner1 from "../assets/images/partner1.png";
import partner2 from "../assets/images/partner2.png";
import partner3 from "../assets/images/partner3.png";
import partner4 from "../assets/images/partner4.png";
import partner5 from "../assets/images/partner5.png";
import partner6 from "../assets/images/partner6.png";
import partner7 from "../assets/images/partner7.png";

const Partner = () => {
  return (
    <section className="max-w-[1400px] mx-auto self-stretch box-border overflow-hidden flex flex-col items-center justify-center pt-[4rem] px-[8.5rem] pb-[2.875rem] gap-[2.5rem] text-left text-[3rem] text-black font-akaya-kanadaka border-b-[1px] border-solid border-gainsboro mq750:gap-[1.25rem] mq750:pl-[4.25rem] mq750:pr-[4.25rem] mq750:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
      <h1 className="m-0 w-[23.375rem] relative text-inherit tracking-[-0.04em] leading-[3.75rem] font-bold font-inherit inline-block max-w-full mq750:text-[2.375rem] mq750:leading-[3rem] mq450:text-[1.813rem] mq450:leading-[2.25rem] text-center">
        Our Partners
      </h1>
      <div className="self-stretch flex flex-row items-end justify-between pt-[2.537rem] px-[1rem] pb-[2.543rem] opacity-[0.4] gap-[1.25rem] mq1050:flex-wrap">
        <div className="w-[6.419rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.243rem] box-border">
          <img
            className="min-h-[60px] self-stretch h-[1.419rem] relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={partner1}
          />
        </div>
        <div className="w-[8.994rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.312rem] box-border">
          <img
            className="self-stretch h-[1.288rem] relative max-w-full overflow-hidden shrink-0 min-h-[60px]"
            alt=""
            src={partner2}
          />
        </div>
        <div className="w-[7.731rem] flex flex-row items-start justify-start gap-[0.4rem]">
          <img
            className="h-[1.919rem] w-[1.95rem] relative object-cover min-h-[60px]"
            alt=""
            src={partner3}
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem]">
            <img
              className="self-stretch h-[1.075rem] relative max-w-full overflow-hidden shrink-0 min-h-[60px]"
              loading="lazy"
              alt=""
              src={partner4}
            />
          </div>
        </div>
        <div className="w-[5.138rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.156rem] box-border">
          <img
            className="self-stretch h-[1.594rem] relative max-w-full overflow-hidden shrink-0 min-h-[60px]"
            alt=""
            src={partner5}
          />
        </div>
        <div className="w-[5.738rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.143rem] box-border">
          <img
            className="self-stretch h-[1.631rem] relative max-w-full overflow-hidden shrink-0 min-h-[60px]"
            alt=""
            src={partner6}
          />
        </div>
        <div className="w-[5.525rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.062rem] box-border">
          <img
            className="self-stretch h-[1.788rem] relative max-w-full overflow-hidden shrink-0 min-h-[60px]"
            alt=""
            src={partner7}
          />
        </div>
      </div>
    </section>
  );
};

export default Partner;
