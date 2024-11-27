import { Container, Grid, useMediaQuery } from '@mui/material'
import PartnersSlider from 'component/Slider/PartnersSlider'
import PartnersCol from './PartnersCol'
import './Partners.css'

type Props = {}
const Partners = (props: Props) => {
    const isTablet = useMediaQuery('(max-width:1024px)')
    const isMobile = useMediaQuery('(max-width:545px)')
    return (
        <>
            <Container
                className="container"
                sx={{
                    padding: isMobile
                        ? '80px 15px 60px'
                        : isTablet
                          ? '120px 0 80px'
                          : '120px 0 80px',
                    position: 'relative',
                }}
            >
                <Grid container className="partners-wraper">
                    <Grid item sm={4}></Grid>
                    <Grid item sm={8} className="partners-title">
                        <h3>партнери</h3>
                    </Grid>
                </Grid>
                <Grid container>
                    {isMobile ? (
                        <PartnersCol />
                    ) : isTablet ? (
                        <PartnersSlider />
                    ) : (
                        <PartnersSlider />
                    )}
                </Grid>
            </Container>
        </>
    )
}
export default Partners
