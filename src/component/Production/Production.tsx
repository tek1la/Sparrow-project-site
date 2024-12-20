import { Container, Grid, useMediaQuery } from '@mui/material'
import ProductionSlider from 'component/Slider/ProductionSlider'
import ProductionCol from './ProductionCol'
import './Production.css'

type Props = {}

const Production = (props: Props) => {
    const isTablet = useMediaQuery('(max-width:1024px)')
    const isMediumTablet = useMediaQuery('(max-width:800px)')
    const isMobile = useMediaQuery('(max-width:545px)')
    return (
        <>
            <Container
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
                <Grid container className="production">
                    <Grid item lg={4} md={0} sm={0}></Grid>
                    <Grid item sm={8} className="production-title">
                        <h3>виробництво</h3>
                    </Grid>
                </Grid>
                <Grid container>
                    {isMobile ? (
                        <ProductionCol />
                    ) : isMediumTablet ? (
                        <ProductionCol />
                    ) : isTablet ? (
                        <ProductionSlider />
                    ) : (
                        <ProductionSlider />
                    )}
                </Grid>
            </Container>
        </>
    )
}
export default Production
