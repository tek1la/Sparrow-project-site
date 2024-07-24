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
                }}
            >
                <Grid container className="partners-wraper">
                    <Grid item sm={4}></Grid>
                    <Grid item sm={8} className="partners-title">
                        <h3>партнери</h3>
                    </Grid>
                </Grid>
                <Grid container className="partners-items-wraper">
                    <Grid item sm={4} className="partners-item">
                        <div className="partners-img">
                            <img
                                src="img/partner-true-ukr.svg"
                                alt="true-ukr"
                            />
                        </div>
                    </Grid>
                    <Grid item sm={4} className="partners-item">
                        <div className="partners-img">
                            <img src="img/partner-vexilum.svg" alt="vexilum" />
                        </div>
                    </Grid>
                    <Grid item sm={4} className="partners-item">
                        <div className="partners-img">
                            <img src="img/partner-taf.svg" alt="taf" />
                        </div>
                    </Grid>
                    <Grid item sm={4} className="partners-item">
                        <div className="partners-img">
                            <img src="img/partner-atn.svg" alt="atn" />
                        </div>
                    </Grid>
                    <Grid item sm={4} className="partners-item">
                        <div className="partners-img">
                            <img src="img/partner-ts-fly.svg" alt="tsfly" />
                        </div>
                    </Grid>
                    <Grid item sm={4} className="partners-item"></Grid>
                </Grid>
            </Container>
        </>
    )
}
export default Partners
