import ProductionSubMenuItem from './ProductionSubMenuItem'
import './ProductionSubMenu.css'
import { productionArray } from 'utils/productionArray'

type Props = {}
const ProductionSubMenu = (props: Props) => {
    return (
        <>
            <div className="sub-menu-wraper">
                {productionArray.map(({ id, title, path }) => (
                    <ProductionSubMenuItem key={id} path={path}>
                        {title}
                    </ProductionSubMenuItem>
                ))}
            </div>
        </>
    )
}
export default ProductionSubMenu
