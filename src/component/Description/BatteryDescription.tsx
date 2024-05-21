import { Container, Grid } from '@mui/material'
import './Description.css'

type Props = {}
const BatteryDescription = (props: Props) => {
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
                                    marginBottom: '15px',
                                }}
                            >
                                <p>
                                    Акумуляторні збірки на елементах molicel
                                    INR-21700-P42A виготовляються з
                                    високоякісних матеріалів та проходять
                                    ретельне тестування. Це забезпечує їхню
                                    високу міцність та надійність.
                                </p>
                            </div>
                            <div className="descript-first-text">
                                <p>
                                    Елементи molicel INR-21700-P42A мають високу
                                    енергоємність, що забезпечує тривалу роботу
                                    БпЛА. Вони також здатні працювати в холоді
                                    до -40, що робить їх ідеальними для
                                    використання в зимових умовах.
                                </p>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={6} item className="battery-descript-img">
                        <div>
                            <img
                                src="./img/production/batery_desc_img_1.jpg"
                                alt="batery"
                            />
                        </div>
                        <div>
                            <img
                                src="./img/production/batery_desc_img_2.jpg"
                                alt="batery"
                            />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default BatteryDescription
