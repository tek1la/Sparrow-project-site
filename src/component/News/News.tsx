import { Container, Grid } from '@mui/material'
import './News.css'
import NewsSlider from 'component/Slider/NewsSlider'
import { ukraineNewsArray } from 'utils/ukraineNewsArray'
import { internationalNewsArray } from 'utils/internationalNewsArray'

type Props = {}
const News = (props: Props) => {
    return (
        <>
            <Container
                className="container"
                sx={{
                    padding: '120px 0',
                }}
            >
                <Grid>
                    <div className="news-title">
                        <h3>Новини</h3>
                    </div>
                </Grid>
                <Grid className="news-items-wraper">
                    <Grid className="news-item-title-wraper">
                        <div className="news-line"></div>
                        <div>
                            <h4>Українські</h4>
                        </div>
                        <div className="news-line"></div>
                    </Grid>
                    <Grid>
                        <NewsSlider newsArray={ukraineNewsArray} />
                    </Grid>
                </Grid>
                <Grid
                    className="news-items-wraper"
                    sx={{
                        marginTop: '60px',
                    }}
                >
                    <Grid className="news-item-title-wraper">
                        <div className="news-line"></div>
                        <div>
                            <h4>Міжнародні</h4>
                        </div>
                        <div className="news-line"></div>
                    </Grid>
                    <Grid>
                        <NewsSlider newsArray={internationalNewsArray} />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default News
