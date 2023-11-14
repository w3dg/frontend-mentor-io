import { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IconContext } from "react-icons";
import { LuArrowRight, LuArrowLeft } from "react-icons/lu";

import "swiper/css";
import "swiper/css/navigation";

export const Carousel = () => {
  // https:stackoverflow.com/questions/71069519/how-to-create-custom-navigation-buttons-for-swiper-in-react
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiper = useSwiper();

  //Add a state that will force a re-render
  const [_, setInit] = useState(false);

  const carouselImages = ["image-product-1.jpg", "image-product-2.jpg", "image-product-3.jpg", "image-product-4.jpg"];

  return (
    <div className="grid py-2 overflow-hidden place-items-center">
      <div className="relative w-full max-w-md my-auto overflow-x-auto overflow-y-hidden lg:max-w-2xl bg-neutral-200">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          /*update state on swiper initialization*/
          onInit={() => setInit(true)}
        >
          {carouselImages.map((image) => {
            return (
              <SwiperSlide key={image}>
                <div>
                  <img className="lg:rounded-xl" src={`/images/${image}`} alt={image} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <IconContext.Provider value={{ className: "text-neutral-800", size: "1.4rem" }}>
          <button
            ref={prevRef}
            className="absolute z-20 grid w-10 h-10 rounded-full bg-neutral-100/80 left-5 place-content-center top-48 lg:top-1/2"
          >
            <LuArrowLeft></LuArrowLeft>
          </button>
          <button
            onClick={() => swiper.slideNext()}
            ref={nextRef}
            className="absolute z-20 grid w-10 h-10 rounded-full bg-neutral-100/80 right-5 place-content-center top-48 lg:top-1/2"
          >
            <LuArrowRight></LuArrowRight>
          </button>
        </IconContext.Provider>
      </div>
    </div>
  );
};
