import { useState, useCallback } from 'react'
import MenuItem from './MenuItem'
import ProductionSubMenu from './ProductionSubMenu'

type Props = {}

const Menu = (props: Props) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
    const [activeItem, setActiveItem] = useState<string | null>(null)
    const [isMouseOverMenu, setIsMouseOverMenu] = useState(false)
    const [isMouseOverSubMenu, setIsMouseOverSubMenu] = useState(false)
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)

    const handleMouseEnterMenu = () => {
        if (timer) {
            clearTimeout(timer)
        }
        setIsSubMenuOpen(true)
        setIsMouseOverMenu(true)
    }

    const handleMouseLeaveMenu = () => {
        if (timer) {
            clearTimeout(timer)
        }
        const newTimer = setTimeout(() => {
            if (!isMouseOverSubMenu) {
                setIsSubMenuOpen(false)
            }
        }, 500) // Затримка перед закриттям підменю (500 мс)
        setTimer(newTimer)
        setIsMouseOverMenu(false)
        setIsMouseOverSubMenu(false)
    }

    const handleMouseEnterSubMenu = () => {
        if (timer) {
            clearTimeout(timer)
        }
        setIsSubMenuOpen(true)
        setIsMouseOverSubMenu(true)
    }

    const handleMouseLeaveSubMenu = () => {
        if (timer) {
            clearTimeout(timer)
        }
        const newTimer = setTimeout(() => {
            if (isMouseOverMenu) {
                setIsSubMenuOpen(false)
            }
        }, 500)
        setTimer(newTimer)
        setIsMouseOverSubMenu(false)
        setIsMouseOverMenu(false)
    }

    const handleClick = (item: string) => {
        setActiveItem(item)
    }

    return (
        <>
            <MenuItem
                onMouseEnter={handleMouseEnterMenu}
                onMouseLeave={handleMouseLeaveMenu}
                onClick={() => handleClick('production')}
                className={`menu-item menu-arrow ${activeItem === 'production' ? 'active' : ''}`}
            >
                ВИРОБНИЦТВО
                {isSubMenuOpen && (
                    <ProductionSubMenu
                        onMouseEnter={handleMouseEnterSubMenu}
                        onMouseLeave={handleMouseLeaveSubMenu}
                    />
                )}
            </MenuItem>
            <MenuItem
                onClick={() => handleClick('contacts')}
                className={`menu-item ${activeItem === 'contacts' ? 'active' : ''}`}
            >
                КОНТАКТИ
            </MenuItem>
            <MenuItem
                onClick={() => handleClick('blog')}
                className={`menu-item ${activeItem === 'blog' ? 'active' : ''}`}
            >
                БЛОГ
            </MenuItem>
            <MenuItem
                onClick={() => handleClick('about')}
                className={`menu-item ${activeItem === 'about' ? 'active' : ''}`}
            >
                ПРО НАС
            </MenuItem>
            {/* <MenuItem
                onClick={() => handleClick('shop')}
                className={`menu-item ${activeItem === 'shop' ? 'active' : ''}`}
            >
                МАГАЗИН
            </MenuItem> */}
        </>
    )
}

export default Menu
