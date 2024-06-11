import { Button, Container, Grid } from '@mui/material'
import './PriceList.css'

type Props = {}
const PriceList = (props: Props) => {
    return (
        <div className="price-list-bg-wraper">
            <Container
                id="КАТАЛОГ"
                className="container price-list-wraper"
                sx={{
                    padding: '120px 0',
                }}
            >
                <Grid>
                    <div className="price-list-btn-wraper">
                        <div className="price-list-btn-icon"></div>
                        <Button className="price-list-btn">
                            завантажуй Pdf
                        </Button>
                    </div>
                </Grid>
                <Grid>
                    <div className="price-list-title">
                        <h3>каталог</h3>
                    </div>
                </Grid>
            </Container>
        </div>
    )
}
export default PriceList
