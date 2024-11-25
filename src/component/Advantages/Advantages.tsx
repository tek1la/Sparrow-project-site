import { Container, Grid, useMediaQuery } from '@mui/material'
import './Advantages.css'

type Props = {}
const Advantages = (props: Props) => {
    const isTablet = useMediaQuery('(max-width:1024px)')
    const isMobile = useMediaQuery('(max-width:545px)')
    return (
        <>
            <div className="advantages-bg-wraper">
                <Container
                    className="container"
                    sx={{
                        padding: isMobile
                            ? '80px 15px 60px'
                            : isTablet
                              ? '80px 0 80px'
                              : '80px 0 80px',
                    }}
                >
                    <Grid container className="advantages-items-wraper">
                        <Grid item sm={4} className="advantage-item">
                            <div className="advantages-img">
                                <img
                                    className="img"
                                    src="img/advantages_icon_1.png"
                                    alt="advantages"
                                />
                                <p className="advantages-title">&#62;40К</p>
                            </div>
                            <p>виготовлено акумуляторів на елементах molicel</p>
                        </Grid>
                        <Grid item sm={4} className="advantage-item">
                            <div className="advantages-img">
                                <img
                                    className="img"
                                    src="img/advantages_icon_2.png"
                                    alt="advantages"
                                />
                                <p className="advantages-title">~200</p>
                            </div>
                            <p>виготовлених станцій ретрансляції FPV RE—Link</p>
                        </Grid>
                        <Grid item sm={4} className="advantage-item">
                            <div className="advantages-img">
                                <img
                                    className="img"
                                    src="img/advantages_icon_3.png"
                                    alt="advantages"
                                />
                                <p className="advantages-title">&#62;35К</p>
                            </div>
                            <p>виготовлено FPV—дронів та передано їх на ЗСУ</p>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    )
}
export default Advantages
