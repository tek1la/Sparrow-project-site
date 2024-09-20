import { Container, Grid } from '@mui/material'
import './AdvantagesBattery.css'

type Props = {}
const AdvantagesBattery = (props: Props) => {
    return (
        <>
            <Container
                className="container"
                sx={{
                    padding: '120px 0',
                    position: 'relative',
                }}
            >
                <div className="advantages-battery-title">
                    <h3>переваги</h3>
                </div>
                <Grid
                    container
                    className="descript-wraper"
                    style={{
                        marginBottom: '0',
                    }}
                >
                    <Grid xs={6} item className="descript-description">
                        <div className="descript-text">
                            <div
                                className="descript-first-text"
                                style={{
                                    marginBottom: '15px',
                                }}
                            >
                                <p className="battery-advantage-title">
                                    З акумуляторними збірками на елементах
                                    molicel INR-21700-P42A ви можете:
                                </p>
                            </div>
                            <div className="battery-descript-first-text">
                                <ul
                                    style={{
                                        paddingLeft: '15px',
                                    }}
                                >
                                    <li>
                                        <p>
                                            Бути впевненими в часі польоту БпЛА;
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Не зважати на погодні умови, холод
                                            до -40;
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Не турбуватися про те, що ваш БпЛА
                                            залишиться без акумулятора в
                                            потрібний момент;
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Заощадити на купівлі акумуляторів;
                                        </p>
                                    </li>
                                    <li>
                                        <p>Підтримувати економіку України.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={6} item className="battery-descript-img">
                        <div>
                            <img src="" alt="battery" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default AdvantagesBattery
