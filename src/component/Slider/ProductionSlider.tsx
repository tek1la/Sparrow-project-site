import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './ProductionSlider.css'
import { Autoplay, Navigation } from 'swiper/modules'
import ProductionListItem from './ProductionListItem'
import { productionArray } from 'utils/productionArray'
import 'swiper/css/navigation'

type Props = {}
const ProductionSlider = (props: Props) => {
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper production-slider"
            >
                {productionArray.map(
                    ({ id, title, description, productionImg, path }) => (
                        <SwiperSlide key={id}>
                            <ProductionListItem
                                id={id}
                                title={title}
                                description={description}
                                productionImg={productionImg}
                                path={path}
                            />
                        </SwiperSlide>
                    )
                )}
            </Swiper>
        </>
    )
}
export default ProductionSlider
