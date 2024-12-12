import { Button, Container, Grid, useMediaQuery } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import './News.css'
import { NewsArray } from 'utils/NewsArray'
import NewsListItem from 'component/Slider/NewsListItem'

type Props = {}
type NewsType = {
    id: number
    title: string
    description: string
    date: string
    source: string
    newsImg: string
}

// Переворота масиву та обмеження до 5 об'єктів
const modifiedNewsArray: NewsType[] = [...NewsArray]
    .reverse() // Перевертає масив
    .slice(0, 6)

const News = (props: Props) => {
    const navigate = useNavigate()

    // Функція для переходу на сторінку з усіма новинами
    const handleViewAll = () => {
        navigate('/all-news') // Шлях до сторінки з усіма новинами
    }

    const isTablet = useMediaQuery('(max-width:1024px)')
    const isMobile = useMediaQuery('(max-width:600px)')
    return (
        <>
            <Container
                id="Блог"
                className="container"
                sx={{
                    padding: isMobile
                        ? '80px 15px 60px'
                        : isTablet
                          ? '120px 0 80px'
                          : '120px 0 80px',
                }}
            >
                <Grid container className="news">
                    <Grid item lg={4} md={4} sm={0}></Grid>
                    <Grid item lg={8} md={8} sm={12} className="news-title">
                        <h3>Блог</h3>
                    </Grid>
                </Grid>
                <Grid container>
                    {modifiedNewsArray.map(
                        ({ id, title, description, date, source, newsImg }) => (
                            <Grid
                                item
                                md={4}
                                sm={12}
                                xs={12}
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
                </Grid>
                <Grid container className="news-array-btn">
                    <Button className="news-btn" onClick={handleViewAll}>
                        переглянути всі публікації
                    </Button>
                </Grid>
            </Container>
        </>
    )
}
export default News
