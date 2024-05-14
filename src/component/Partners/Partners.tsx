import { Container, Grid } from '@mui/material'
import PartnersSlider from 'component/Slider/PartnersSlider'
import './Partners.css'

type Props = {}
const Partners = (props: Props) => {
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
                    <div className="partners-title">
                        <h3>Наші партнери</h3>
                    </div>
                </Grid>
                <Grid>
                    <PartnersSlider />
                </Grid>
            </Container>
        </>
    )
}
export default Partners
