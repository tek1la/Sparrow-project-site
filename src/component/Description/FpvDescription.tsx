import { Container, Grid } from '@mui/material'
import './Description.css'

type Props = {}
const FpvDescription = (props: Props) => {
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
                                    marginBottom: '30px',
                                }}
                            >
                                <p>
                                    БпЛА призначений для виконання бойових задач
                                    із ураження живої сили та легко/ важко
                                    броньованих об'єктів противника з повітря.
                                    Апарат створений для застосування установами
                                    різної спрямованості і підпорядкованості та
                                    розрахований на ручне керування з виконанням
                                    зльоту та посадки вертикально з різних
                                    поверхонь (земля, асфальт та інше), з
                                    дотриманням експлуатаційних обмежень.
                                </p>
                            </div>
                            <div className="fpv-descript-img-wraper">
                                <div>
                                    <img
                                        src="./img/production/fpv_desc_img_1.jpg"
                                        alt="fpv"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="./img/production/fpv_desc_img_2.jpg"
                                        alt="fpv"
                                    />
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={6} item className="descript-img">
                        <img src="./img/fpv_img.jpg" alt="bpla" />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default FpvDescription
