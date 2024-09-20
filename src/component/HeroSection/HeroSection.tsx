import { Container, Grid } from '@mui/material'
import './HeroSection.css'
import AnimatedBtn from './AnimatedBtn'
import 'utils/i18n'
import { useTranslation } from 'react-i18next'

type Props = {}
const HeroSection = (props: Props) => {
    const { t } = useTranslation()
    return (
        <>
            <div className="hero-wrapper">
                <video className="hero-video" autoPlay muted loop>
                    <source src="/video/full.webm" type="video/mp4" />
                    Ваш браузер не підтримує відео тег.
                </video>
                <div>
                    <Container
                        className="container"
                        sx={{
                            height: '100vh',
                            maxHeight: '1024px',
                            padding: '25vh 0',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Grid container>
                            <Grid item sm={1.8}></Grid>
                            <Grid
                                item
                                className="title-text-wraper"
                                sm={4}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                }}
                            >
                                <p className="title-text">
                                    {t('hero_section_title1')}
                                </p>
                            </Grid>
                            <Grid
                                item
                                className="title-text-wraper main-title"
                                sm={4}
                            >
                                <h1 className="title">
                                    {t('hero_section_title_text')}
                                </h1>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item sm={1.8}></Grid>
                            <Grid
                                className="title-text-wraper"
                                item
                                sm={10.2}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                }}
                            >
                                <p className="title-text">
                                    {t('hero_section_title2')}
                                </p>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item sm={2.7}></Grid>
                            <Grid item sm={8} className="title-text-wraper">
                                <p className="title-text">
                                    {t('hero_section_title3')}
                                </p>
                            </Grid>
                        </Grid>
                    </Container>
                    <AnimatedBtn />
                </div>
            </div>
        </>
    )
}
export default HeroSection
