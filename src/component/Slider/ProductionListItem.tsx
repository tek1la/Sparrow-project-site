import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import './ProductionListItem.css'

type Props = {
    id: number
    title: string
    firstTitle: string
    secondTitle: string
    productionImg: string
    path: string
}
const ProductionListItem = ({
    id,
    title,
    firstTitle,
    secondTitle,
    productionImg,
    path,
}: Props) => {
    return (
        <Grid
            className="production-list-item"
            sx={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div className="production-wraper">
                <div className="production-img-wraper">
                    <div className="production-img">
                        <img className="img" src={productionImg} alt={title} />
                    </div>
                </div>
                <div className="porduction-item-wraper">
                    <h2 className="production-item-title">
                        <Link to={path}>
                            {firstTitle}
                            <br />
                            {secondTitle}
                        </Link>
                    </h2>
                </div>
            </div>
        </Grid>
    )
}
export default ProductionListItem
