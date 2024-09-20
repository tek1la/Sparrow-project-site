import { Button, Container, Grid } from '@mui/material'
import { useState } from 'react'
import './Blog.css'
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

const Blog = (props: Props) => {
    const [pages, setPages] = useState<number>(6) // Кількість новин, яку будемо показувати
    const [visibleNews, setVisibleNews] = useState<NewsType[]>(
        NewsArray.slice(0, pages)
    )

    // Функція для відображення більше новин
    const handleViewAll = () => {
        const newPages = pages + 6
        setPages(newPages)
        setVisibleNews(NewsArray.slice(0, newPages)) // Оновлюємо видимі новини
    }
    return (
        <>
            <Grid className="body-wraper">
                <Container
                    id="Блог"
                    className="container"
                    sx={{
                        padding: '278px 0 80px',
                    }}
                >
                    <Grid container className="blog">
                        <Grid item sm={4}></Grid>
                        <Grid item sm={8} className="blog-title">
                            <h3>Блог</h3>
                        </Grid>
                    </Grid>
                    <Grid container>
                        {visibleNews.map(
                            ({
                                id,
                                title,
                                description,
                                date,
                                source,
                                newsImg,
                            }) => (
                                <Grid
                                    item
                                    sm={4}
                                    key={id}
                                    className="blog-array-wraper"
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
                    <Grid container className="blog-array-btn">
                        <Button className="blog-btn" onClick={handleViewAll}>
                            Більше
                        </Button>
                    </Grid>
                </Container>
            </Grid>
        </>
    )
}
export default Blog
