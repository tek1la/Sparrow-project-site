import { Button, Container, Grid, useMediaQuery } from '@mui/material'
import './Description.css'
import { useRef, useState } from 'react'

type Props = {}
const LinkDescription = (props: Props) => {
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
                        <h3>fpv re-link</h3>
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
                                    src="video/ReLink.webm"
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
                        <Button className="contact-form-btn link-descript-btn">
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
                        <Grid className="descript-list-item">
                            <div className="fpv-descript-text descript-text">
                                <p>
                                    Наземна станція призначена для зміцнення
                                    зв’язку з дроном та забезпечення безпеки
                                    оператора в процесі розвідки та ударних
                                    операцій.
                                </p>
                                <p>
                                    Станція ретрансляції “FPV Re-Link”
                                    забезпечує стабільний зв’язок на відстані до
                                    15 км та швидке перемикання між БпАК.
                                </p>
                                <p>
                                    Поворотний механізм антени дозволяє
                                    коригувати напрямок сигналу з пульта
                                    керування, що мінімізує ризики для пілота та
                                    забезпечує онлайн-корекцію направлення
                                    сигналу.
                                </p>
                            </div>
                        </Grid>
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
                                            src="./img/link-relink-mob.jpg"
                                            alt="relink"
                                        />
                                    ) : (
                                        <img
                                            className="fpv_img"
                                            src="./img/link-relink.jpg"
                                            alt="relink"
                                        />
                                    )}

                                    <p className="descript-mini-text">
                                        Станція ретрансляції
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
                                                src="./img/link-d-mob.jpg"
                                                alt="relink"
                                            />
                                        ) : (
                                            <img
                                                className="fpv_img"
                                                src="./img/link-d.jpg"
                                                alt="relink"
                                            />
                                        )}
                                        <p>Редуктор</p>
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
                            <source src="video/ReLink.webm" type="video/webm" />
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
export default LinkDescription
