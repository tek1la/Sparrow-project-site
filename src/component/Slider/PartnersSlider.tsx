import { useState, useRef, MouseEvent } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './PartnersSlider.css'
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import { Grid } from '@mui/material'

type Props = {}
const PartnersSlider = (props: Props) => {
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)
    const [tooltip, setTooltip] = useState({
        visible: false,
        text: '',
        position: { top: 0, left: 0 },
    })
    const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null)

    const sliderRef = useRef(null)

    const handleSwiperChange = (swiper: any) => {
        setIsBeginning(swiper.isBeginning)
        setIsEnd(swiper.isEnd)
    }

    const handleMouseEnter = (
        event: React.MouseEvent<HTMLElement>,
        text: string
    ) => {
        if (hideTimeout) {
            clearTimeout(hideTimeout)
            setHideTimeout(null)
        }

        const currentTarget = event.currentTarget

        // Перевіряємо, чи currentTarget не є null
        if (!currentTarget) {
            return
        }

        // Отримуємо батьківський контейнер слайдера
        const parentElement = event.currentTarget.closest(
            '.container'
        ) as HTMLElement

        // Визначаємо динамічну ширину блоку
        const parentWidth = parentElement
            ? parentElement.getBoundingClientRect().width
            : 1360

        const parentWidthNumber = Number(parentWidth)

        const slideRect = event.currentTarget.getBoundingClientRect()
        setTooltip({
            visible: true,
            text: text,
            position: {
                top: slideRect.height + 235, // Враховуємо висоту слайда і прокрутку
                left:
                    slideRect.left +
                    slideRect.width / 2 -
                    (window.innerWidth - parentWidthNumber) / 2,
            },
        })
    }

    const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
        const relatedTarget = event.relatedTarget as HTMLElement | null

        if (
            relatedTarget &&
            (relatedTarget.closest('.tooltip') ||
                relatedTarget.closest('.slide'))
        ) {
            return
        }

        const timeout = setTimeout(() => {
            setTooltip({
                visible: false,
                text: '',
                position: { top: 0, left: 0 },
            })
        }, 300) // Затримка перед закриттям підказки

        setHideTimeout(timeout)
    }

    const handleTooltipEnter = () => {
        if (hideTimeout) {
            clearTimeout(hideTimeout)
            setHideTimeout(null)
        }
    }

    const handleTooltipLeave = () => {
        setTooltip({ visible: false, text: '', position: { top: 0, left: 0 } })
    }

    return (
        <>
            <Swiper
                slidesPerView={3}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                onSlideChange={handleSwiperChange}
                onSwiper={handleSwiperChange}
                modules={[Navigation]}
                className="mySwiper partners-slider"
                ref={sliderRef}
            >
                <SwiperSlide
                    className="slide slide-1"
                    onMouseEnter={(e) =>
                        handleMouseEnter(e, 'БФ “Справжні українці”')
                    }
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src="img/partner-true-ukr.svg"
                        height="100px"
                        alt="true-ukr"
                        className="slide-img"
                    />
                </SwiperSlide>
                <SwiperSlide
                    className="slide slide-2"
                    onMouseEnter={(e) => handleMouseEnter(e, 'Вексилум')}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src="img/partner-vexilum.svg"
                        height="100px"
                        alt="vexilum"
                        className="slide-img"
                    />
                </SwiperSlide>
                <SwiperSlide
                    className="slide slide-4"
                    onMouseEnter={(e) => handleMouseEnter(e, 'TAF Drones')}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src="img/partner-taf.svg"
                        height="100px"
                        alt="taf"
                        className="slide-img"
                    />
                </SwiperSlide>
                <SwiperSlide
                    className="slide slide-3"
                    onMouseEnter={(e) =>
                        handleMouseEnter(e, 'Виробники оптики ATN')
                    }
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src="img/partner-atn.svg"
                        height="100px"
                        alt="atn"
                        className="slide-img"
                    />
                </SwiperSlide>
                <SwiperSlide
                    className="slide slide-5"
                    onMouseEnter={(e) => handleMouseEnter(e, 'TC Fly')}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src="img/partner-ts-fly.svg"
                        height="100px"
                        alt="tsfly"
                        className="slide-img"
                    />
                </SwiperSlide>
                <SwiperSlide
                    className="slide slide-6"
                    onMouseEnter={(e) =>
                        handleMouseEnter(e, 'БФ “OPTIVITA UKRAINE”')
                    }
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src="img/partner-optivita.svg"
                        height="100px"
                        alt="optivita"
                        className="slide-img"
                    />
                </SwiperSlide>
            </Swiper>
            <Grid container className="partner-nav-btn-wraper">
                <Grid item sm={7}></Grid>
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
                <Grid item sm={3}></Grid>
            </Grid>
            {tooltip.visible && (
                <div
                    className="tooltip"
                    style={{
                        position: 'absolute',
                        top: `${tooltip.position.top}px`,
                        left: `${tooltip.position.left}px`,
                        transform: 'translateX(-50%)',
                        backgroundColor: '#141A29',
                        color: '#fff',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        zIndex: 1000,
                        cursor: 'pointer',
                    }}
                    onMouseEnter={handleTooltipEnter}
                    onMouseLeave={handleTooltipLeave}
                >
                    <div
                        className="tooltip-arrow"
                        style={{
                            position: 'absolute',
                            top: '-7px',
                            left: '50%',
                            transform: 'translateX(-50%) rotate(45deg)',
                            width: '10px',
                            height: '10px',
                            backgroundColor: '#141A29',
                            zIndex: -1,
                        }}
                    ></div>
                    {tooltip.text}
                </div>
            )}
        </>
    )
}
export default PartnersSlider
