import { Container, Grid } from '@mui/material'
import ResultMisionSlider from 'component/Slider/ResultMisionSlider'
import './ProductionResult.css'

type Props = {}
const ProductionResult = (props: Props) => {
    return (
        <>
            <div
                style={{
                    position: 'relative',
                }}
            >
                <Container
                    className="container"
                    sx={{
                        padding: '120px 0',
                        position: 'relative',
                    }}
                >
                    <Grid>
                        <div className="result-mision-title">
                            <h3>
                                бойові місії виконував
                                <br />у підрозділах:
                            </h3>
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '-20px',
                                    right: '0',
                                    height: '240px',
                                }}
                            >
                                <img
                                    src="img/result-mision-title-bg.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </Grid>
                    <Grid>
                        <ResultMisionSlider />
                    </Grid>
                </Container>
            </div>
        </>
    )
}
export default ProductionResult
