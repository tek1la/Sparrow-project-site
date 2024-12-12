import { Button, Container, Grid, useMediaQuery } from '@mui/material'
import './Description.css'
import { useRef, useState } from 'react'

type Props = {}
const FpvDescription = (props: Props) => {
    const isTablet = useMediaQuery('(max-width:1024px)')
    const isMobile = useMediaQuery('(max-width:900px)')

    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const handlePlayClick = () => {
        setIsPopupOpen(true)
    }

    const handleCloseClick = () => {
        if (videoRef.current) {
            videoRef.current.pause()
            videoRef.current.currentTime = 0
        }
        setIsPopupOpen(false)
    }

    const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleCloseClick()
        }
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
                <Grid container className="descript-wraper">
                    <Grid item md={4} sm={0}></Grid>
                    <Grid item md={8} sm={12} className="descript-title">
                        <h3>горобець 8" горобець 10"</h3>
                    </Grid>
                </Grid>
                <Grid container className="descript-item-wraper">
                    <Grid
                        md={3.8}
                        sm={12}
                        xs={12}
                        item
                        className="descript-item"
                    >
                        <div className="descript-text">
                            <p className="descript-bold">
                                Додатково комплектуємо акумуляторами 6S2P з
                                елементів molicel.
                            </p>
                        </div>
                        <div
                            className="descript-video-wraper"
                            onClick={handlePlayClick}
                        >
                            <video
                                className="descript-video"
                                muted
                                loop
                                playsInline
                            >
                                <source
                                    src="video/BoomBeeR.webm"
                                    type="video/webm"
                                />
                                Ваш браузер не підтримує відео тег.
                            </video>
                            <img
                                src="img/play_btn.svg"
                                alt="play"
                                className="play-icon"
                            />
                        </div>
                    </Grid>
                    <Grid
                        md={3.8}
                        sm={12}
                        xs={12}
                        item
                        className="descript-item"
                    >
                        <Grid className="descript-list-item">
                            <div className="fpv-descript-text descript-text">
                                <p>
                                    БпЛА призначений для виконання бойових задач
                                    із ураження живої сили та легко/ важко
                                    броньованих об'єктів противника з повітря.
                                    Апарат створений для застосування установами
                                    різної спрямованості і підпорядкованості та
                                    розрахований на ручне керування з виконанням
                                    зльоту та посадки вертикально з різних
                                    поверхонь (земля, асфальт та інше), з
                                    дотриманням експлуатаційних обмежень.
                                </p>
                            </div>
                        </Grid>
                        <Button className="contact-form-btn fpv-descript-btn">
                            В МАГАЗИН
                        </Button>
                    </Grid>
                    <Grid
                        md={3.8}
                        sm={12}
                        xs={12}
                        item
                        className="descript-item"
                    >
                        <Grid md={12} className="descript-list-item">
                            <div className="descript-text-page fpv_img_wraper">
                                <Grid
                                    lg={6}
                                    md={12}
                                    className="second-descript-img"
                                >
                                    {isMobile ? (
                                        <img
                                            src="./img/fpv-8-mob.jpg"
                                            alt="bpla"
                                        />
                                    ) : (
                                        <img
                                            className="fpv_img"
                                            src="./img/fpv-8.jpg"
                                            alt="bpla"
                                        />
                                    )}

                                    <p className="descript-mini-text">
                                        Горобець 8"
                                    </p>
                                </Grid>
                                <Grid
                                    lg={6}
                                    md={12}
                                    className="third-descript-img"
                                >
                                    <div>
                                        {isMobile ? (
                                            <img
                                                src="./img/fpv-10-mob.jpg"
                                                alt="bpla"
                                            />
                                        ) : (
                                            <img
                                                className="fpv_img"
                                                src="./img/fpv-10.jpg"
                                                alt="bpla"
                                            />
                                        )}

                                        <p>Горобець 10"</p>
                                    </div>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            {isPopupOpen && (
                <div className="video-popup" onClick={handlePopupClick}>
                    <div className="video-popup-content">
                        <video
                            ref={videoRef}
                            controls
                            autoPlay
                            className="video-popup-video"
                        >
                            <source
                                src="video/BoomBeeR.webm"
                                type="video/webm"
                            />
                            Ваш браузер не підтримує відео тег.
                        </video>
                        <button
                            className="video-popup-close"
                            onClick={handleCloseClick}
                        >
                            Х
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
export default FpvDescription
