import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const Hero = () => {
    return (
         <div className="max-w-6xl mx-auto mt-3 rounded-2xl overflow-hidden">

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination,Navigation]}
        className="h-120 w-full"
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-120 flex items-center justify-center text-center text-white"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/KpTvRKbh/cute-little-dog-with-winter-scarf.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
            }}
          >
            <div className="bg-black/50 p-6 rounded-xl">
              <h2 className="text-3xl font-bold">Winter Care for Dogs </h2>
              <p className="mt-2">Keep your pets warm and happy in cold weather</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-120 flex items-center justify-center text-center text-white"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/v4HbBc7M/shallow-focus-vertical-shot-cute-golden-retriever-puppy-sitting-grass-ground.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
            }}
          >
            <div className="bg-black/50 p-6 rounded-xl">
              <h2 className="text-3xl font-bold">Cozy Cats 🐱</h2>
              <p className="mt-2">Soft blankets & warm grooming for winter comfort</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-120 flex items-center justify-center text-center text-white"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/Zn0L8H6/b00763bb-aab3-441f-8cde-bafd4d284b65.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
            }}
          >
            <div className="bg-black/50 p-6 rounded-xl">
              <h2 className="text-3xl font-bold">Expert Pet Care </h2>
              <p className="mt-2">Professional winter grooming & health services</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

    </div>
    );
};

export default Hero;