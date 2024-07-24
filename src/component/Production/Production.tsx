import { Container, Grid } from '@mui/material'
import './Production.css'
import { productionArray } from 'utils/productionArray'
import ProductionListItem from 'component/Slider/ProductionListItem'

type Props = {}
type Prod = {
    id: number
    title: string
    firstTitle: string
    secondTitle: string
    productionImg: string
    path: string
}

const modifiedProductionArray: Prod[] = [...productionArray]
modifiedProductionArray.splice(3, 0, {
    id: 0,
    title: '',
    firstTitle: '',
    secondTitle: '',
    productionImg: '',
    path: '',
})

const Production = (props: Props) => {
    return (
        <>
            <Container
                id="ВИРОБНИЦТВО"
                className="container"
                sx={{
                    padding: '120px 0 80px',
                    position: 'relative',
                }}
            >
                <Grid container className="production">
                    <Grid item sm={4}></Grid>
                    <Grid item sm={8} className="production-title">
                        <h3>виробництво</h3>
                    </Grid>
                </Grid>
                <Grid container>
                    {modifiedProductionArray.map(
                        ({
                            id,
                            title,
                            firstTitle,
                            secondTitle,
                            productionImg,
                            path,
                        }) => (
                            <Grid
                                item
                                sm={4}
                                key={id}
                                className="prodaction-array-wraper"
                            >
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
            </Container>
        </>
    )
}
export default Production
