import { useState } from 'react'
import MenuItem from './MenuItem'
import ProductionSubMenu from './ProductionSubMenu'

type Props = {}
const Menu = (props: Props) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

    return (
        <>
            <MenuItem>ПРО НАС</MenuItem>
            <MenuItem
                onMouseEnter={() => setIsSubMenuOpen(true)}
                onMouseLeave={() => setIsSubMenuOpen(false)}
            >
                ВИРОБНИЦТВО
                {isSubMenuOpen && <ProductionSubMenu />}
            </MenuItem>
            <MenuItem>НОВИНИ</MenuItem>
            <MenuItem>КАТАЛОГ</MenuItem>
            <MenuItem>КОНТАКТИ</MenuItem>
        </>
    )
}
export default Menu
