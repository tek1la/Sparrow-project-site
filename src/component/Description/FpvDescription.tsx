import { Button, Container, Grid } from '@mui/material'
import './Description.css'
import { useRef, useState } from 'react'

type Props = {}
const FpvDescription = (props: Props) => {
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
                    padding: '120px 0 80px',
                    position: 'relative',
                }}
            >
                <Grid container className="descript-wraper">
                    <Grid item sm={4}></Grid>
                    <Grid item sm={8} className="descript-title">
                        <h3>горобець 8" горобець 10"</h3>
                    </Grid>
                </Grid>
                <Grid container className="descript-item-wraper">
                    <Grid xs={3.8} item className="descript-item">
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
                            <video className="descript-video" muted loop>
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
                    <Grid xs={3.8} item className="descript-item">
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
                    <Grid xs={3.8} item className="descript-item">
                        <Grid className="descript-list-item">
                            <div className="descript-text-page">
                                <div className="second-descript-img">
                                    <img src="./img/fpv-8.jpg" alt="bpla" />
                                    <p className="descript-mini-text">
                                        Горобець 8"
                                    </p>
                                </div>
                                <div className="third-descript-img">
                                    <div>
                                        <img
                                            src="./img/fpv-10.jpg"
                                            alt="bpla"
                                        />
                                        <p>Горобець 10"</p>
                                    </div>
                                </div>
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
