import ProductionSubMenuItem from './ProductionSubMenuItem'
import './ProductionSubMenu.css'
import { productionArray } from 'utils/productionArray'

type Props = {}
const ProductionSubMenu = (props: Props) => {
    return (
        <>
            <div className="sub-menu-wraper">
                {productionArray.map(({ id, subTitle, path }) => (
                    <ProductionSubMenuItem key={id} path={path}>
                        {subTitle}
                    </ProductionSubMenuItem>
                ))}
            </div>
        </>
    )
}
export default ProductionSubMenu
