import { Button, Container, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import './News.css'
import { NewsArray } from 'utils/NewsArray'
import NewsListItem from 'component/Slider/NewsListItem'

type Props = {}
type News = {
    id: number
    title: string
    description: string
    date: string
    source: string
    newsImg: string
}

// Переворота масиву та обмеження до 5 об'єктів
const modifiedNewsArray: News[] = [...NewsArray]
    .reverse() // Перевертає масив
    .slice(0, 5) // Обрізає до 5 об'єктів

const News = (props: Props) => {
    const navigate = useNavigate()

    // Функція для переходу на сторінку з усіма новинами
    const handleViewAll = () => {
        navigate('/all-news') // Шлях до сторінки з усіма новинами
    }
    return (
        <>
            <Container
                id="Блог"
                className="container"
                sx={{
                    padding: '120px 0 80px',
                }}
            >
                <Grid container className="news">
                    <Grid item sm={4}></Grid>
                    <Grid item sm={8} className="news-title">
                        <h3>Блог</h3>
                    </Grid>
                </Grid>
                <Grid container>
                    {modifiedNewsArray.map(
                        ({ id, title, description, date, source, newsImg }) => (
                            <Grid
                                item
                                sm={4}
                                key={id}
                                className="news-array-wraper"
                            >
                                <NewsListItem
                                    id={id}
                                    title={title}
                                    description={description}
                                    date={date}
                                    source={source}
                                    newsImg={newsImg}
                                />
                            </Grid>
                        )
                    )}
                    <Grid item sm={4} className="news-array-btn">
                        <Button className="news-btn" onClick={handleViewAll}>
                            <p>
                                переглянути
                                <br />
                                всі публікації
                            </p>
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
export default News
