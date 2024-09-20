import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './ProductionSlider.css'
import { Autoplay, Navigation } from 'swiper/modules'
import ProductionListItem from './ProductionListItem'
import { productionArray } from 'utils/productionArray'
import 'swiper/css/navigation'
import { Grid } from '@mui/material'

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
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)

    const handleSwiperChange = (swiper: any) => {
        setIsBeginning(swiper.isBeginning)
        setIsEnd(swiper.isEnd)
    }
    return (
        <>
            <Swiper
                slidesPerView={3}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                onSlideChange={handleSwiperChange}
                onSwiper={handleSwiperChange}
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
            </Swiper>
            <Grid container className="nav-btn-wraper">
                <Grid item sm={8}></Grid>
                <Grid
                    item
                    sm={2}
                    sx={{
                        position: 'relative',
                    }}
                >
                    <div
                        className={`custom-prev ${isBeginning ? 'disabled' : ''}`}
                    ></div>
                    <div
                        className={`custom-next ${isEnd ? 'disabled' : ''}`}
                    ></div>
                </Grid>
                <Grid item sm={2}></Grid>
            </Grid>
        </>
    )
}
export default ProductionSlider
