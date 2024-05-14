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
                    padding: '120px 0',
                    position: 'relative',
                }}
            >
                <Grid>
                    <div className="production-title">
                        <h3>виробництво</h3>
                    </div>
                </Grid>
                <Grid>
                    <ProductionSlider />
                </Grid>
            </Container>
        </>
    )
}
export default Production
