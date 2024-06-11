import { Container, Grid } from '@mui/material'
import './Result.css'

type Props = {}
const Result = (props: Props) => {
    return (
        <>
            <Container
                className="container"
                sx={{
                    padding: '120px 0',
                    position: 'relative',
                }}
            >
                <Grid>
                    <div className="result-title">
                        <h3>Наш результат</h3>
                    </div>
                </Grid>
                <Grid container gap={3.5} wrap="nowrap">
                    <Grid item className="result-card-wraper">
                        <div
                            style={{
                                height: '250px',
                            }}
                        >
                            <img
                                className="result-img"
                                src="img/result-img-1.jpg"
                                alt=""
                            />
                        </div>
                        <p className="result-text">
                            Створили та розробили повноцінний ударний БпАК “1В
                            BOMBER”, який отримав кодифікацію НАТО та ефективно
                            виконує бойові завдання на лінії фронту. 
                        </p>
                    </Grid>
                    <Grid item className="result-card-wraper">
                        <div
                            style={{
                                height: '250px',
                            }}
                        >
                            <img
                                className="result-img"
                                src="img/result-img-2.jpg"
                                alt=""
                            />
                        </div>
                        <p className="result-text">
                            Запустили виробництва акумуляторів, ретрансляторів.
                            Вже виготовили понад 10 тисяч АКБ та 120 станцій
                            ретрансляції.
                        </p>
                    </Grid>
                    <Grid item className="result-card-wraper">
                        <div
                            style={{
                                height: '250px',
                            }}
                        >
                            <img
                                className="result-img"
                                src="img/result-img-3.jpg"
                                alt=""
                            />
                        </div>

                        <p className="result-text">
                            Успішно реалізували 4 проєкти поставок для ЗСУ –
                            понад 10 тисяч FPV. 
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default Result
