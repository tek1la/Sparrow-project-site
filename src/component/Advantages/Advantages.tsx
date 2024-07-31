import { Container, Grid } from '@mui/material'
import './Advantages.css'

type Props = {}
const Advantages = (props: Props) => {
    return (
        <>
            <Container
                className="container"
                sx={{
                    padding: '120px 0 80px',
                }}
            >
                <Grid container className="advantages-wraper">
                    <Grid item sm={4}></Grid>
                    <Grid item sm={8} className="advantages-title">
                        <h3>переваги</h3>
                    </Grid>
                </Grid>
                <Grid container className="advantages-items-wraper">
                    <Grid item sm={4} className="advantage-item">
                        <div className="advantages-img">
                            <img
                                className="img"
                                src="img/advantages-img-1.jpg"
                                alt="advantages"
                            />
                            {/* <div className="advantages-icon-1"></div> */}
                        </div>
                        <p>Великий обсяг замовлень</p>
                    </Grid>
                    <Grid item sm={4} className="advantage-item">
                        <div className="advantages-img">
                            <img
                                className="img"
                                src="img/advantages-img-2.jpg"
                                alt="advantages"
                            />
                            {/* <div className="advantages-icon-2"></div> */}
                        </div>
                        <p>Швидка та надійна доставка</p>
                    </Grid>
                    <Grid item sm={4} className="advantage-item">
                        <div className="advantages-img">
                            <img
                                className="img"
                                src="img/advantages-img-3.jpg"
                                alt="advantages"
                            />
                            {/* <div className="advantages-icon-3"></div> */}
                        </div>
                        <p>Тільки найкращі компоненти</p>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default Advantages
