import { Grid } from '@mui/material'
import ProductionListItem from 'component/Slider/ProductionListItem'
import { productionArray } from 'utils/productionArray'

type Prod = {
    id: number
    title: string
    firstTitle: string
    secondTitle: string
    productionImg: string
    path: string
}

const modifiedProductionArray: Prod[] = [...productionArray]

type Props = {}
const ProductionCol = (props: Props) => {
    return (
        <>
            <Grid container className="123dsa">
                {modifiedProductionArray.map(
                    ({
                        id,
                        title,
                        firstTitle,
                        secondTitle,
                        productionImg,
                        path,
                    }) => (
                        <Grid className="prodaction-mobile" key={id}>
                            <ProductionListItem
                                id={id}
                                title={title}
                                firstTitle={firstTitle}
                                secondTitle={secondTitle}
                                productionImg={productionImg}
                                path={path}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductionCol
