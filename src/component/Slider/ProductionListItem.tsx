import { Card, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {
    id: number
    title: string
    description: string
    productionImg: string
}
const ProductionListItem = ({
    id,
    title,
    description,
    productionImg,
}: Props) => {
    return (
        <Card className="production-list-item" variant="outlined">
            <CardContent
                sx={{
                    padding: '0',
                }}
            >
                <div className="production-wraper">
                    <div className="production-img">
                        <img className="img" src={productionImg} alt={title} />
                    </div>
                    <div className="porduction-item-wraper">
                        <div>
                            <h2 className="production-item-title">
                                <Link to={`/production/${id}`}>{title}</Link>
                            </h2>
                            <p className="production-description">
                                {description}
                            </p>
                        </div>
                        <div className="btn-wrap">
                            <Link to={`/production/${id}`}>
                                детальніше
                                <span>
                                    <img
                                        src="img/arrow-more.svg"
                                        alt=""
                                        width="70px"
                                    />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
export default ProductionListItem
