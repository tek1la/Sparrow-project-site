import { Container, Grid } from '@mui/material'
import './HeroSection.css'
import AnimatedBtn from './AnimatedBtn'

type Props = {}
const HeroSection = (props: Props) => {
    return (
        <>
            <div className="hero-wrapper">
                <div className="bg-wrapper">
                    <Container
                        className="container"
                        sx={{
                            height: '100vh',
                            maxHeight: '1024px',
                            padding: '20vh 0',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Grid
                            container
                            sx={{
                                justifyContent: 'flex-end',
                            }}
                        >
                            <Grid
                                item
                                sx={{
                                    height: '205px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    position: 'relative',
                                }}
                            >
                                <p className="title-text">НАШЕ НЕБО</p>
                                <div className="title-text-bg"></div>
                            </Grid>
                            <Grid item>
                                <h1 className="title">
                                    УКРАЇНСЬКИЙ ВИРОБНИК СУЧАСНИХ УДАРНИХ БПЛА
                                </h1>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            sx={{
                                height: '205px',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                position: 'relative',
                            }}
                        >
                            <p className="title-text second-title-text">
                                НАШІ ПРАВИЛА
                            </p>
                            <div className="second-title-text-bg"></div>
                        </Grid>
                    </Container>
                    <AnimatedBtn />
                </div>
            </div>
        </>
    )
}
export default HeroSection
