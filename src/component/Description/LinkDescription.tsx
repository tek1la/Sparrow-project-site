import { Button, Container, Grid } from '@mui/material'
import './Description.css'
import { useRef, useState } from 'react'

type Props = {}
const LinkDescription = (props: Props) => {
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
                        <h3>fpv re-link</h3>
                    </Grid>
                </Grid>
                <Grid container className="descript-item-wraper">
                    <Grid xs={3.8} item className="descript-item">
                        <div
                            className="descript-video-wraper"
                            onClick={handlePlayClick}
                        >
                            <video className="descript-video" muted loop>
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
                    <Grid xs={3.8} item className="descript-item">
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
                    <Grid xs={3.8} item className="descript-item">
                        <Grid className="descript-list-item">
                            <div className="descript-text-page">
                                <div className="second-descript-img">
                                    <img
                                        src="./img/link-relink.jpg"
                                        alt="relink"
                                    />
                                    <p className="descript-mini-text">
                                        Станція ретрансляції
                                    </p>
                                </div>
                                <div className="third-descript-img">
                                    <div>
                                        <img
                                            src="./img/link-d.jpg"
                                            alt="relink"
                                        />
                                        <p>Редуктор</p>
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
