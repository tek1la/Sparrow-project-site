import ProductionSubMenuItem from './ProductionSubMenuItem'
import './ProductionSubMenu.css'
import { productionArray } from 'utils/productionArray'

type Props = {
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    onMenuItemClick?: () => void
}
const ProductionSubMenu = ({
    onMouseEnter,
    onMouseLeave,
    onMenuItemClick,
}: Props) => {
    return (
        <>
            <div
                className="sub-menu-wraper"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {productionArray.map(({ id, subTitle, path }) => (
                    <ProductionSubMenuItem
                        key={id}
                        path={path}
                        onMenuItemClick={onMenuItemClick}
                    >
                        {subTitle}
                    </ProductionSubMenuItem>
                ))}
            </div>
        </>
    )
}
export default ProductionSubMenu
