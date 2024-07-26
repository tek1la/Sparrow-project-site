import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './PartnersSlider.css'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css/navigation'

type Props = {}
const PartnersSlider = (props: Props) => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                navigation={true}
                // autoplay={{
                //     delay: 3500,
                //     disableOnInteraction: false,
                // }}
                modules={[Autoplay, Navigation]}
                className="mySwiper partners-slider"
            >
                <SwiperSlide className="slide slide-1">
                    <img
                        src="img/partner-true-ukr.svg"
                        height="100px"
                        alt="true-ukr"
                        className="slide-img"
                    />
                </SwiperSlide>
                <SwiperSlide className="slide slide-2">
                    <img
                        src="img/partner-vexilum.svg"
                        height="100px"
                        alt="vexilum"
                        className="slide-img"
                    />
                </SwiperSlide>
                <SwiperSlide className="slide slide-3">
                    <img
                        src="img/partner-atn.svg"
                        height="100px"
                        alt="atn"
                        className="slide-img"
                    />
                </SwiperSlide>
                <SwiperSlide className="slide slide-4">
                    <img
                        src="img/partner-taf.svg"
                        height="100px"
                        alt="taf"
                        className="slide-img"
                    />
                </SwiperSlide>
                <SwiperSlide className="slide slide-5">
                    <img
                        src="img/partner-ts-fly.svg"
                        height="100px"
                        alt="tsfly"
                        className="slide-img"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
export default PartnersSlider
