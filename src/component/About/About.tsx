import { Container, Grid } from '@mui/material'
import AnimatedText from 'component/AnimatedText/AnimatedText'
import './About.css'

type Props = {}
const About = (props: Props) => {
    return (
        <>
            <Container
                className="container"
                sx={{
                    padding: '120px 0',
                    position: 'relative',
                }}
            >
                <Container
                    className="animated-text-wraper"
                    sx={{
                        maxWidth: '100%',
                    }}
                >
                    <AnimatedText text="#Ударний БпАК “1В БОМБЕР”&emsp;&emsp;#Ударні FPV дрони “ГОРОБЕЦЬ”&emsp;&emsp;#Станція ретрансляції “FPV Re-Link”&emsp;&emsp;#Акумуляторні збірки" />
                </Container>
                <Grid container className="about-wraper">
                    <Grid xs={6} item className="about-img">
                        <img src="./img/player-img.png" alt="" />
                    </Grid>
                    <Grid xs={6} item className="about-description">
                        <div className="about-title">
                            <h3>хто ми</h3>
                        </div>
                        <div className="about-text">
                            <div className="about-first-text">
                                <h4>Sparrow Avia</h4>
                                <p>
                                    Український військово-промисловий комплекс
                                    сучасних ударних БпЛА, створений на початку
                                    повномасштабного вторгнення.
                                </p>
                            </div>
                            <div className="about-second-text">
                                <h4>наша команда</h4>
                                <p>
                                    Фахівці в галузі створення та програмування
                                    дронів – провідні інженери ПЗ, конструктори,
                                    розробники, пілоти та фахівці з бойовим
                                    досвідом. Кожен – віртуоз своєї справи, який
                                    своїми знаннями наближає перемогу!
                                </p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default About
