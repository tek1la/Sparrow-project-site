import { Container, Grid } from '@mui/material'
import './HeroSection.css'
import AnimatedBtn from './AnimatedBtn'
import 'utils/i18n'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from '@mui/material'

type Props = {}
const HeroSection = (props: Props) => {
    const isTablet = useMediaQuery('(max-width:1024px)')
    const isMobile = useMediaQuery('(max-width:545px)')
    const { t } = useTranslation()
    return (
        <>
            <div
                className={`hero-wrapper ${isMobile ? 'mobile' : isTablet ? 'tablet' : ''}`}
            >
                <video className="hero-video" autoPlay muted loop>
                    <source src="/video/full.webm" type="video/mp4" />
                    Ваш браузер не підтримує відео тег.
                </video>
                <div>
                    <Container
                        className="container mobile-container"
                        sx={{
                            height: '100vh',
                            maxHeight: '1024px',
                            padding: '25vh 0',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Grid
                            container
                            sx={isMobile ? { flexDirection: 'column' } : {}}
                        >
                            <Grid item sm={1.8}></Grid>
                            <Grid
                                item
                                className="title-text-wraper"
                                sm={4}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    '@media (max-width: 1024px)': {
                                        justifyContent: 'center',
                                    },
                                }}
                            >
                                <p
                                    className={
                                        isMobile
                                            ? 'title'
                                            : isTablet
                                              ? 'title-text'
                                              : 'title-text'
                                    }
                                >
                                    {isMobile
                                        ? t('hero_section_title_text')
                                        : isTablet
                                          ? t('hero_section_title1')
                                          : t('hero_section_title1')}
                                </p>
                            </Grid>
                            <Grid
                                item
                                className="title-text-wraper main-title"
                                sm={4}
                                sx={{
                                    '@media (max-width: 1024px)': {
                                        textAlign: 'center',
                                    },
                                }}
                            >
                                <h1
                                    className={
                                        isMobile
                                            ? 'title-text'
                                            : isTablet
                                              ? 'title'
                                              : 'title'
                                    }
                                >
                                    {isMobile
                                        ? t('hero_section_title1')
                                        : isTablet
                                          ? t('hero_section_title_text')
                                          : t('hero_section_title_text')}
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
                                    '@media (max-width: 1024px)': {
                                        justifyContent: 'center',
                                    },
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
