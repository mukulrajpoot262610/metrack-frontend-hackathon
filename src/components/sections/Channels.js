import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 9,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Channels = () => {
  return (
    <main className="flex flex-col p-10 my-32 bg-blue-50 rounded-3xl">
      <h1 className="mb-10 text-2xl font-bold text-center">
        Top Educators from amazing YouTube community
      </h1>
      <Carousel
        arrows={false}
        swipeable={true}
        draggable
        responsive={responsive}
        infinite={true}
        autoPlay
        autoPlaySpeed={1000}
        transitionDuration={500}
      >
        <div data-tip="hello" className="tooltip">
          <img
            alt="educators"
            src="https://yt3.ggpht.com/ytc/AKedOLRR2uNiXJiFH-XRmtGgkdICxTuDJxCPJidKFRNCNg=s176-c-k-c0x00ffffff-no-rj-mo"
            className="rounded-full h-28"
          />
        </div>
        <img
          alt="educators"
          src="https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s176-c-k-c0x00ffffff-no-rj-mo"
          className="rounded-full h-28"
        />
        <img
          alt="educators"
          src="https://yt3.ggpht.com/ytc/AKedOLR-TP_Uc-gh9UWENj1CsWNVyxDRwCikaVARVwhY=s176-c-k-c0x00ffffff-no-rj-mo"
          className="rounded-full h-28"
        />
        <img
          alt="educators"
          src="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s88-c-k-c0x00ffffff-no-rj"
          className="rounded-full h-28"
        />
        <img
          alt="educators"
          src="https://yt3.ggpht.com/ytc/AKedOLTKC5Ndcl2a27tMzcPDArrP8ZJdfRvj_EB5E6JV=s88-c-k-c0x00ffffff-no-rj"
          className="rounded-full h-28"
        />
        <img
          alt="educators"
          src="https://yt3.ggpht.com/ytc/AKedOLT3EnMXtIOvDT4CL7obl0-acSZCBhMuapXBQFksVQ=s176-c-k-c0x00ffffff-no-rj-mo"
          className="rounded-full h-28"
        />
        <img
          alt="educators"
          src="https://yt3.ggpht.com/tLOaVyDRQq46qga99PFlP9b3PRcni8gBJepNOecsgIdADpxU10p6w0VD-fZ8VvtqeldN6IHYOj0=s176-c-k-c0x00ffffff-no-rj-mo"
          className="rounded-full h-28"
        />
        <img
          alt="educators"
          src="https://yt3.ggpht.com/ytc/AKedOLScd3qE7Blu2CtRbzkfBzbEwE3_bIpO-dRaQjTPTg=s176-c-k-c0x00ffffff-no-rj-mo"
          className="rounded-full h-28"
        />
      </Carousel>
    </main>
  );
};

export default Channels;
