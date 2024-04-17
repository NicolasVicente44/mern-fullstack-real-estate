import React from 'react';
import gallery1 from '../assets/images/gallery1.png';
import gallery2 from '../assets/images/gallery2.png';
import gallery3 from '../assets/images/gallery3.png';
import gallery4 from '../assets/images/gallery4.png';

const Gallery = () => {
  return (
    <section className="flex flex-col items-center justify-center py-[5rem] pr-[0rem] pl-[0rem] box-border gap-[2.5rem] max-w-full text-left text-[3rem] text-black font-playfair-display mq750:gap-[1.25rem] mq750:pt-[3.25rem] mq750:pb-[3.25rem] mq750:box-border mq450:pl-[1.25rem] mq450:box-border">
      <h1 className="m-0 text-inherit tracking-[-0.02em] leading-[124%] font-extrabold font-inherit inline-block shrink-0 max-w-full mq750:text-[2.375rem] mq750:leading-[3rem] mq450:text-[1.813rem] mq450:leading-[2.25rem]">
        Explore Professional and Verified Listings
      </h1>
      <div className="w-full overflow-x-auto flex flex-row items-start justify-center gap-[2.5rem] max-w-full mq750:gap-[1.25rem]">
        <img
          className="self-stretch w-[19.063rem] relative max-h-full shrink-0 object-cover min-h-[27rem]"
          loading="lazy"
          alt=""
          src={gallery1}
        />
        <img
          className="self-stretch w-[19.063rem] relative max-h-full shrink-0 object-cover min-h-[27rem]"
          loading="lazy"
          alt=""
          src={gallery2}
        />
        <img
          className="self-stretch w-[19.063rem] relative max-h-full shrink-0 object-cover min-h-[27rem]"
          loading="lazy"
          alt=""
          src={gallery3}
        />
        <img
          className="self-stretch w-[19.063rem] relative max-h-full shrink-0 object-cover min-h-[27rem]"
          loading="lazy"
          alt=""
          src={gallery4}
        />
      </div>
    </section>
  );
};

export default Gallery;