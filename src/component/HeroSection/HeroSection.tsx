import { Button, Container, Grid } from '@mui/material'
import './HeroSection.css'
import AnimatedBtn from './AnimatedBtn'

type Props = {}
const HeroSection = (props: Props) => {
    return (
        <>
            <div className="hero-wrapper">
                <video className="hero-video" autoPlay muted loop>
                    <source src="/video/4.mp4" type="video/mp4" />
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
                            <Grid
                                item
                                className="title-text-wraper"
                                sm={6.4}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    position: 'relative',
                                    paddingRight: '23px',
                                }}
                            >
                                <p className="title-text">НАШЕ</p>
                            </Grid>
                            <Grid
                                item
                                sm={4}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'relative',
                                }}
                            >
                                <h1 className="title">
                                    УКРАЇНСЬКИЙ ВИРОБНИК СУЧАСНИХ УДАРНИХ БПЛА
                                </h1>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative',
                            }}
                        >
                            <p className="title-text">НЕБО-НАШІ</p>
                        </Grid>
                        <Grid container>
                            <Grid
                                item
                                sm={3.5}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    position: 'relative',
                                }}
                            >
                                <Button
                                    sx={{
                                        color: '#656C7D',
                                        border: '1px solid #656C7D',
                                        fontSize: '25px',
                                        fontWeight: '400',
                                        padding: '25px 30px',
                                        fontFamily: 'Montserrat',
                                        borderRadius: '500px',
                                        marginRight: '10px',
                                    }}
                                >
                                    консультація
                                </Button>
                            </Grid>
                            <Grid
                                item
                                sm={8.5}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    position: 'relative',
                                    paddingLeft: '20px',
                                }}
                            >
                                <p className="title-text">ПРАВИЛА!</p>
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
