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
                loop={true}
                navigation={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper partners-slider"
            >
                <SwiperSlide>
                    <img src="img/partner-true-ukr.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="img/partner-atn.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="img/partner-vexilum.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="img/partner-taf.svg" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
export default PartnersSlider
