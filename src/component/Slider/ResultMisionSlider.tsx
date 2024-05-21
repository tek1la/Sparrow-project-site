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
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper partners-slider"
            >
                <SwiperSlide>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '25px',
                        }}
                    >
                        <img
                            src="img/production/result_mision_slider_1.png"
                            alt=""
                        />
                        <p className="mision_slide_text">
                            1-ша окрема бригада
                            <br />
                            спец. призначення
                            <br />
                            ім. Івана Богуна
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '25px',
                        }}
                    >
                        <img
                            src="img/production/result_mision_slider_2.png"
                            alt=""
                        />
                        <p className="mision_slide_text">
                            43 ОМБР
                            <br />
                            Небесна Мара
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '25px',
                        }}
                    >
                        <img
                            src="img/production/result_mision_slider_3.png"
                            alt=""
                        />
                        <p className="mision_slide_text">
                            Окремий центр
                            <br />
                            спеціальних
                            <br />
                            операцій «Схід»
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '25px',
                        }}
                    >
                        <img
                            src="img/production/result_mision_slider_4.png"
                            alt=""
                        />
                        <p className="mision_slide_text">
                            Окремий центр
                            <br />
                            спеціальних
                            <br />
                            операцій «Захід»
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '25px',
                        }}
                    >
                        <img
                            src="img/production/result_mision_slider_5.png"
                            alt=""
                        />
                        <p className="mision_slide_text">
                            60-та окрема
                            <br />
                            механізована бригада
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '25px',
                        }}
                    >
                        <img
                            src="img/production/result_mision_slider_6.png"
                            alt=""
                        />
                        <p className="mision_slide_text">
                            14-та окрема
                            <br />
                            танкова бригада
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
export default PartnersSlider
