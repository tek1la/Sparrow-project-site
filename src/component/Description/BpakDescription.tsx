import { useRef, useState } from 'react'
import { Container, Grid } from '@mui/material'
import './Description.css'

type Props = {}
const BpakDescription = (props: Props) => {
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
                        <h3>Бпак “1В Бомбер”</h3>
                    </Grid>
                </Grid>
                <Grid container className="descript-item-wraper">
                    <Grid xs={3.8} item className="descript-item">
                        <Grid className="descript-list-item">
                            <div className="descript-text">
                                <p className="descript-bold">
                                    Безпілотник пройшов всі державні
                                    випробування та отримав кодифікацію НАТО.
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
                        <Grid className="descript-list-item">
                            <div className="descript-text-page">
                                <div>
                                    <img
                                        src="./img/bpak_station.jpg"
                                        alt="bpla"
                                    />
                                    <p>Станція керування</p>
                                </div>
                                <div>
                                    <img
                                        src="./img/re-link-station.jpg"
                                        alt="bpla"
                                    />
                                    <p>Станція ретрансляції</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid xs={3.8} item className="descript-item">
                        <Grid className="descript-list-item">
                            <div className="descript-text">
                                <p>
                                    Призначений для виконання ударних операцій,
                                    вдень та вночi в простих метеорологічних
                                    умовах, в умовах активного використання
                                    противником засобів радіоелектронної
                                    боротьби.
                                </p>
                                <p>
                                    Завдяки захищеним каналам  передачі відео,
                                    керування та телеметрії, дрон призначений
                                    для доставки та скиду різнокаліберного
                                    корисного навантаження вагою до 8 кг з
                                    радіусом тактичної оперативної дії до 8 км.
                                </p>
                            </div>
                        </Grid>
                        <Grid className="descript-list-item">
                            <div className="descript-text-page">
                                <div className="first-descript-img">
                                    <img
                                        src="./img/bpak-img-1.jpg"
                                        alt="bpla"
                                    />
                                    <p className="descript-mini-text">
                                        “1В Бомбер” зі скидом
                                    </p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid xs={3.8} item className="descript-item">
                        <Grid className="descript-list-item">
                            <div className="descript-text-page">
                                <div className="second-descript-img">
                                    <img src="./img/bpak-cam.jpg" alt="bpla" />
                                    <p className="descript-mini-text">
                                        Тепловізійна камера
                                    </p>
                                </div>
                                <div className="third-descript-img">
                                    <div>
                                        <img
                                            src="./img/bpak_prop.jpg"
                                            alt="bpla"
                                        />
                                        <p>Пропеллери</p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid className="descript-text descript-marg">
                            <div>
                                <p>
                                    У комплекті є станція керування та
                                    ретранслятор
                                </p>
                                <p>Швидке розгортання комплексу</p>
                                <p>Час знаходження у повітрі: 30-40хв</p>
                                <div>
                                    <p>Корисне навантаження:</p>
                                    <ul>
                                        <li>до 2-х мін 82мм</li>
                                        <li>до 4-х мін 60мм</li>
                                        <li>до 12-ти гранат 40мм</li>
                                    </ul>
                                </div>
                                <p>Стійкість до РЕБ завад та РЕР засобів</p>
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
export default BpakDescription
