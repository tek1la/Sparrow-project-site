import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './ProductionSlider.css'
import { Autoplay, Navigation } from 'swiper/modules'
import ProductionListItem from './ProductionListItem'
import { productionArray } from 'utils/productionArray'
import 'swiper/css/navigation'

type Prod = {
    id: number
    title: string
    firstTitle: string
    secondTitle: string
    productionImg: string
    path: string
}

const modifiedProductionArray: Prod[] = [...productionArray]

type Props = {}
const ProductionSlider = (props: Props) => {
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
                className="mySwiper production-slider"
            >
                {modifiedProductionArray.map(
                    ({
                        id,
                        title,
                        firstTitle,
                        secondTitle,
                        productionImg,
                        path,
                    }) => (
                        <SwiperSlide key={id}>
                            <ProductionListItem
                                id={id}
                                title={title}
                                firstTitle={firstTitle}
                                secondTitle={secondTitle}
                                productionImg={productionImg}
                                path={path}
                            />
                        </SwiperSlide>
                    )
                )}
                {/* {productionArray.map(
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
                )} */}
            </Swiper>
        </>
    )
}
export default ProductionSlider
