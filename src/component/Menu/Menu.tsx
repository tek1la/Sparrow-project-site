import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import MenuItem from './MenuItem'
import ProductionSubMenu from './ProductionSubMenu'
import { useMediaQuery } from '@mui/material'

type Props = {}

const Menu = (props: Props) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
    const [activeItem, setActiveItem] = useState<string | null>(null)
    const [isMouseOverMenu, setIsMouseOverMenu] = useState(false)
    const [isMouseOverSubMenu, setIsMouseOverSubMenu] = useState(false)
    const navigate = useNavigate()
    const isMobile = useMediaQuery('(max-width:768px)')

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null

        if (!isMouseOverMenu && !isMouseOverSubMenu) {
            timer = setTimeout(() => {
                setIsSubMenuOpen(false)
            }, 500)
        } else {
            if (timer) clearTimeout(timer)
        }

        return () => {
            if (timer) clearTimeout(timer)
        }
    }, [isMouseOverMenu, isMouseOverSubMenu])

    const handleMouseEnter = useCallback(() => {
        setIsSubMenuOpen(true)
    }, [])

    const handleMouseLeave = useCallback(() => {
        setIsMouseOverMenu(false)
        setIsMouseOverSubMenu(false)
    }, [])

    const handleMouseOverMenu = useCallback(() => {
        setIsMouseOverMenu(true)
        handleMouseEnter()
    }, [handleMouseEnter])

    const handleMouseOverSubMenu = useCallback(() => {
        setIsMouseOverSubMenu(true)
        handleMouseEnter()
    }, [handleMouseEnter])

    const handleClick = useCallback((item: string) => {
        setActiveItem(item)
    }, [])

    const handleAboutClick = useCallback(() => {
        setActiveItem('about')
        navigate('/')

        // Прокрутка до секції через requestAnimationFrame для плавності
        requestAnimationFrame(() => {
            const aboutSection = document.getElementById('about')
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' })
            }
        })
    }, [navigate])

    return (
        <>
            <MenuItem
                onMouseEnter={handleMouseOverMenu}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('production')}
                className={`menu-item menu-arrow ${activeItem === 'production' ? 'active' : ''}`}
            >
                ВИРОБНИЦТВО
                {!isMobile && isSubMenuOpen && (
                    <ProductionSubMenu
                        onMouseEnter={handleMouseOverSubMenu}
                        onMouseLeave={handleMouseLeave}
                    />
                )}
            </MenuItem>
            {isMobile && isSubMenuOpen && (
                <ProductionSubMenu
                    onMouseEnter={handleMouseOverSubMenu}
                    onMouseLeave={handleMouseLeave}
                />
            )}
            <MenuItem
                onClick={() => handleClick('contacts')}
                className={`menu-item ${activeItem === 'contacts' ? 'active' : ''}`}
                to={'contacts'}
            >
                КОНТАКТИ
            </MenuItem>
            <MenuItem
                onClick={() => handleClick('blog')}
                className={`menu-item ${activeItem === 'blog' ? 'active' : ''}`}
                to={'all-news'}
            >
                БЛОГ
            </MenuItem>
            <MenuItem
                onClick={() => handleAboutClick()}
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
