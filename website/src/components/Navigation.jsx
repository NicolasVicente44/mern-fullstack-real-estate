import React from 'react';


const Navigation = () => {
    return (
    <header className="self-stretch overflow-hidden flex flex-row items-center justify-between py-[1rem] px-[8.5rem] box-border gap-[1.25rem] max-w-full text-center text-[0.875rem] text-gray-100 font-inter mq750:pl-[2.125rem] mq750:pr-[2.125rem] mq750:box-border mq1050:pl-[4.25rem] mq1050:pr-[4.25rem] mq1050:box-border">
      <div className="w-[30.35rem] flex flex-row items-center justify-start gap-[2.5rem] max-w-full mq750:w-[6.288rem] mq750:gap-[1.25rem]">
        <img
          className="h-[1.75rem] w-[3.788rem] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/logoarch.svg"
        />
        <div className="flex-1 overflow-hidden flex flex-row items-center justify-start gap-[1.481rem] max-w-full mq750:hidden">
          <div className="flex-1 relative tracking-[0.01em] leading-[2.5rem] font-medium inline-block min-w-[5.625rem] whitespace-nowrap">
            How it Works
          </div>
          <div className="flex-1 relative tracking-[0.01em] leading-[2.5rem] font-medium inline-block min-w-[6.25rem] whitespace-nowrap">
            Design Gallery
          </div>
          <div className="relative tracking-[0.01em] leading-[2.5rem] font-medium inline-block min-w-[4.438rem]">
            Architects
          </div>
          <div className="relative tracking-[0.01em] leading-[2.5rem] font-medium inline-block min-w-[3.313rem]">
            Articles
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[1.5rem]">
        <div className="h-[1.881rem] w-[1.881rem] rounded-37xl bg-whitesmoke overflow-hidden shrink-0 flex flex-row items-center justify-start p-[0.5rem] box-border">
          <img
            className="h-[0.881rem] w-[0.881rem] relative"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className="relative tracking-[0.01em] leading-[2.5rem] font-medium inline-block min-w-[2.938rem] whitespace-nowrap">
          Sign In
        </div>
        <button className="cursor-pointer [border:none] py-[0.25rem] px-[1.5rem] bg-dodgerblue rounded overflow-hidden flex flex-row items-center justify-start whitespace-nowrap hover:bg-royalblue">
          <div className="relative text-[0.875rem] tracking-[0.01em] leading-[2.5rem] font-semibold font-inter text-white text-center inline-block min-w-[3.375rem]">
            Sign Up
          </div>
        </button>
      </div>
    </header>
  );
};

  
  export default Navigation;
  