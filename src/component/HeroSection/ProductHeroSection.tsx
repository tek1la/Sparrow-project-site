import { Button, Container, Grid } from '@mui/material'
import './ProductHeroSection.css'
import AnimatedBtn from './AnimatedBtn'

type Props = {
    id: number
    title: string
    subTitle: string
    firstTitle: string
    secondTitle: string
    description: string
    productionImg: string
    video: string
    path: string
}
const ProductHeroSection = ({
    id,
    title,
    subTitle,
    firstTitle,
    secondTitle,
    description,
    productionImg,
    video,
    path,
}: Props) => {
    return (
        <>
            <div className="hero-wrapper">
                <video className="hero-video" autoPlay muted loop playsInline>
                    <source src={video} type="video/webm" />
                    Ваш браузер не підтримує відео тег.
                </video>
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
                                justifyContent: 'center',
                            }}
                        >
                            <Grid
                                item
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                }}
                            >
                                <p className="title-text">{subTitle}</p>
                            </Grid>
                            <Grid item className="hero-section-btn">
                                <Button className="hero-btn">
                                    КОНСУЛЬТАЦІЯ
                                </Button>
                            </Grid>
                        </Grid>
                        <AnimatedBtn />
                    </Container>
                </div>
            </div>
        </>
    )
}
export default ProductHeroSection
