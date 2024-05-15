import MenuItem from './MenuItem'
import './ProductionSubMenu.css'
import { productionArray } from 'utils/productionArray'

type Props = {}
const ProductionSubMenu = (props: Props) => {
    return (
        <>
            <div className="sub-menu-wraper">
                {productionArray.map(({ id, title }) => (
                    <MenuItem key={id}>{title}</MenuItem>
                ))}
            </div>
        </>
    )
}
export default ProductionSubMenu
