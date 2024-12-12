import { Container, Grid, useMediaQuery } from '@mui/material'
import './Component.css'

type Props = {}
const Component = (props: Props) => {
    const isTablet = useMediaQuery('(max-width:1024px)')
    const isMobile = useMediaQuery('(max-width:545px)')
    return (
        <>
            <Container
                className="container"
                sx={{
                    padding: isMobile
                        ? '80px 15px 60px'
                        : isTablet
                          ? '100px 30px 70px'
                          : '120px 0 80px',
                    position: 'relative',
                }}
            >
                <Grid container className="component-wraper">
                    <Grid item md={4} sm={0}></Grid>
                    <Grid item sm={8} className="component-title">
                        <h3>компоненти</h3>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid
                        item
                        lg={4}
                        md={6}
                        sm={12}
                        className="component-description"
                    >
                        <div className="component-img">
                            <img src="img/component-img-1.jpg" alt="" />
                        </div>
                        <div className="component-text">
                            <div className="component-text-title">
                                <h4>
                                    Тепловізійна камера <br /> "PHOENIX EYE"
                                </h4>
                            </div>
                            <div className="component-text-text">
                                <p>
                                    Камера працює вдень і вночі за будь-якої
                                    погоди, забезпечуючи розвідку та
                                    спостереження з високою роздільною здатністю
                                    та чутливістю до теплового випромінювання.
                                    Вона створює чітке теплове зображення навіть
                                    у складних умовах.
                                </p>
                            </div>
                        </div>
                    </Grid>
                    <Grid
                        item
                        lg={4}
                        md={6}
                        sm={12}
                        className="component-description second-descript"
                    >
                        <div className="component-img">
                            <img src="img/component-img-2.jpg" alt="" />
                        </div>
                        <div className="component-text">
                            <div className="component-text-title">
                                <h4>
                                    Станція ретрансляції та керування “Sparrow
                                    Pro Link”
                                </h4>
                            </div>
                            <div className="component-text-text">
                                <p>
                                    Станція забезпечує безпечний зв’язок з
                                    безпілотниками, розділяючи модулі передавача
                                    та керування на відстань до 80 м.
                                    Використовує дублювання каналів відео,
                                    управління та телеметрії з адаптивною
                                    технологією ППРЧ.
                                </p>
                            </div>
                        </div>
                    </Grid>
                    <Grid
                        item
                        lg={4}
                        md={6}
                        sm={12}
                        className="component-description"
                    >
                        <div className="component-img">
                            <img src="img/component-img-3.jpg" alt="" />
                        </div>
                        <div className="component-text">
                            <div className="component-text-title">
                                <h4>
                                    Універсальна модульна система скиду
                                    “SDS—Mini”
                                </h4>
                            </div>
                            <div className="component-text-text">
                                <p>
                                    Система “SDS—1” має систему під 4 боєприпаси
                                    калібру 60 мм або 2 боєприпаси 82 мм.
                                    Система “SDS—2” має систему під 4 касети по
                                    3 боєприпаси калібру 40-50 мм.
                                </p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default Component
