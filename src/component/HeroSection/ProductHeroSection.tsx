import { Container, Grid } from '@mui/material'
import SouthIcon from '@mui/icons-material/South'
import './ProductHeroSection.css'

type Props = {
    firstTitle: string
    secondTitle: string
    bgImg: string
}
const ProductHeroSection = ({ firstTitle, secondTitle, bgImg }: Props) => {
    return (
        <>
            <div
                className="hero-wrapper"
                style={{
                    backgroundImage: `url("img/production/${bgImg}.jpg")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
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
                                    height: '205px',
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                }}
                            >
                                <p className="title-text">{firstTitle}</p>
                                <div
                                    style={{
                                        backgroundImage: `url('img/production/${firstTitle}_first_bg.png')`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'inherit',
                                        position: 'absolute',
                                        height: '204px',
                                        width: '100%',
                                    }}
                                ></div>
                            </Grid>
                            <Grid
                                item
                                sx={{
                                    height: '205px',
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'relative',
                                }}
                            >
                                <p
                                    className="title-text second-title-text"
                                    style={{
                                        marginRight: '0',
                                    }}
                                >
                                    {secondTitle}
                                </p>
                                <div
                                    style={{
                                        backgroundImage: `url('img/production/${secondTitle}_second_bg.png')`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'inherit',
                                        position: 'absolute',
                                        height: '204px',
                                        width: '100%',
                                    }}
                                ></div>
                            </Grid>
                        </Grid>
                        <Grid
                            sx={{
                                position: 'absolute',
                                display: 'flex',
                                justifyContent: 'center',
                                bottom: '30px',
                                left: '0',
                                right: '0',
                            }}
                        >
                            <SouthIcon
                                sx={{
                                    border: '1px solid white',
                                    padding: '3px',
                                    borderRadius: '25px',
                                    color: 'white',
                                    height: '43px',
                                    width: '43px',
                                }}
                            />
                        </Grid>
                    </Container>
                </div>
            </div>
        </>
    )
}
export default ProductHeroSection
