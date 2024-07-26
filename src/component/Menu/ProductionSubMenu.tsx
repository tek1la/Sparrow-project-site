import ProductionSubMenuItem from './ProductionSubMenuItem'
import './ProductionSubMenu.css'
import { productionArray } from 'utils/productionArray'

type Props = {
    onMouseEnter?: () => void
    onMouseLeave?: () => void
}
const ProductionSubMenu = ({ onMouseEnter, onMouseLeave }: Props) => {
    return (
        <>
            <div
                className="sub-menu-wraper"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
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
