import { Container, Grid } from '@mui/material'
import './Description.css'

type Props = {}
const SdsDescription = (props: Props) => {
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
                    sx={{
                        flexDirection: 'column',
                    }}
                    style={{
                        gap: '60px',
                        marginBottom: '0',
                    }}
                >
                    <Grid
                        container
                        style={{
                            gap: '30px',
                            flexWrap: 'nowrap',
                        }}
                    >
                        <Grid
                            xs={6}
                            item
                            className="descript-description"
                            style={{
                                gap: '30px',
                                flexWrap: 'nowrap',
                            }}
                        >
                            <div className="descript-text">
                                <div
                                    className="descript-first-text"
                                    style={{
                                        marginBottom: '30px',
                                    }}
                                >
                                    <p
                                        style={{
                                            marginBottom: '15px',
                                        }}
                                    >
                                        Зростаюче зацікавлення використанням
                                        квадрокоптерів у військовій сфері
                                        ставить перед науково-технічною
                                        спільнотою завдання щодо вдосконалення
                                        їх функціональних можливостей. Одним із
                                        аспектів, що потребує оптимізації, є
                                        система скидання боєприпасів.
                                    </p>
                                    <p>
                                        Здатність квадрокоптера ефективно та
                                        безпечно скидати боєприпаси відкриває
                                        нові перспективи досліджень у цій сфері.
                                    </p>
                                </div>
                            </div>
                        </Grid>
                        <Grid
                            xs={6}
                            item
                            className="descript-first-text"
                            sx={{
                                display: 'flex',
                                gap: '15px',
                            }}
                        >
                            <img
                                style={{
                                    borderRadius: '10px',
                                }}
                                src="./img/production/sds_desc_img_1.jpg"
                                alt=""
                            />
                            <img
                                style={{
                                    borderRadius: '10px',
                                }}
                                src="./img/production/sds_desc_img_2.jpg"
                                alt=""
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        style={{
                            gap: '30px',
                            flexWrap: 'nowrap',
                        }}
                    >
                        <Grid
                            xs={6}
                            item
                            className="descript-first-text"
                            sx={{
                                display: 'flex',
                                gap: '15px',
                            }}
                        >
                            <img
                                style={{
                                    borderRadius: '10px',
                                    height: '200px',
                                }}
                                src="./img/production/sds_desc_img_3.jpg"
                                alt=""
                            />
                            <img
                                style={{
                                    borderRadius: '10px',
                                    height: '200px',
                                }}
                                src="./img/production/sds_desc_img_4.jpg"
                                alt=""
                            />
                        </Grid>
                        <Grid xs={6} item className="descript-img">
                            <div
                                className="descript-first-text"
                                style={{
                                    marginBottom: '30px',
                                }}
                            >
                                <p
                                    style={{
                                        marginBottom: '15px',
                                    }}
                                >
                                    Недолік існуючих систем скидання вантажу для
                                    квадрокоптерів з точки зору аеродинаміки
                                    призводить до зменшення ефективності
                                    літального апарата, а перевищення параметрів
                                    міцності конструкції порівняно з цільовим
                                    навантаженням призводить до надмірного
                                    використання матеріалів та збільшення ваги.
                                </p>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                    }}
                                >
                                    <div>
                                        <img
                                            src="./img/production/sds_desc_icon.svg"
                                            alt="icon"
                                        />
                                    </div>
                                    <div>
                                        <p>
                                            Для вирішення цих проблем потрібно
                                            оптимізувати конструкцію системи
                                            скидання боєприпасів з точки зору
                                            аеродинаміки та параметрів міцності,
                                            що дозволить підвищити загальну
                                            ефективність дрона-носія та
                                            покращити його літальні
                                            характеристики.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default SdsDescription
