import { useRef, useState } from 'react'
import { Button, Container, Grid, useMediaQuery } from '@mui/material'
import './Description.css'

type Props = {}
const BatteryDescription = (props: Props) => {
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
                        <h3>АКБ на molicel</h3>
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
                        <Grid className="descript-list-item">
                            <Grid className="descript-text-page fpv_img_wraper">
                                <Grid>
                                    {isMobile ? (
                                        <img
                                            src="./img/batary_4s2p_mob.jpg"
                                            alt="batary"
                                        />
                                    ) : (
                                        <img
                                            className="fpv_img"
                                            src="./img/batary_4s2p.jpg"
                                            alt="batary"
                                        />
                                    )}

                                    <p>4s2p</p>
                                </Grid>
                                <Grid>
                                    {isMobile ? (
                                        <img
                                            src="./img/batary_6s1p_mob.jpg"
                                            alt="batary"
                                        />
                                    ) : (
                                        <img
                                            className="fpv_img"
                                            src="./img/batary_6s1p.jpg"
                                            alt="batary"
                                        />
                                    )}
                                    <p>6s1p</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className="descript-list-item">
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
                                        src="video/Bat.webm"
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
                    </Grid>
                    <Grid
                        md={3.8}
                        sm={12}
                        xs={12}
                        item
                        className="descript-item"
                    >
                        <Grid className="descript-list-item">
                            <div className="descript-text">
                                <p>
                                    Акумуляторні збірки на елементах molicel
                                    INR-21700-P42A виготовляються з
                                    високоякісних матеріалів та ретельно
                                    тестуються , що забезпечує їхню високу
                                    продуктивність та надійність.
                                </p>
                                <p>
                                    Елементи molicel INR-21700-P42A мають високу
                                    енергоємність, що забезпечує тривалу роботу
                                    БпЛА. Вони також здатні працювати в холоді
                                    до -40, що робить їх ідеальними для
                                    використання в зимових умовах.
                                </p>
                            </div>
                        </Grid>
                        <Grid className="descript-list-item">
                            <div className="descript-text-page fpv_img_wraper">
                                <Grid>
                                    {isMobile ? (
                                        <img
                                            src="./img/batary_6s2p_mob.jpg"
                                            alt="batary"
                                        />
                                    ) : (
                                        <img
                                            className="fpv_img"
                                            src="./img/batary_6s2p.jpg"
                                            alt="batary"
                                        />
                                    )}

                                    <p>6s2p</p>
                                </Grid>
                                <Grid>
                                    {isMobile ? (
                                        <img
                                            src="./img/batary_6s3p_mob.jpg"
                                            alt="batary"
                                        />
                                    ) : (
                                        <img
                                            className="fpv_img"
                                            src="./img/batary_6s3p.jpg"
                                            alt="batary"
                                        />
                                    )}

                                    <p>6s3p</p>
                                </Grid>
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
                        <Grid className="descript-text">
                            <div>
                                <p>Тривалий час польоту БпЛА</p>
                                <p>
                                    Робота в екстремальних погодних умовах (до
                                    -40 °C)
                                </p>
                                <p>Гарантія заряду в критичні моменти</p>
                                <p>Екологічно безпечні технології</p>
                                <p>Якісні компоненти акумуляторних батарей</p>
                                <p>Підтримка економіки України</p>
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
                            <source src="video/Bat.webm" type="video/webm" />
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
export default BatteryDescription
