import { Container, Grid } from '@mui/material'
import './Description.css'

type Props = {}
const BpakDescription = (props: Props) => {
    return (
        <>
            <Container
                className="container"
                sx={{
                    padding: '120px 0',
                    position: 'relative',
                }}
            >
                <div className="descript-title">
                    <h3>опис</h3>
                </div>
                <Grid container className="descript-wraper">
                    <Grid xs={6} item className="descript-description">
                        <div className="descript-text">
                            <div className="descript-first-text">
                                <p>
                                    Призначений для виконання ударних операції,
                                    вдень та вночi в простих метеорологічних
                                    умовах, в умовах активного використання
                                    противником засобів радіоелектронної
                                    боротьби.
                                </p>
                                <p>
                                    Завдяки захищеним каналам  передачі відео,
                                    керування та телеметрії “1В БОМБЕР”
                                    призначений для доставки та скиду
                                    різнокаліберного корисного навантаження
                                    вагою до 8 кілограмів з радіусом тактичної
                                    оперативної дії до 8 кілометрі.
                                </p>
                            </div>
                            <div className="descript-second-text">
                                <p>
                                    Безпілотник пройшов всі державні
                                    випробування та отримав кодифікацію НАТО
                                </p>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={6} item className="descript-img">
                        <img src="./img/bpak-img.jpg" alt="bpla" />
                    </Grid>
                </Grid>
                <Grid container className="descript-block-wraper">
                    <Grid item className="descript-block-item">
                        <div>
                            <p>
                                час знаходження у повітрі <span>30-40хв</span>
                            </p>
                        </div>
                    </Grid>
                    <Grid item className="descript-block-item">
                        <div>
                            <p>
                                <span>швидке</span> розгортання комплексу
                            </p>
                        </div>
                    </Grid>
                    <Grid item sm={4} className="descript-block-item">
                        <div>
                            <p>
                                <span>станція</span> керування та ретранслятор
                            </p>
                            <p>
                                для забеспечення безпеки
                                <br />
                                оператора БпЛА
                            </p>
                        </div>
                    </Grid>
                    <Grid item className="descript-block-item">
                        <div>
                            <p>
                                <span>Планування місій</span>
                            </p>
                        </div>
                    </Grid>
                    <Grid item className="descript-block-item">
                        <div>
                            <p>
                                Стійкість до <span>реб</span> завад і{' '}
                                <span>рер</span> засобів
                            </p>
                            <p>
                                захист від підміни координат GPS
                                <br />
                                та завад навігації
                            </p>
                        </div>
                    </Grid>
                    <Grid item className="descript-block-item">
                        <div>
                            <p>
                                <span>корисне навантаження</span>
                            </p>
                            <p>
                                до 2-х мін 82мм
                                <br />
                                до 4-х мін 60мм
                                <br />
                                до 12-ти гранат 40мм
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default BpakDescription
