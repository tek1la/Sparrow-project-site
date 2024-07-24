import { Container, Grid } from '@mui/material'
import './Result.css'

type Props = {}
const Result = (props: Props) => {
    return (
        <>
            <Container
                className="container"
                sx={{
                    padding: '120px 0 80px',
                    position: 'relative',
                }}
            >
                <Grid container>
                    <Grid item sm={4} className="result-title result-item">
                        <h3>Наш результат</h3>
                    </Grid>
                    <Grid item sm={4} className="result-item">
                        <div className="result-img">
                            <img
                                className="img"
                                src="img/result-img-1.jpg"
                                alt="Result-img"
                            />
                        </div>
                        <p className="result-text">
                            Запустили виробництво акумуляторних батарей.
                            Виготовили понад 10 тисяч АКБ, які забезпечують
                            надійне живлення для дронів.
                        </p>
                    </Grid>
                    <Grid item sm={4} className="result-item"></Grid>
                    <Grid item sm={4} className="result-item"></Grid>
                    <Grid item sm={4} className="result-item">
                        <div className="result-img">
                            <img
                                className="img"
                                src="img/result-img-2.jpg"
                                alt="Result-img"
                            />
                        </div>
                        <p className="result-text">
                            Створили ударний БпАК “1В BOMBER”, який отримав
                            кодифікацію НАТО та ефективно виконує бойові
                            завдання на лінії фронту.
                        </p>
                    </Grid>
                    <Grid item sm={4} className="result-item">
                        <div className="result-img">
                            <img
                                className="img"
                                src="img/result-img-3.jpg"
                                alt="Result-img"
                            />
                        </div>
                        <p className="result-text">
                            Успішно реалізували 4 проєкти поставок для ЗСУ,
                            надавши понад 10 тисяч FPV-дронів для розвідки та
                            бойових завдань.
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default Result
