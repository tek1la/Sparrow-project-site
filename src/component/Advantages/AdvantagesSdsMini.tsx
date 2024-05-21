import { Container, Grid } from '@mui/material'
import './AdvantagesSdsMini.css'

type Props = {}
const AdvantagesSdsMini = (props: Props) => {
    return (
        <>
            <Container
                className="container"
                sx={{
                    padding: '120px 0',
                    position: 'relative',
                }}
            >
                <div className="advantages-sds-mini-title">
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
                                <p>
                                    Саме тому нашою командою був розроблений
                                    скид, який на відміну від поширених на ринку
                                    моделей скидів, розміщених повністю під
                                    дроном, відрізняється принципово новою
                                    компоновкою, а саме:
                                </p>
                            </div>
                            <div className="descript-first-text">
                                <ul
                                    style={{
                                        paddingLeft: '15px',
                                    }}
                                >
                                    <li>
                                        <p>
                                            Розміщення габаритних частин
                                            механізму по боках рами;
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Зменшення загальної висоти дрона
                                            разом зі скидом - всього на 3 см
                                            більше висоти рами дрона;
                                        </p>
                                    </li>
                                    <li>
                                        <p>Зручніше транспортувати дрон;</p>
                                    </li>
                                    <li>
                                        <p>
                                            Скид пристосований до кріплення на
                                            fpv-дрони 10 дюймів.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={6} item className="battery-descript-img">
                        <div>
                            <img
                                src="./img/production/advantege-product-bg.jpg"
                                alt="sds"
                            />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default AdvantagesSdsMini
