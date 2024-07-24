import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import './NewsListItem.css'

type Props = {
    id: number
    title: string
    description: string
    date: string
    source: string
    newsImg: string
}
const NewsSliderItem = ({
    id,
    title,
    description,
    date,
    source,
    newsImg,
}: Props) => {
    return (
        <Grid className="news-list-item">
            <div className="news-wraper">
                <div className="news-img-wraper">
                    <div className="news-img">
                        <img className="img" src={newsImg} alt={title} />
                    </div>
                </div>
                <div className="news-item-wraper">
                    <div className="news-item-text">
                        <p className="news-date">{date}</p>
                        <p className="news-source">{source}</p>
                    </div>
                    <h2 className="news-item-title">
                        <Link to={`/news/${id}`}>{title}</Link>
                    </h2>
                </div>
            </div>
        </Grid>
    )
}
export default NewsSliderItem
