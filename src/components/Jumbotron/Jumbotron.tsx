import JumbotronInterface from "./JumbotronInterface";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useDetectScreen from "../../hooks/useDetectScreen";
const Jumbotron: React.FC<JumbotronInterface> = ({
  images,
  duration,
  heading,
  subHeading,
  buttons,
  slider,
}) => {
  const [imageIndex, setImageIndex] = useState(0);
  const windowSize = useDetectScreen();

  useEffect(() => {
    setTimeout(() => {
      if (imageIndex === images.length - 1) setImageIndex(0);
      else setImageIndex(imageIndex + 1);
    }, duration);
  }, [imageIndex]);

  return (
    <div className="relative flex justify-center py-32">
      <img
        src={images[imageIndex]}
        className="w-full h-[700px] object-cover border-b-8 absolute top-0 z-[-10] border-lime-500 transition-all filter brightness-50"
      />
      <div className="pt-32 text-center flex flex-col gap-14 container">
        <p className=" text-4xl lg:font-semibold lg:text-5xl text-white">
          {heading}
        </p>
        <p className="text-2xl lg:font-semibold lg:text-3xl text-lime-500">
          {subHeading}
        </p>
        <div className="flex gap-4 justify-center">
          {buttons.map(({ title, variant }, index) => (
            <button key={index} className={`btn ${variant} px-10`}>
              {title}
            </button>
          ))}
        </div>
        <div>
          <Swiper
            slidesPerView={windowSize.width >= 1300 ? slider.length : 1}
            spaceBetween={50}
          >
            {slider.map((slider, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex justify-center">
                    <div className="bg-white rounded-lg p-3">
                      <img
                        key={index}
                        src={slider.image}
                        className="rounded-lg filter brightness-50"
                      />
                      <p className="absolute top-0 left-0 z-20 right-0 bottom-0 flex items-center justify-center text-white text-3xl font-semibold">
                        {slider.label}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
