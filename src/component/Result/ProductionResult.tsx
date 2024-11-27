import { Container, Grid, useMediaQuery } from '@mui/material'
import { useState } from 'react'
import './ProductionResult.css'

type Props = {}
const ProductionResult = (props: Props) => {
    const isTablet = useMediaQuery('(max-width:1024px)')
    const isMobile = useMediaQuery('(max-width:545px)')
    const [tooltip, setTooltip] = useState({
        visible: false,
        text: '',
        position: { top: 0, left: 0 },
    })
    const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null)

    const handleMouseEnter = (
        event: React.MouseEvent<HTMLElement>,
        text: string
    ) => {
        if (hideTimeout) {
            clearTimeout(hideTimeout)
            setHideTimeout(null)
        }

        const currentTarget = event.currentTarget

        if (!currentTarget) {
            return
        }

        const slideRect = event.currentTarget.getBoundingClientRect()
        setTooltip({
            visible: true,
            text: text,
            position: {
                top: slideRect.bottom + window.scrollY + 10, // Враховуємо висоту слайда і прокрутку
                left: slideRect.left + slideRect.width / 2,
            },
        })
    }

    const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
        const relatedTarget = event.relatedTarget as HTMLElement | null

        if (
            relatedTarget &&
            (relatedTarget.closest('.tooltip') ||
                relatedTarget.closest('.result-mision-description'))
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
            <Container
                className="container"
                sx={{
                    padding: isMobile
                        ? '80px 15px 60px'
                        : isTablet
                          ? '100px 30px 70px'
                          : '120px 0 80px',
                    position: 'relative',
                }}
            >
                <Grid container className="result-mision-wraper">
                    <Grid item sm={4}></Grid>
                    <Grid item sm={8} className="result-mision-title">
                        <h3>вже випробували</h3>
                    </Grid>
                </Grid>
                <Grid container className="result-mision-mob">
                    <Grid
                        item
                        sm={4}
                        className="result-mision-description result-mision-description-1"
                        onMouseEnter={(e) =>
                            handleMouseEnter(e, '1-ша ОБрСпП ім. Івана Богуна')
                        }
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="result-mision-img">
                            <img src="img/result-mision-img-1.png" alt="" />
                        </div>
                    </Grid>
                    <Grid
                        item
                        sm={4}
                        className="result-mision-description second-descript result-mision-description-2"
                        onMouseEnter={(e) =>
                            handleMouseEnter(e, '43 ОМБР “Небесна мара”')
                        }
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="result-mision-img">
                            <img src="img/result-mision-img-2.png" alt="" />
                        </div>
                    </Grid>
                    <Grid
                        item
                        sm={4}
                        className="result-mision-description result-mision-description-3"
                        onMouseEnter={(e) =>
                            handleMouseEnter(e, 'Окремий центр СО «Захід»')
                        }
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="result-mision-img">
                            <img src="img/result-mision-img-3.png" alt="" />
                        </div>
                    </Grid>
                    <Grid
                        item
                        sm={4}
                        className="result-mision-description result-mision-description-4"
                        onMouseEnter={(e) =>
                            handleMouseEnter(e, 'Окремий центр СО «Схід»')
                        }
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="result-mision-img">
                            <img src="img/result-mision-img-4.png" alt="" />
                        </div>
                    </Grid>
                    <Grid
                        item
                        sm={4}
                        className="result-mision-description second-descript result-mision-description-5"
                        onMouseEnter={(e) => handleMouseEnter(e, '60-та ОМБр')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="result-mision-img">
                            <img src="img/result-mision-img-5.png" alt="" />
                        </div>
                    </Grid>
                    <Grid
                        item
                        sm={4}
                        className="result-mision-description result-mision-description-6"
                        onMouseEnter={(e) => handleMouseEnter(e, '14-та ОТБр')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="result-mision-img">
                            <img src="img/result-mision-img-6.png" alt="" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
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
export default ProductionResult
