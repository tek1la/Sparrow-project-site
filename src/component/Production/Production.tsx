import { Container, Grid } from '@mui/material'
import ProductionSlider from 'component/Slider/ProductionSlider'
import './Production.css'

type Props = {}

const Production = (props: Props) => {
    return (
        <>
            <Container
                className="container"
                sx={{
                    padding: '120px 0 80px',
                    position: 'relative',
                }}
            >
                <Grid container className="production">
                    <Grid item sm={4}></Grid>
                    <Grid item sm={8} className="production-title">
                        <h3>виробництво</h3>
                    </Grid>
                </Grid>
                <Grid container>
                    <ProductionSlider />
                </Grid>
            </Container>
        </>
    )
}
export default Production
