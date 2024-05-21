import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './NewsSlider.css'
import { Autoplay, Navigation } from 'swiper/modules'
import NewsListItem from './NewsListItem'
import 'swiper/css/navigation'

type Props = {
    newsArray: {
        id: number
        title: string
        description: string
        newsImg: string
    }[]
}
const NewsSlider = ({ newsArray }: Props) => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper news-slider"
            >
                {newsArray.map(({ id, title, description, newsImg }) => (
                    <SwiperSlide key={id}>
                        <NewsListItem
                            id={id}
                            title={title}
                            description={description}
                            newsImg={newsImg}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
export default NewsSlider
