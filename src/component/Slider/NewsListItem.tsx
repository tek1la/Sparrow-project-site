import { Card, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {
    id: number
    title: string
    description: string
    newsImg: string
}
const NewsSliderItem = ({ id, title, description, newsImg }: Props) => {
    return (
        <Card className="news-list-item" variant="outlined">
            <CardContent
                sx={{
                    padding: '0',
                }}
            >
                <div className="news-wraper">
                    <div className="news-img">
                        <img className="img" src={newsImg} alt={title} />
                    </div>
                    <div className="news-item-wraper">
                        <div>
                            <h2 className="news-item-title">
                                <Link to={`/news/${id}`}>{title}</Link>
                            </h2>
                            <p className="news-description">{description}</p>
                        </div>
                        <div className="btn-wrap">
                            <Link to={`/news/${id}`}>
                                детальніше
                                <div className="custom-arrow">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                {/* <span>
                                    <img
                                        src="img/arrow-more.svg"
                                        alt=""
                                        width="70px"
                                    />
                                </span> */}
                            </Link>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
export default NewsSliderItem
