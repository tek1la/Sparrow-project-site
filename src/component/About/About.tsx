import { useRef, useState } from 'react'
import { Container, Grid, useMediaQuery } from '@mui/material'
import './About.css'

type Props = {}
const About = (props: Props) => {
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

    const isTablet = useMediaQuery('(max-width:1024px)')
    const isMobile = useMediaQuery('(max-width:375px)')

    return (
        <>
            <Container
                id="about"
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
                <Grid container className="about">
                    <Grid item sm={4}></Grid>
                    <Grid item sm={8} className="about-title">
                        <h3>sparrow avia.</h3>
                        <h3>хто ми?</h3>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sm={4} className="about-array-wraper">
                        <Grid className="about-list-item">
                            <div className="about-wraper">
                                <p className="about-bold">
                                    Наше небо - Наші правила!
                                </p>
                                <p className="about-mini-text">
                                    Девіз компанії
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item sm={4} className="about-array-wraper">
                        <Grid className="about-list-item">
                            <div className="about-wraper">
                                <p>
                                    Українське військово-промислове підприємство
                                    Sparrow Avia було засноване на початку
                                    повномасштабного вторгнення. Засновники
                                    компанії поставили перед собою мету створити
                                    високоякісні БпАК, що поєднують простоту,
                                    надійність, багатофункціональність та
                                    безпеку.
                                </p>
                                <div className="about-img about-icon">
                                    <img
                                        className="img"
                                        src="img/about-icon.png"
                                        alt="about"
                                    />
                                </div>
                                <p>
                                    Ми не в змозі виготовляти танки - тому ми
                                    робимо дрони. Це тотальний геймченджер який
                                    змінює правила гри на полі бою!
                                </p>
                                <p className="about-mini-text about-text-end">
                                    - Директор Sparrow Avia
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item sm={4} className="about-array-wraper"></Grid>
                    <Grid item sm={4} className="about-array-wraper">
                        <Grid className="about-list-item">
                            <div className="about-wraper">
                                <p>
                                    <span className="about-bold">
                                        Наша мета
                                    </span>
                                    - створювати унікальні рішення для фронту,
                                    змінювати доктрину ведення бою та
                                    оптимізувати виконання бойових місій
                                    ударними підрозділами БпЛА.
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item sm={4} className="about-array-wraper">
                        <Grid className="about-list-item">
                            <div className="about-wraper">
                                <div className="about-img-wraper">
                                    <div className="production-img">
                                        <img
                                            className="img"
                                            src="img/about-img.jpg"
                                            alt="about"
                                        />
                                    </div>
                                    <p className="about-mini-text">
                                        11 липня 2024
                                    </p>
                                </div>
                                <p>
                                    Наша діяльність потребує оперативної та
                                    злагодженої роботи та експертних знань у
                                    різних галузях. Успіх сприятиме підвищенню
                                    безпеки, стимулюванню інновацій та
                                    інтеграції України у світову спільноту в
                                    сфері БпАК. Ми віримо, що зусилля нашої
                                    команди допоможуть досягти цих цілей. Разом
                                    з партнерами та спільнотою ми зможемо внести
                                    значні зміни у майбутнє авіації.
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item sm={4} className="about-array-wraper">
                        <Grid className="about-list-item">
                            <div className="about-wraper">
                                <p>
                                    За два роки ми зросли з 3 до 100 осіб,
                                    відкрили виробництво FPV, акумуляторів,
                                    ретрансляторів та ударних коптерів. Наша
                                    компанія активно розвиває
                                    військово-промисловий комплекс України і
                                    готова до співпраці для реалізації
                                    унікальних проектів та досягнення великих
                                    цілей.
                                </p>
                                <div
                                    className="about-video-wraper"
                                    onClick={handlePlayClick}
                                >
                                    <video className="about-video" muted loop>
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
export default About
