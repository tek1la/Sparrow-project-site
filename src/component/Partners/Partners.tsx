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
                    padding: '120px 0 80px',
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
                    <PartnersSlider />
                </Grid>
            </Container>
        </>
    )
}
export default Partners
