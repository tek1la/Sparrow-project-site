import { useRef, useState } from 'react'
import { Button, Container, Grid, useMediaQuery } from '@mui/material'
import './Description.css'

type Props = {}
const SdsDescription = (props: Props) => {
    const isTablet = useMediaQuery('(max-width:1024px)')
    const isMobile = useMediaQuery('(max-width:545px)')
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
                    <Grid item sm={4}></Grid>
                    <Grid item sm={8} className="descript-title">
                        <h3>скид “sds—mini”</h3>
                    </Grid>
                </Grid>
                <Grid container className="descript-item-wraper">
                    <Grid sm={3.8} xs={12} item className="descript-item">
                        <Grid className="descript-list-item">
                            <div
                                className="descript-video-wraper descript-video-wraper-mt"
                                onClick={handlePlayClick}
                            >
                                <video
                                    className="descript-video"
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source
                                        src="video/mini.webm"
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
                        <Grid className="descript-list-item">
                            <div className="descript-text-page">
                                <div>
                                    {isMobile ? (
                                        <img
                                            src="./img/sds_mini_1_mob.jpg"
                                            alt="batary"
                                        />
                                    ) : (
                                        <img
                                            src="./img/sds_mini_1.jpg"
                                            alt="batary"
                                        />
                                    )}

                                    <p>Встановлення скиду на дрон</p>
                                </div>
                                <div>
                                    {isMobile ? (
                                        <img
                                            src="./img/sds_mini_2_mob.jpg"
                                            alt="batary"
                                        />
                                    ) : (
                                        <img
                                            src="./img/sds_mini_2.jpg"
                                            alt="batary"
                                        />
                                    )}

                                    <p>Повна комплектація FPV</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid sm={3.8} xs={12} item className="descript-item">
                        <Grid className="descript-list-item">
                            <div className="descript-text">
                                <p>
                                    Зацікавлення використанням квадрокоптерів у
                                    військовій сфері зростає, що ставить перед
                                    науково-технічною спільнотою завдання
                                    вдосконалити їхні функціональні можливості.
                                </p>
                                <p>
                                    Однією з ключових проблем є система скидання
                                    боєприпасів. Вдосконалення цієї системи
                                    дозволить дронам ефективно та безпечно
                                    здійснювати скидання.
                                </p>
                            </div>
                        </Grid>
                        <Grid className="descript-list-item">
                            <div className="descript-text-page">
                                <div>
                                    {isMobile ? (
                                        <img
                                            src="./img/sds_mini_3_mob.jpg"
                                            alt="batary"
                                        />
                                    ) : (
                                        <img
                                            src="./img/sds_mini_3.jpg"
                                            alt="batary"
                                        />
                                    )}

                                    <p>Сторона кріплення до дрону</p>
                                </div>
                                <div>
                                    {isMobile ? (
                                        <img
                                            src="./img/sds_mini_4_mob.jpg"
                                            alt="batary"
                                        />
                                    ) : (
                                        <img
                                            src="./img/sds_mini_4.jpg"
                                            alt="batary"
                                        />
                                    )}

                                    <p>Сторона кріплення боєприпасу</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid sm={3.8} xs={12} item className="descript-item">
                        <Grid className="descript-text">
                            <div>
                                <p>
                                    Розміщення габаритних частин по боках рами
                                </p>
                                <p>Зручне транспортування дрону</p>
                                <p>Підтримка кріплення на FPV 10″</p>
                                <p>Покращення міцності та зменшення ваги</p>
                                <p>Оптимізація аеродинамічних характеристик</p>
                                <p>
                                    Зменшення загальної висоти дрона (всього на
                                    3 см більше висоти рами дрона)
                                </p>
                            </div>
                            <Button className="contact-form-btn link-descript-btn">
                                В МАГАЗИН
                            </Button>
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
                            <source src="video/mini.webm" type="video/webm" />
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
export default SdsDescription
